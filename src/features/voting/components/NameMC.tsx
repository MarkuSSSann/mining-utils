import { Card, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function NameMC() {
  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-2xl pb-2">Name MC</Card.Title>
        <Card.Description>
          NameMC is not a default, simple voting site, so it isn't in daily
          voting pool, it gives payouts weekly and should be accessed directly
          from game to receive rewards, after your registered on NameMC and like
          a server, here is just a link to a SunRealms page on NameMC.
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex gap-4">
        <Link
          className="flex gap-1 items-baseline"
          onClick={() => {
            window.open(
              "https://namemc.com/server/vote.sunrealms.net",
              "_blank",
              "noopener,noreferrer",
            );
          }}>
          {"https://namemc.com/server/vote.sunrealms.net"}

          <Icon icon="ph:arrow-square-out-bold" />
        </Link>
      </Card.Content>
    </Card>
  );
}
