import { VOTING_LINKS } from "@data/config";
import { Button, toast } from "@heroui/react";
import { useSetAtom } from "jotai";
import { markLinksOpenedAtom } from "../context/lastOpened";

export default function OpenAll() {
  const markLinksOpened = useSetAtom(markLinksOpenedAtom);

  const handleOpenAll = () => {
    let blockedCount = 0;
    const openedLinks: string[] = [];

    VOTING_LINKS.forEach(({ link }) => {
      const win = window.open(link, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        blockedCount++;
      } else {
        win.opener = null;
        openedLinks.push(link);
      }
      if (win?.opener) win.opener = null;
    });
    markLinksOpened({ links: openedLinks });

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
    <Button fullWidth onClick={handleOpenAll}>
      Open all
    </Button>
  );
}
