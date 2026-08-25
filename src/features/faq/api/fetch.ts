import { FaqMessageSchema } from "@data/schemas";
import type { FaqResponse } from "@types";

export async function fetchFaq(): Promise<FaqResponse[]> {
  const response = await fetch("/faq.json");

  if (!response.ok) {
    throw new Error(`FAQ request failed with status ${response.status}`);
  }

  return FaqMessageSchema.array().parse(await response.json());
}
