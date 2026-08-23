import { VOTING_LINKS } from "@data/config";
import { Button, toast } from "@heroui/react";

export default function OpenAll() {
  const handleOpenAll = () => {
    let blockedCount = 0;

    VOTING_LINKS.forEach(({ link }) => {
      const win = window.open(link, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        blockedCount++;
      }
    });

    if (blockedCount > 0) {
      toast.warning("Batch open blocked by browser", {
        actionProps: {
          className: "bg-warning text-warning-foreground",
        },
        description: "Allow pop-ups for this site for batch opening",
        timeout: 0,
      });
    }
  };
  return (
    <>
      <Button fullWidth onClick={handleOpenAll}>
        Open all
      </Button>
    </>
  );
}
