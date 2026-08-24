import { createFileRoute } from "@tanstack/react-router";
import Faq from "@features/faq";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Faq />;
}
