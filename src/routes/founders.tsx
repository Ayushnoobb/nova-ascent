import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/founders")({
  beforeLoad: () => { throw redirect({ to: "/team", replace: true, statusCode: 301 }); },
});
