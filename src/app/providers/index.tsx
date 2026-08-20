import ThemeProvider from "./ThemeProvider";
import TablesProvider from "./TablesProvider";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TablesProvider>{children}</TablesProvider>
    </ThemeProvider>
  );
}
