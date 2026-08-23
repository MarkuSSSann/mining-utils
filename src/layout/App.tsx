import Sessions from "../features/sessions";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <main className="min-h-screen px-4 sm:px-8 bg-background-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Header />
        <Sessions />
        <Footer />
      </div>
    </main>
  );
}
