function unsplash(photoPath: string, width = 1200) {
  return `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&w=${width}&q=80`;
}

export const computerLabImages = [
  unsplash("photo-1498050108023-c5249f4df085"),
  unsplash("photo-1515879218367-8466d910aaa4"),
  unsplash("photo-1516321318423-f06f85e504b3"),
  unsplash("photo-1517694712202-14dd9538aa97"),
];

export const engineeringLabImages = [
  unsplash("photo-1581091226825-a6a2a5aee158"),
  unsplash("photo-1581092335397-9583eb92d232"),
  unsplash("photo-1581092580497-e0d23cbdf1dc"),
  unsplash("photo-1581092918056-0c4c3acd3789"),
];

export const electricalWorkshopImages = [
  unsplash("photo-1581092795360-fd1ca04f0952"),
  unsplash("photo-1581092921461-eab62e97a780"),
  unsplash("photo-1581092160562-40aa08e78837"),
  unsplash("photo-1517048676732-d65bc937f952"),
];

export const civilArchitectureImages = [
  unsplash("photo-1503387762-592deb58ef4e"),
  unsplash("photo-1531482615713-2afd69097998"),
  unsplash("photo-1520607162513-77705c0f0d4a"),
  unsplash("photo-1460317442991-0ec209397118"),
];

export const campusImages = [
  unsplash("photo-1562774053-701939374585"),
  unsplash("photo-1523050854058-8df90110c9f1"),
  unsplash("photo-1523240795612-9a054b0db644"),
  unsplash("photo-1497366754035-f200968a6e72"),
];

export const ceremonyImages = [
  unsplash("photo-1511578314322-379afb476865"),
  unsplash("photo-1522202176988-66273c2fd55f"),
  unsplash("photo-1521791136064-7986c2920216"),
  unsplash("photo-1515169067868-5387ec356754"),
];

export const homeHeroSlides = [
  civilArchitectureImages[0],
  engineeringLabImages[0],
  computerLabImages[0],
];

export const admissionGalleryImages = {
  practicalLab: engineeringLabImages[1],
  campusBuilding: campusImages[0],
  achievementCeremony: ceremonyImages[0],
};

export const departmentHeroSlides = [
  computerLabImages[0],
  electricalWorkshopImages[0],
  civilArchitectureImages[0],
  engineeringLabImages[2],
];

export const departmentImageGroups = {
  computer: [
    computerLabImages[0],
    computerLabImages[1],
    computerLabImages[2],
  ],
  electrical: [
    electricalWorkshopImages[0],
    electricalWorkshopImages[1],
    electricalWorkshopImages[2],
  ],
  civil: [
    civilArchitectureImages[0],
    civilArchitectureImages[1],
    campusImages[1],
  ],
  mechanical: [
    engineeringLabImages[2],
    engineeringLabImages[3],
    electricalWorkshopImages[3],
  ],
};

export const programImageGroups = {
  civil: departmentImageGroups.civil,
  electrical: departmentImageGroups.electrical,
  computer: departmentImageGroups.computer,
  mechanical: departmentImageGroups.mechanical,
  architecture: [
    civilArchitectureImages[1],
    civilArchitectureImages[3],
    campusImages[2],
  ],
  apparel: [
    engineeringLabImages[0],
    ceremonyImages[2],
    computerLabImages[3],
  ],
  wet: [
    engineeringLabImages[1],
    electricalWorkshopImages[2],
    engineeringLabImages[2],
  ],
  fashion: [
    ceremonyImages[1],
    civilArchitectureImages[2],
    engineeringLabImages[0],
  ],
  fabric: [
    engineeringLabImages[3],
    electricalWorkshopImages[3],
    campusImages[3],
  ],
  yarn: [
    electricalWorkshopImages[1],
    engineeringLabImages[2],
    computerLabImages[2],
  ],
};

export const commonInnerHeroSlides = [
  computerLabImages[1],
  engineeringLabImages[1],
  electricalWorkshopImages[1],
  campusImages[0],
];

export const galleryHeroImages = [
  engineeringLabImages[0],
  computerLabImages[1],
  campusImages[2],
];

const galleryPool = [
  ...computerLabImages,
  ...engineeringLabImages,
  ...electricalWorkshopImages,
  ...civilArchitectureImages,
  ...campusImages,
  ...ceremonyImages,
];

export function repeatGalleryImages(count: number, offset = 0) {
  return Array.from({ length: count }, (_, index) => {
    const imageIndex = (offset + index) % galleryPool.length;
    return galleryPool[imageIndex];
  });
}
