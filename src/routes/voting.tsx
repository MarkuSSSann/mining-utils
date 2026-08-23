import Voting from "@features/voting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/voting")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Voting />;
}
