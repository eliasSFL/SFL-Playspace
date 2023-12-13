import React from "react";
import { Button } from "components/ui/Button";
import { Panel } from "components/ui/Panel";
import { Modal } from "react-bootstrap";

import { ModerationEvent } from "features/world/Phaser";
import { translate } from "lib/i18n/translate";

export const calculateMuteTime = (
  time: number,
  type: "until" | "remaining"
) => {
  if (!time) return "Unknown";
  switch (type) {
    case "until": {
      return new Date(time).toLocaleString();
    }
    case "remaining": {
      const now = new Date().getTime();
      const remaining = time - now;

      if (remaining <= 0) return "0s";

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      let result = "";

      if (days > 0) {
        result += `${days}d `;
      }
      if (hours > 0 || days > 0) {
        result += `${hours}h `;
      }
      if (minutes > 0 || hours > 0 || days > 0) {
        result += `${minutes}m `;
      }
      result += `${seconds}s`;

      return result;
    }
    default: {
      return "Unknown";
    }
  }
};

export const Muted: React.FC<{
  event?: ModerationEvent;
  onClose: () => void;
}> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <Modal show={true} centered backdrop="static" keyboard={false}>
      <Panel>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center text-center">
            <h1 className="text-lg font-bold">{translate("mute.you")}</h1>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm">{translate("mute.Reason")}</p>
            <p className="text-sm">{event.reason}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm">{translate("mute.until")}</p>
            <p className="text-sm">
              {event.mutedUntil
                ? calculateMuteTime(event.mutedUntil, "until")
                : "Unknown"}
            </p>
          </div>
          <div className="flex justify-center text-center">
            <p className="text-xxs">{translate("mute.discord")}</p>
          </div>
          <div className="flex justify-center">
            <Button className="mt-1" onClick={onClose}>
              {translate("mute.accept")}
            </Button>
          </div>
        </div>
      </Panel>
    </Modal>
  );
};
