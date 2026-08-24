import { NAV_ITEMS } from "@data/config";
import { GITHUB_REPO_URL } from "@data/constants";
import ItemCard from "./components/ItemCard";
import { Card, Link } from "@heroui/react";

export default function index() {
  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-2xl pb-2">Home</Card.Title>
        <Card.Description>
          Fan made set of utils, specifically for a prison game mode on{" "}
          <Link
            href={"https://store.sunrealms.net/"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2">
            SunRealms
          </Link>{" "}
          Minecraft server. Completes with several useful utils to enhance ur
          mining experience. If you have any questions, proposal or complaints,
          DM me in Discord or in the game - <b>MarkuSSSan</b>. You can also
          reach me on{" "}
          <Link
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2">
            GitHub
          </Link>
          .
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {NAV_ITEMS.map(
            (item) =>
              item.id !== "home" && <ItemCard key={item.id} item={item} />,
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
