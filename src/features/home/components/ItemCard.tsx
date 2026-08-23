import { Card } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "@tanstack/react-router";
import type { NavItem } from "@types";

type Props = {
  item: NavItem;
};

export default function ItemCard({ item }: Props) {
  const navigate = useNavigate();
  const goToItem = () => navigate({ to: item.path });

  return (
    <Card
      className="group relative cursor-pointer rounded-lg border border-transparent overflow-clip transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      role="link"
      tabIndex={0}
      onClick={goToItem}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate({ to: item.path });
        }
      }}>
      <Card.Header className="text-3xl">
        <div className="flex gap-2 items-center">
          {item.title}
          {item.icon && <Icon icon={item.icon} />}
        </div>
      </Card.Header>
      <Card.Content className="relative p-0">
        {item.image && (
          <div className="relative">
            <img
              src={item.image}
              alt={`${item.title} preview`}
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-background via-background/70 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          </div>
        )}
      </Card.Content>
    </Card>
  );
}
