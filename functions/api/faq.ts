import { Hono } from "hono";
import { cache } from "hono/cache";

const app = new Hono<{ Bindings: Env }>().basePath("/api");

app.get(
  "/faq",
  cache({
    cacheName: "faq-cache",
    cacheControl: "public, max-age=300, s-maxage=3600",
  }),
  async (c) => {
    console.log("object :>> ", c.env.UTILS_BUCKET);
    const object = await c.env.UTILS_BUCKET.get("faq.json");
    if (!object) {
      console.error("no data to display");
      return c.json({ error: "FAQ file not found" }, 404);
    }

    return c.body(object.body, 200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    });
  },
);

app.onError((err, c) => {
  console.error(`[Server Error]: ${err.message}`);
  return c.json({ error: "Internal Server Error", details: err.message }, 500);
});

export const onRequest: PagesFunction<Env> = (context) => {
  const executionContext = {
    waitUntil: context.waitUntil.bind(context),
    passThroughOnException: context.passThroughOnException.bind(context),
    props: {},
  };
  return app.fetch(context.request, context.env, executionContext);
};
