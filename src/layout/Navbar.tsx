import { NAV_ITEMS } from "@data/config";
import { Tabs } from "@heroui/react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation({ select: (location) => location.pathname });
  const selectedKey = NAV_ITEMS.find((item) => item.path === pathname)?.id;

  return (
    <nav>
      <Tabs
        className="w-full"
        variant="secondary"
        selectedKey={selectedKey}
        onSelectionChange={(key) => {
          const item = NAV_ITEMS.find((navItem) => navItem.id === key);
          if (item) {
            navigate({ to: item.path });
          }
        }}>
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
