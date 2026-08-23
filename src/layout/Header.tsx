import { Button, Chip } from "@heroui/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Icon } from "@iconify/react";

import { version } from "../../package.json";
import { GITHUB_REPO_URL } from "@data/constants";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-col gap-1 pt-6 border-b border-default-200 bg-background-secondary">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Mining utils
            </h1>
            <Chip className="hidden md:flex px-2 py-0.5 rounded-lg">
              v{version}
            </Chip>
          </div>
          <p className="text-sm md:text-base text-default-500">
            Compare strategies, track gains per minute, check data and more
          </p>
        </div>

        <div className="flex items-center gap-3 justify-between md:justify-end">
          <Chip className="md:hidden px-2 py-0.5 rounded-lg text-center">
            v{version}
          </Chip>

          <div className="flex items-center gap-2">
            <Button
              isIconOnly
              aria-label="GitHub Repository"
              className="cursor-pointer"
              size="sm"
              variant="tertiary"
              onClick={() => window.open(GITHUB_REPO_URL, "_blank")}>
              <Icon icon="mdi:github" className="text-xl" />
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
