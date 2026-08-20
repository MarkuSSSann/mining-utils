import { AllCommunityModule, ValidationModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";

const modules = [AllCommunityModule, ValidationModule];

export default function TablesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AgGridProvider modules={modules}>{children}</AgGridProvider>;
}
