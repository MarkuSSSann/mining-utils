import { useQuery } from "@tanstack/react-query";
import { Card, Label, SearchField } from "@heroui/react";
import { fetchFaq } from "./api/fetch";
import useFuse from "./hooks/useFuse";
import type { FaqMessage } from "@types";
import { useState } from "react";
import FaqCard from "./components/FaqCard";

export default function Faq() {
  const [query, setQuery] = useState("");
  const { data, error, isPending } = useQuery({
    queryKey: ["faq"],
    queryFn: fetchFaq,
  });

  const results = useFuse<FaqMessage>({
    data: data ?? [],
    query,
    searchKeys: ["answer", "question"],
  });

  if (isPending) {
    return <p>Loading FAQ...</p>;
  }

  if (error) {
    return <p role="alert">Unable to load FAQ: {error.message}</p>;
  }

  const displayItems =
    results.length > 0 ?
      results
    : data.map((data) => ({ item: data, refIndex: 0 }));

  return (
    <>
      <Card>
        <Card.Header className="flex flex-row justify-between">
          <div>
            <Card.Title className="text-2xl pb-2">FAQ</Card.Title>
            <Card.Description>
              Frequently asked questions about Mining Utils.
            </Card.Description>
          </div>
          <SearchField name="search" value={query} onChange={setQuery}>
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="w-70" placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </Card.Header>
      </Card>

      {displayItems.map((result) => (
        <FaqCard result={result} />
      ))}
    </>
  );
}
