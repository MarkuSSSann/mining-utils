import { NAV_ITEMS } from "@data/config";
import ItemCard from "./components/ItemCard";

export default function index() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {NAV_ITEMS.map(
        (item) => item.id !== "home" && <ItemCard key={item.id} item={item} />,
      )}
    </div>
  );
}
