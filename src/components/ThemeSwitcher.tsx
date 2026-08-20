import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <ToggleButtonGroup
      defaultSelectedKeys={[theme ?? "system"]}
      selectionMode="single"
      size="sm">
      <ToggleButton id="light" onPress={() => setTheme("light")}>
        <Icon icon={"line-md:sun-rising-loop"} />
      </ToggleButton>
      <ToggleButton id="dark" onPress={() => setTheme("dark")}>
        <ToggleButtonGroup.Separator />
        <Icon icon={"line-md:moon-rising-alt-loop"} />
      </ToggleButton>
      <ToggleButton id="system" onPress={() => setTheme("system")}>
        <ToggleButtonGroup.Separator />
        <Icon icon={"line-md:monitor"} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
