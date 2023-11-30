import React from "react";

import deathAnimation from "assets/npcs/human_death.gif";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { translate } from "lib/i18n/translate";

export const Congestion: React.FC = () => {
  const { t } = useAppTranslation();
  return (
    <div id="gameerror" className="flex flex-col items-center p-2">
      <span className="text-shadow text-center">{`Can't connect to Polygon`}</span>
      <img src={deathAnimation} className="w-1/2 -mt-4 ml-8" />
      <span className="text-shadow text-xs text-center">
        {translate("error.congestion.one")}
      </span>
      <span className="text-shadow text-xs text-center">
        {translate("error.congestion.two")}
      </span>
    </div>
  );
};
