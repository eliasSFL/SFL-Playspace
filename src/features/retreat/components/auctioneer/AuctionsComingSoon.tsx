import { SUNNYSIDE } from "assets/sunnyside";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import React from "react";
import { translate } from "lib/i18n/translate";

export const AuctionsComingSoon: React.FC = () => {
  const { t } = useAppTranslation();
  return (
    <div className="p-2 flex flex-col items-center">
      <p>{translate("action.const")}</p>
      <img src={SUNNYSIDE.npcs.goblin_hammering} className="w-1/3" />
      <p className="my-2 text-sm">{translate("action.const.soon")}</p>
      <a
        href="https://docs.sunflower-land.com/player-guides/auctions"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs underline"
      >
        {t("read.more")}
      </a>
    </div>
  );
};
