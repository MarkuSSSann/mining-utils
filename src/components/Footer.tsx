import { version } from "../../package.json";
import { Icon } from "@iconify/react";

export default function Footer() {
  const githubRepoUrl = "https://github.com/MarkuSSSann/mining-utils";

  return (
    <footer className="mt-auto py-6 border-t border-default-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-default-500">
      <div className="flex flex-col gap-1 text-center md:text-left max-w-xl">
        <p className="text-xs">
          Not an official Minecraft product. Not approved by or associated with
          Mojang, Microsoft, or SunRealms.
        </p>
        <p className="text-xs text-default-400">
          © 2026 MarkuSSSann. Released under the MIT License.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Icon icon="mdi:github" className="text-lg" />
          <span>GitHub</span>
        </a>
        <span className="text-default-300">•</span>
        <span className="text-xs">v{version}</span>
      </div>
    </footer>
  );
}
