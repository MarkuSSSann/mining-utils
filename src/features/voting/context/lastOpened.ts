import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const __lastOpenedAtom = atomWithStorage<Record<string, number>>(
  "voting-links-last-opened",
  {},
);

export const getLastOpenedAtom = atom((get) => get(__lastOpenedAtom));

export const markLinksOpenedAtom = atom(
  null,
  (_, set, { links }: { links: string[] }) => {
    const timestamp = Date.now();
    set(__lastOpenedAtom, (current) => ({
      ...current,
      ...Object.fromEntries(links.map((link) => [link, timestamp])),
    }));
  },
);
