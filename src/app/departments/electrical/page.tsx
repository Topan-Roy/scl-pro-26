import { getDepartmentById } from "@/data/departments";
import { DepartmentDetailPage } from "../department-detail-page";

export default function ElectricalTechnologyPage() {
  return <DepartmentDetailPage department={getDepartmentById("electrical")} />;
}
