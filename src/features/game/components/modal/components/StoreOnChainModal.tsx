import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import React, { useContext } from "react";

import { Context } from "features/game/GameProvider";
import { Button } from "components/ui/Button";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

interface Props {
  onClose: () => void;
}
export const StoreOnChainModal: React.FC<Props> = ({ onClose }) => {
  const { gameService } = useContext(Context);
  const { t } = useAppTranslation();
  const storeData = () => {
    gameService.send("SYNC", {
      captcha: "",
      blockBucks: 0,
    });

    onClose();
  };

  return (
    <CloseButtonPanel
      onClose={onClose}
      title="Store Progress"
      bumpkinParts={{
        body: "Goblin Potion",
        pants: "Farmer Overalls",
        tool: "Hammer",
        hair: "Sun Spots",
      }}
    >
      <div className="p-2">
        <p className="text-sm mb-2">
          {t("transaction.storeProgress.blockchain.one")}
        </p>
        <p className="text-xxs italic mb-2">
          {t("transaction.storeProgress.blockchain.one")}
        </p>
      </div>
      <Button onClick={storeData}>{t("transaction.storeProgress")}</Button>
    </CloseButtonPanel>
  );
};
