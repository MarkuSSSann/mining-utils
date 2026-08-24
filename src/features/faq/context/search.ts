import type { FaqMessage } from "@types";
import type { FuseResult } from "fuse.js";
import { atom } from "jotai";

const __searchResultAtom = atom<FuseResult<FaqMessage>[]>();

export const getSearchResultAtom = atom((get) => get(__searchResultAtom));
export const setSearchResultAtom = atom(
  null,
  (_, set, { results }: { results: FuseResult<FaqMessage>[] }) => {
    set(__searchResultAtom, results);
  },
);
