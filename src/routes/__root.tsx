import { createRootRoute } from "@tanstack/react-router";
import RootLayoutComponent from "../layout/RootLayout";

const RootLayout = () => <RootLayoutComponent />;

export const Route = createRootRoute({ component: RootLayout });
