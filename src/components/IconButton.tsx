import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import type { IconButtonProps } from "@types";

export default function IconButton({
  onToggle,
  icon,
  iconSize = 16,
  size = "lg",
  ...btnProps
}: IconButtonProps) {
  const handlePress = () => {
    onToggle?.();
  };
  return (
    <Button onPress={handlePress} isIconOnly size={size} {...btnProps}>
      <Icon icon={icon} width={iconSize} height={iconSize} />
    </Button>
  );
}
