import React, { useContext } from "react";
import townCenter from "assets/tutorials/town_center.png";
import { SUNNYSIDE } from "assets/sunnyside";
import { Button } from "components/ui/Button";
import { Context } from "../GameProvider";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

export const NoTownCenter: React.FC = () => {
  const { gameService } = useContext(Context);
  const { t } = useAppTranslation();
  function onAcknowledge() {
    gameService.send("ACKNOWLEDGE");
  }

  return (
    <>
      <div className="flex flex-col items-center p-2">
        <span className="text-center">{t("noTownCenter.reward")}</span>
        <img src={townCenter} className="w-2/3 mx-auto rounded-lg my-2" />
        <div className="flex mb-1">
          <img src={SUNNYSIDE.icons.heart} className="h-6 mr-2" />
          <p className="text-sm">{t("noTownCenter.news")}</p>
        </div>
        <div className="flex mb-2">
          <img src={SUNNYSIDE.icons.basket} className="h-6 mr-2" />
          <p className="text-sm">{t("noTownCenter.townCenterPlacement")}</p>
        </div>
      </div>
      <Button onClick={onAcknowledge}>{t("gotIt")}</Button>
    </>
  );
};
