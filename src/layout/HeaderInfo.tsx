import ThemeSwitcher from "@components/ThemeSwitcher";
import { GITHUB_REPO_URL } from "@data/constants";
import { Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { version } from "../../package.json";

export default function HeaderInfo() {
  return (
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
  );
}
