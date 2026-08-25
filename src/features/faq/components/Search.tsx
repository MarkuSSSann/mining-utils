import { Label, SearchField } from "@heroui/react";
import type { FaqMessage, FaqResponse } from "@types";
import { useMemo, useState } from "react";
import useFuse from "../hooks/useFuse";
import { setSearchResultAtom } from "../context/search";
import { useSetAtom } from "jotai";

import removeMd from "remove-markdown";

type Props = {
  data: FaqResponse[];
};

export default function Search({ data }: Props) {
  const [query, setQuery] = useState("");
  const setSearchResults = useSetAtom(setSearchResultAtom);

  const searchData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      plainAnswer: removeMd(item.answer),
      plainQuestion: removeMd(item.question),
    }));
  }, [data]);

  const results = useFuse<FaqMessage>({
    data: searchData,
    query,
    searchKeys: [
      { name: "plainAnswer", weight: 0.3 },
      { name: "plainQuestion", weight: 0.7 },
    ],
  });

  const displayItems =
    results.length > 0 ?
      results
    : searchData.map((data) => ({ item: data, refIndex: 0 }));

  setSearchResults({ results: displayItems });
  return (
    <SearchField
      name="search"
      value={query}
      onChange={setQuery}
      variant="secondary">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Ask a question..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}
