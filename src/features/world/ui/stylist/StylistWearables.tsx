import React, { useContext, useState } from "react";
import { useActor } from "@xstate/react";

import { Box } from "components/ui/Box";

import { Context } from "features/game/GameProvider";
import { getKeys } from "features/game/types/craftables";

import { Button } from "components/ui/Button";
import { SplitScreenView } from "components/ui/SplitScreenView";
import { BumpkinItem, ITEM_IDS } from "features/game/types/bumpkin";
import {
  STYLIST_WEARABLES,
  ShopWearables,
  StylistWearable,
} from "features/game/types/stylist";
import { getImageUrl } from "features/goblins/tailor/TabContent";
import Decimal from "decimal.js-light";
import { SUNNYSIDE } from "assets/sunnyside";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { ITEM_DETAILS } from "features/game/types/images";
import { CraftingRequirements } from "components/ui/layouts/CraftingRequirements";
import { GameState } from "features/game/types/game";
import { gameAnalytics } from "lib/gameAnalytics";
import { getSeasonalTicket } from "features/game/types/seasons";
import { Modal } from "react-bootstrap";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

function isNotReady(name: BumpkinItem, state: GameState) {
  const wearable = STYLIST_WEARABLES(state)[name] as StylistWearable;

  if (wearable.hoursPlayed) {
    const hoursPlayed = (Date.now() - state.createdAt) / 1000 / 60 / 60;

    if (hoursPlayed < wearable.hoursPlayed) {
      return true;
    }
  }

  return (
    wearable.from &&
    wearable.to &&
    (wearable.from.getTime() > Date.now() || wearable.to.getTime() < Date.now())
  );
}
interface Props {
  wearables: ShopWearables;
}
export const StylistWearables: React.FC<Props> = ({ wearables }) => {
  const { t } = useAppTranslation();
  const [selected, setSelected] = useState<BumpkinItem>(getKeys(wearables)[0]);
  const { gameService } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);
  const inventory = state.inventory;

  const wearable = STYLIST_WEARABLES(state)[selected] as StylistWearable;

  const price = wearable.sfl;

  const lessFunds = () => {
    if (!price) return false;

    return state.balance.lessThan(price.toString());
  };

  const lessIngredients = () =>
    getKeys(wearable.ingredients).some((name) =>
      (inventory[name] || new Decimal(0))?.lt(wearable.ingredients[name] ?? 0)
    );

  const buy = () => {
    gameService.send("wearable.bought", {
      name: selected,
    });

    if (wearable.ingredients["Block Buck"]) {
      gameAnalytics.trackSink({
        currency: "Block Buck",
        amount: wearable.ingredients["Block Buck"].toNumber() ?? 1,
        item: selected,
        type: "Wearable",
      });
    }

    if (wearable.ingredients[getSeasonalTicket()]) {
      gameAnalytics.trackSink({
        currency: "Seasonal Ticket",
        amount: wearable.ingredients[getSeasonalTicket()]?.toNumber() ?? 1,
        item: selected,
        type: "Wearable",
      });
    }

    if (wearable.sfl) {
      gameAnalytics.trackSink({
        currency: "SFL",
        amount: wearable.sfl.toNumber(),
        item: selected,
        type: "Wearable",
      });
    }
  };

  const [isConfirmBuyModalOpen, showConfirmBuyModal] = useState(false);
  const openConfirmationModal = () => {
    showConfirmBuyModal(true);
  };
  const closeConfirmationModal = () => {
    showConfirmBuyModal(false);
  };

  const Action = () => {
    if (state.wardrobe[selected])
      return (
        <div className="flex justify-center items-center">
          <span className="text-xs">Already bought!</span>
          <img src={SUNNYSIDE.icons.confirm} className="h-4 ml-1" />
        </div>
      );

    if (wearable.requiresItem && !state.inventory[wearable.requiresItem]) {
      return (
        <div className="flex items-center justify-center">
          <img
            src={ITEM_DETAILS[wearable.requiresItem].image}
            className="h-6 mr-1 img-highlight"
          />
          <span className="text-center text-xs">{`Requires ${wearable.requiresItem}`}</span>
        </div>
      );
    }

    return (
      <>
        <Button
          disabled={
            isNotReady(selected, state) || lessFunds() || lessIngredients()
          }
          onClick={openConfirmationModal}
        >
          {t("buy")}
        </Button>
        <Modal
          centered
          show={isConfirmBuyModalOpen}
          onHide={closeConfirmationModal}
        >
          <CloseButtonPanel className="sm:w-4/5 m-auto">
            <div className="flex flex-col p-2">
              <span className="text-sm text-center">
                Are you sure you want to buy {`${selected}`}?
              </span>
            </div>
            <div className="flex justify-content-around mt-2 space-x-1">
              <Button
                disabled={
                  isNotReady(selected, state) ||
                  lessFunds() ||
                  lessIngredients()
                }
                onClick={buy}
              >
                {t("buy")}
              </Button>
              <Button onClick={closeConfirmationModal}>{t("cancel")}</Button>
            </div>
          </CloseButtonPanel>
        </Modal>
      </>
    );
  };

  return (
    <SplitScreenView
      panel={
        <CraftingRequirements
          gameState={state}
          details={{
            wearable: selected,
            from: wearable.from,
            to: wearable.to,
          }}
          // boost={selectedItem.boost}
          requirements={{
            resources: wearable.ingredients,
            sfl: wearable.sfl,
          }}
          actionView={Action()}
        />
      }
      content={
        <>
          <div className="flex flex-wrap">
            {getKeys(wearables).map((item) => {
              const timeLimited = isNotReady(item, state);

              return (
                <Box
                  isSelected={selected === item}
                  key={item}
                  onClick={() => setSelected(item)}
                  image={getImageUrl(ITEM_IDS[item])}
                  count={new Decimal(state.wardrobe[item] ?? 0)}
                  showOverlay={timeLimited}
                  overlayIcon={
                    <img
                      src={SUNNYSIDE.icons.stopwatch}
                      id="confirm"
                      alt="confirm"
                      className="object-contain absolute"
                      style={{
                        width: `${PIXEL_SCALE * 8}px`,
                        top: `${PIXEL_SCALE * -4}px`,
                        right: `${PIXEL_SCALE * -4}px`,
                      }}
                    />
                  }
                />
              );
            })}
          </div>
          <a
            href="https://opensea.io/collection/bumpkin-wearables"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white text-xs"
          >
            {t("statements.soldOutWearables")}
          </a>
        </>
      }
    />
  );
};
