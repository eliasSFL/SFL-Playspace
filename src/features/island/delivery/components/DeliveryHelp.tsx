import React from "react";

import { ITEM_DETAILS } from "features/game/types/images";
import chest from "assets/icons/chest.png";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { translate } from "lib/i18n/translate";

export const DeliveryHelp: React.FC = () => {
  const { t } = useAppTranslation();
  return (
    <div className="flex flex-col space-y-2 pt-3">
      <div className="flex">
        <div className="w-12 flex justify-center">
          <img src={ITEM_DETAILS["Pumpkin Soup"].image} className="h-7" />
        </div>
        <p className="text-sm flex-1 justify-center">
          {translate("deliveryHelp.pumpkinSoup")}
        </p>
      </div>
      <div className="flex">
        <div className="w-12 flex justify-center">
          <img src={ITEM_DETAILS["Hammer"].image} className="h-7" />
        </div>
        <p className="text-sm flex-1">{translate("deliveryHelp.hammer")}</p>
      </div>
      <div className="flex">
        <div className="w-12 flex justify-center">
          <img src={ITEM_DETAILS["Axe"].image} className="h-7" />
        </div>
        <p className="text-sm flex-1">{translate("deliveryHelp.axe")}</p>
      </div>
      <div className="flex">
        <div className="w-12 flex justify-center">
          <img src={chest} className="h-7" />
        </div>
        <p className="text-sm flex-1">
          {translate("deliveryHelp.chest")}
          <span className="italic text-xs ml-1">(Coming soon)</span>
        </p>
      </div>

      <a
        href="https://docs.sunflower-land.com/player-guides/deliveries"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-xxs ml-[10px] pb-1 pt-0.5 hover:text-blue-500"
      >
        {t("read.more")}
      </a>
    </div>
  );
};
