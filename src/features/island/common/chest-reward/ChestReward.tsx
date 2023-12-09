import { Panel } from "components/ui/Panel";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";

import { InventoryItemName, Reward } from "features/game/types/game";

import { Button } from "components/ui/Button";
import { ITEM_DETAILS } from "features/game/types/images";
import { Context } from "features/game/GameProvider";

import token from "assets/icons/token_2.png";
import { StopTheGoblins } from "features/island/common/chest-reward/StopTheGoblins";
import { ChestCaptcha } from "features/island/common/chest-reward/ChestCaptcha";
import { Loading } from "features/auth/components";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { translate } from "lib/i18n/translate";

interface Props {
  collectedItem?: InventoryItemName;
  reward?: Reward;
  onCollected: (success: boolean) => void;
  onOpen: () => void;
}

type Challenge = "goblins" | "chest";

export const ChestReward: React.FC<Props> = ({
  collectedItem,
  reward,
  onCollected,
  onOpen,
}) => {
  const { t } = useAppTranslation();
  const { gameService } = useContext(Context);
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const challenge = useRef<Challenge>(
    Math.random() > 0.3 ? "chest" : "goblins"
  );

  useEffect(() => {
    if (reward) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
  }, [reward]);

  if (!reward) {
    return null;
  }

  const open = () => {
    setOpened(true);
    onOpen();
  };

  const fail = () => {
    close(false);
    gameService.send("bot.detected");
    gameService.send("REFRESH");
  };

  const close = (success: boolean) => {
    onCollected(success);
    setOpened(false);
  };

  const { items, sfl } = reward;

  return (
    <Modal centered show={true}>
      <Panel>
        {loading && <Loading />}
        <div
          hidden={loading} // render and hide captchas so images have time to load
          className="flex flex-col items-center justify-between"
        >
          {opened ? (
            <>
              <span className="text-center my-2">
                {translate("reward.woohoo")},
              </span>
              {items &&
                items.map((item) => {
                  const name = `${item.amount} ${item.name}${
                    item.name === "Gold" ? "" : "s"
                  }`;

                  return (
                    <div key={item.name} className="flex items-center my-2">
                      <img
                        className="w-5 img-highlight mr-2"
                        src={ITEM_DETAILS[item.name].image}
                      />
                      <span className="text-center">{name}</span>
                    </div>
                  );
                })}
              {sfl && (
                <div key="sfl" className="flex items-center my-2">
                  <img className="w-5 img-highlight mr-2" src={token} />
                  <span className="text-center">{`${sfl} SFL`}</span>
                </div>
              )}
              <Button onClick={() => close(true)} className="w-full mt-1">
                {t("close")}
              </Button>
            </>
          ) : (
            <>
              {challenge.current === "goblins" && (
                <StopTheGoblins
                  onFail={fail}
                  onOpen={open}
                  collectedItem={collectedItem}
                />
              )}
              {challenge.current === "chest" && (
                <ChestCaptcha onFail={fail} onOpen={open} />
              )}
            </>
          )}
        </div>
      </Panel>
    </Modal>
  );
};
