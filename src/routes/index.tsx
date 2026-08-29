import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="h-4 w-4 rounded-full bg-black" />
    </div>
  );
}
