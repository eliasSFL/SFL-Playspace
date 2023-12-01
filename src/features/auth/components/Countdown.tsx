import React, { useContext, useEffect, useState } from "react";
import minting from "assets/npcs/minting.gif";
import { secondsToString } from "lib/utils/time";
import * as AuthProvider from "features/auth/lib/Provider";
import { translate } from "lib/i18n/translate";

/**
 * HACK: Small component that pauses the user before proceeding
 * It lessens the load during high critical usage times
 */
export const Countdown: React.FC = () => {
  const [time, setTime] = useState("30secs");
  const { authService } = useContext(AuthProvider.Context);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const timeLeft = 30 - (Date.now() - start) / 1000;
      setTime(secondsToString(timeLeft, { length: "full" }));

      if (timeLeft <= 0) {
        authService.send("REFRESH");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col text-center items-center p-2">
      <span>{translate("transaction.mintFarm.one")}</span>
      <img src={minting} className="w-1/2 mt-2" />
      <span className="text-xs mb-1">
        {translate("transaction.mintFarm.two")}
      </span>
      <span className="text-3xl">{time}</span>
      <span className="text-xs mt-4 underline mb-1">
        {translate("transaction.doNotRefresh")}
      </span>
    </div>
  );
};
