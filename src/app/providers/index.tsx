import ThemeProvider from "./ThemeProvider";
import TablesProvider from "./TablesProvider";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";
import { Toast } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ModuleRegistry.registerModules([AllCommunityModule]);

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toast.Provider />
        <TablesProvider>{children}</TablesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
