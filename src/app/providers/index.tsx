import ThemeProvider from "./ThemeProvider";
import TablesProvider from "./TablesProvider";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";
import { Toast } from "@heroui/react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Toast.Provider />
      <TablesProvider>{children}</TablesProvider>
    </ThemeProvider>
  );
}
