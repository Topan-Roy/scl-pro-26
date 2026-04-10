import { getDepartmentById } from "@/data/departments";
import { DepartmentDetailPage } from "../department-detail-page";

export default function ComputerTechnologyPage() {
  return <DepartmentDetailPage department={getDepartmentById("computer")} />;
}
