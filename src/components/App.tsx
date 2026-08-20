import ThemeSwitcher from "./ThemeSwitcher";
import Sessions from "../features/sessions";

export default function App() {
  return (
    <main className="min-h-screen bg-dark-50 px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-row space-between">
          <div className="mr-auto">
            <h1 className="text-3xl font-bold text-foreground">Mining utils</h1>
            <p className="mt-2 text-default-500">
              Compare strategies, track gains per minute, check data and more
            </p>
          </div>
          <ThemeSwitcher />
        </header>
        <Sessions />
      </div>
    </main>
  );
}
