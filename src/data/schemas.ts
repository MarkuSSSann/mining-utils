import * as zod from "zod";

export const FaqMessageSchema = zod.object({
  id: zod.string(),
  answer: zod.string(),
  question: zod.string(),
});
