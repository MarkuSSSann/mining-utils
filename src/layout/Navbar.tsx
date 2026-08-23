import { Tabs } from "@heroui/react";

export default function Navbar() {
  return (
    <nav>
      <Tabs className="w-full max-w-md" variant="secondary">
        <Tabs.ListContainer>
          <Tabs.List aria-label="tool navbar">
            <Tabs.Tab id="sessions">
              Sessions
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="voting">
              Voting
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </nav>
  );
}
