import { NAV_ITEMS } from "@data/config";
import { Tabs } from "@heroui/react";

export default function Navbar() {
  return (
    <nav>
      <Tabs className="w-full max-w-md" variant="secondary">
        <Tabs.ListContainer>
          <Tabs.List aria-label="tool navbar">
            {NAV_ITEMS.map((item) => (
              <Tabs.Tab key={item.id} id={item.id}>
                {item.title}
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </nav>
  );
}
