import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <main className="min-h-screen px-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
