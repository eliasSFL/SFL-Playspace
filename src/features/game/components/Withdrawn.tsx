import { Button } from "components/ui/Button";
import React, { useContext } from "react";

import secure from "assets/npcs/synced.gif";
import { Context } from "../GoblinProvider";
import { wallet } from "lib/blockchain/wallet";
import { shortAddress } from "lib/utils/shortAddress";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

export const Withdrawn: React.FC = () => {
  const { goblinService } = useContext(Context);
  const { t } = useAppTranslation();

  const handleAddToken = async () => {
    await wallet.addTokenToMetamask();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-2 flex flex-col items-center">
        <h1 className="text-center mb-4 mt-1 text-lg">{t("success")}</h1>
        <img src={secure} className="w-14 mb-4" />
        <p className="mb-4">
          {t("transaction.withdraw.two")}
          <span className="text-center mb-2 ml-2 text-sm">
            {shortAddress(wallet.myAccount as string)}
          </span>
        </p>

        <span className="mb-4">
          {t("transaction.withdraw.three")}{" "}
          <a
            className="underline hover:text-white"
            href="https://opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=LAST_TRANSFER_DATE&search[query]=sunflower%20land"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("transaction.openSea")}
          </a>
        </span>

        <span className="mb-7">{t("transaction.withdraw.four")}</span>
        <Button className="mb-7 sm:w-3/4 text-xs" onClick={handleAddToken}>
          {t("transaction.withdraw.five")}
        </Button>
        <span className="mb-4">
          {t("transaction.withdraw.six")}{" "}
          <a
            className="underline hover:text-white"
            href={`https://polygonscan.com/address/${wallet.myAccount}#tokentxnsErc1155`}
            target="_blank"
            rel="noopener noreferrer"
          >
            PolygonScan
          </a>
          .
        </span>
      </div>
      <Button onClick={() => goblinService.send("REFRESH")}>Ok</Button>
    </div>
  );
};
