import { Label, SearchField } from "@heroui/react";
import type { FaqMessage } from "@types";
import { useState } from "react";
import useFuse from "../hooks/useFuse";
import { setSearchResultAtom } from "../context/search";
import { useSetAtom } from "jotai";

type Props = {
  data: FaqMessage[];
};

export default function Search({ data }: Props) {
  const [query, setQuery] = useState("");
  const setSearchResults = useSetAtom(setSearchResultAtom);
  const results = useFuse<FaqMessage>({
    data: data ?? [],
    query,
    searchKeys: ["answer", "question"],
  });

  const displayItems =
    results.length > 0 ?
      results
    : data.map((data) => ({ item: data, refIndex: 0 }));

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
        <SearchField.Input className="w-70" placeholder="Ask a question..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}
