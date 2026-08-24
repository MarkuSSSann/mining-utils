import { FaqMessageSchema } from "@data/schemas";
import type { FaqMessage } from "@types";

export async function fetchFaq(): Promise<FaqMessage[]> {
  const response = await fetch("/faq.json");

  if (!response.ok) {
    throw new Error(`FAQ request failed with status ${response.status}`);
  }

  return FaqMessageSchema.array().parse(await response.json());
}
