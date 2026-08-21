import Sessions from "../features/sessions";
import Header from "./Header";

export default function App() {
  return (
    <main className="min-h-screen bg-dark-50 px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Header />
        <Sessions />
      </div>
    </main>
  );
}
