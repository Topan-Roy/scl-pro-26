import { getDepartmentById } from "@/data/departments";
import { DepartmentDetailPage } from "../department-detail-page";

export default function CivilTechnologyPage() {
  return <DepartmentDetailPage department={getDepartmentById("civil")} />;
}
