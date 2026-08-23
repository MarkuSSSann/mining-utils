import Navbar from "./Navbar";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-col gap-1 pt-6 border-b border-default-200 bg-background-secondary">
      <HeaderInfo />
      <Navbar />
    </header>
  );
}
