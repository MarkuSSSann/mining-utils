import { useQuery } from "@tanstack/react-query";
import { Card } from "@heroui/react";
import type { FaqMessage } from "@types";
import { FaqMessageSchema } from "@data/schemas";

async function fetchFaq(): Promise<FaqMessage[]> {
  const response = await fetch("/faq.json");

  if (!response.ok) {
    throw new Error(`FAQ request failed with status ${response.status}`);
  }

  return FaqMessageSchema.array().parse(await response.json());
}

export default function Faq() {
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

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title className="text-2xl pb-2">FAQ</Card.Title>
          <Card.Description>
            Frequently asked questions about Mining Utils.
          </Card.Description>
        </Card.Header>
      </Card>
      {data.map((message) => (
        <Card key={message.id}>
          <Card.Header className="text-xl font-bold">
            Q: {message.question}
          </Card.Header>
          <Card.Content>A: {message.answer}</Card.Content>
        </Card>
      ))}
    </>
  );
}
