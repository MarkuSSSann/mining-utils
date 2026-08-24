import { Card } from "@heroui/react";
import type { FaqMessage } from "@types";
import type { FuseResult } from "fuse.js";
import { highlightMatches } from "../utils/text";

type Props = {
  result: FuseResult<FaqMessage>;
};
export default function FaqCard({ result }: Props) {
  const { item, matches } = result;
  const answerMatch = matches?.find((m) => m.key === "answer");
  const questionMatch = matches?.find((m) => m.key === "question");

  return (
    <Card key={item.id} className="gap-1">
      <Card.Header className="text-xl font-bold">
        <span>
          Q: {highlightMatches(item.question, questionMatch?.indices)}
        </span>
      </Card.Header>
      <Card.Content>
        <span>A: {highlightMatches(item.answer, answerMatch?.indices)}</span>
      </Card.Content>
    </Card>
  );
}
