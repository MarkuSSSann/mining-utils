import { useQuery } from "@tanstack/react-query";
import { Card } from "@heroui/react";
import { fetchFaq } from "./api/fetch";
import FaqCard from "./components/FaqCard";
import Search from "./components/Search";
import { useAtomValue } from "jotai";
import { getSearchResultAtom } from "./context/search";

export default function Faq() {
  const { data, error, isPending } = useQuery({
    queryKey: ["faq"],
    queryFn: fetchFaq,
  });
  const displayItems = useAtomValue(getSearchResultAtom);

  if (isPending) return <p>Loading FAQ...</p>;
  if (error) return <p role="alert">Unable to load FAQ: {error.message}</p>;

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title className="text-2xl">FAQ</Card.Title>
          <Card.Description>
            Frequently asked questions about Prison. If u didn't find an answer,
            ask me in game on DM in Discord - MarkuSSSan.
          </Card.Description>
        </Card.Header>
        <Search data={data} />
      </Card>

      {displayItems?.map((result) => (
        <FaqCard result={result} />
      ))}
    </>
  );
}
