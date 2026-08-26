import { Card } from "@heroui/react";
import type { FaqMessage } from "@types";
import type { FuseResult } from "fuse.js";
import { highlightMatches } from "../utils/text";
import { Markdown } from "@tanstack/markdown/react";

type Props = {
  result: FuseResult<FaqMessage>;
};
export default function FaqCard({ result }: Props) {
  const { item, matches } = result;
  const answerMatch = matches?.find((m) => m.key === "plainAnswer");
  const questionMatch = matches?.find((m) => m.key === "plainQuestion");

  return (
    <Card key={item.id} className="gap-1">
      <Card.Header className="flex-row">
        {questionMatch ?
          <span>
            Q: {highlightMatches(item.plainQuestion, questionMatch.indices)}
          </span>
        : <Markdown>{`Q: ${item.question}`}</Markdown>}
      </Card.Header>
      <Card.Content className="flex-row">
        {answerMatch ?
          <span>
            A: {highlightMatches(item.plainAnswer, answerMatch.indices)}
          </span>
        : <Markdown>{`A: ${item.answer}`}</Markdown>}
      </Card.Content>
    </Card>
  );
}
