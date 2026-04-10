"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import styles from "./ar-viewport.module.css";

type SupportState = "checking" | "ready" | "unsupported" | "error";

const supportCopy: Record<
  SupportState,
  { label: string; detail: string; tone: "neutral" | "ready" | "warn" }
> = {
  checking: {
    label: "Checking device support",
    detail: "Looking for WebXR immersive-ar support in the current browser.",
    tone: "neutral",
  },
  ready: {
    label: "AR-ready browser detected",
    detail: "Use the launch button below to open the scene in an immersive AR session.",
    tone: "ready",
  },
  unsupported: {
    label: "Preview only on this device",
    detail: "The animated scene still works here, but immersive AR needs a compatible browser and secure context.",
    tone: "warn",
  },
  error: {
    label: "Support check failed",
    detail: "WebXR did not initialize correctly, so the preview stays in desktop mode.",
    tone: "warn",
  },
};

export function ARViewport() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [supportState, setSupportState] = useState<SupportState>("checking");

  useEffect(() => {
    const canvasRoot = canvasRef.current;
    const buttonRoot = buttonRef.current;

    if (!canvasRoot || !buttonRoot) {
      return;
    }

    let mounted = true;
    let arButton: HTMLElement | null = null;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.55, 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.xr.enabled = true;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const initialWidth = Math.max(canvasRoot.clientWidth, 320);
    const initialHeight = Math.max(canvasRoot.clientHeight, 320);
    renderer.setSize(initialWidth, initialHeight, false);
    canvasRoot.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xaad8ff, 1.9));

    const warmLight = new THREE.DirectionalLight(0xfff3da, 2.4);
    warmLight.position.set(4, 5, 3);
    scene.add(warmLight);

    const coolLight = new THREE.DirectionalLight(0x56d3ff, 2.8);
    coolLight.position.set(-4, 1.5, -3);
    scene.add(coolLight);

    const showcase = new THREE.Group();
    scene.add(showcase);

    const anchorDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.35, 0.16, 72),
      new THREE.MeshStandardMaterial({
        color: 0x10223a,
        emissive: 0x091522,
        emissiveIntensity: 0.7,
        metalness: 0.3,
        roughness: 0.34,
      }),
    );
    anchorDisc.position.y = -1.02;
    showcase.add(anchorDisc);

    const signalRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.22, 0.045, 24, 180),
      new THREE.MeshStandardMaterial({
        color: 0xff7a5c,
        emissive: 0xff7a5c,
        emissiveIntensity: 1.6,
        metalness: 0.55,
        roughness: 0.2,
      }),
    );
    signalRing.position.y = -0.72;
    signalRing.rotation.x = Math.PI / 2;
    showcase.add(signalRing);

    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.86, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0xeef8ff,
        emissive: 0x5bd9ff,
        emissiveIntensity: 0.5,
        roughness: 0.08,
        metalness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transmission: 0.22,
        thickness: 0.8,
      }),
    );
    showcase.add(orb);

    const orbitFrame = new THREE.Mesh(
      new THREE.TorusGeometry(1.34, 0.03, 18, 180),
      new THREE.MeshStandardMaterial({
        color: 0x6bf0ff,
        emissive: 0x6bf0ff,
        emissiveIntensity: 0.9,
        metalness: 0.68,
        roughness: 0.18,
      }),
    );
    orbitFrame.rotation.set(Math.PI / 3, 0, Math.PI / 5);
    showcase.add(orbitFrame);

    const satellite = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12, 0),
      new THREE.MeshStandardMaterial({
        color: 0xddff7a,
        emissive: 0xa1d631,
        emissiveIntensity: 1.1,
        roughness: 0.28,
      }),
    );
    showcase.add(satellite);

    const updatePreviewLayout = () => {
      const width = Math.max(canvasRoot.clientWidth, 320);
      const height = Math.max(canvasRoot.clientHeight, 320);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handleSessionStart = () => {
      showcase.position.set(0, -0.25, -1.6);
      showcase.scale.setScalar(0.82);
    };

    const handleSessionEnd = () => {
      showcase.position.set(0, 0, 0);
      showcase.scale.setScalar(1);
    };

    renderer.xr.addEventListener("sessionstart", handleSessionStart);
    renderer.xr.addEventListener("sessionend", handleSessionEnd);

    const resizeObserver = new ResizeObserver(updatePreviewLayout);
    resizeObserver.observe(canvasRoot);

    renderer.setAnimationLoop((time) => {
      const seconds = time * 0.001;

      orb.rotation.x = seconds * 0.28;
      orb.rotation.y = seconds * 0.42;
      orbitFrame.rotation.z = seconds * 0.72;
      satellite.position.set(
        Math.cos(seconds * 1.15) * 1.54,
        Math.sin(seconds * 1.85) * 0.32,
        Math.sin(seconds * 1.15) * 1.54,
      );

      if (!renderer.xr.isPresenting) {
        showcase.position.y = Math.sin(seconds * 1.4) * 0.08;
        camera.position.x = Math.sin(seconds * 0.33) * 0.28;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    });

    const checkSupport = async () => {
      const xr = navigator.xr;

      if (!xr) {
        setSupportState("unsupported");
        return;
      }

      try {
        const isSupported = await xr.isSessionSupported("immersive-ar");

        if (!mounted) {
          return;
        }

        if (!isSupported) {
          setSupportState("unsupported");
          return;
        }

        arButton = ARButton.createButton(renderer, {
          optionalFeatures: ["dom-overlay"],
          domOverlay: { root: document.body },
        });
        arButton.classList.add(styles.arLaunch);
        buttonRoot.appendChild(arButton);
        setSupportState("ready");
      } catch {
        if (mounted) {
          setSupportState("error");
        }
      }
    };

    void checkSupport();

    return () => {
      mounted = false;
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);
      renderer.xr.removeEventListener("sessionstart", handleSessionStart);
      renderer.xr.removeEventListener("sessionend", handleSessionEnd);
      arButton?.remove();

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
          return;
        }

        object.material.dispose();
      });

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  const supportMeta = supportCopy[supportState];

  return (
    <section className={styles.shell}>
      <div className={styles.panel}>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <p>BGC viewport</p>
        </div>

        <div className={styles.stage}>
          <div className={styles.canvas} ref={canvasRef} />
          <div className={styles.overlay}>
            <div className={`${styles.status} ${styles[supportMeta.tone]}`}>
              <span>{supportMeta.label}</span>
              <p>{supportMeta.detail}</p>
            </div>
            <div className={styles.buttonSlot} ref={buttonRef} />
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <span>Preview mode</span>
            <strong>Live Three.js scene</strong>
          </div>
          <div>
            <span>Immersive target</span>
            <strong>WebXR compatible mobile browser</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
