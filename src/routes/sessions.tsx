import Sessions from "@features/sessions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sessions")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Sessions />;
}
