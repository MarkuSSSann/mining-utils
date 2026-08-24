import { useQuery } from "@tanstack/react-query";
import { Card, Label, SearchField } from "@heroui/react";
import { fetchFaq } from "./api/fetch";
import useFuse from "./hooks/useFuse";
import type { FaqMessage } from "@types";
import { useState } from "react";

export default function Faq() {
  const [query, setQuery] = useState("");
  const { data, error, isPending } = useQuery({
    queryKey: ["faq"],
    queryFn: fetchFaq,
  });

  if (isPending) {
    return <p>Loading FAQ...</p>;
  }

  if (error) {
    return <p role="alert">Unable to load FAQ: {error.message}</p>;
  }

  const results = useFuse<FaqMessage>({
    data,
    query,
    searchKeys: ["answer", "question"],
  });

  const displayItems =
    results.length > 0 ? results.map(({ item }) => item) : data;

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
      {displayItems.map((message) => (
        <Card key={message.id} className="gap-1">
          <Card.Header className="text-xl font-bold">
            Q: {message.question}
          </Card.Header>
          <Card.Content>A: {message.answer}</Card.Content>
        </Card>
      ))}
    </>
  );
}
