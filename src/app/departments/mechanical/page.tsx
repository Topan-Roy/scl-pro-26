import { getDepartmentById } from "@/data/departments";
import { DepartmentDetailPage } from "../department-detail-page";

export default function MechanicalTechnologyPage() {
  return <DepartmentDetailPage department={getDepartmentById("mechanical")} />;
}
