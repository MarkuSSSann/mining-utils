import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const RootLayout = () => (
  <>
    <main className="min-h-screen px-4 sm:px-8 bg-background-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
