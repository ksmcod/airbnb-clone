import EmptyState from "./components/EmptyState";

export default function NotFoundPage() {
  return (
    <EmptyState
      title="404"
      subtitle="The page you are looking for could not be found!"
    />
  );
}
