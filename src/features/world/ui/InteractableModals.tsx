import { useActor } from "@xstate/react";
import { Context } from "features/game/GameProvider";
import { AuctioneerModal } from "features/retreat/components/auctioneer/AuctioneerModal";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PotionHouse } from "features/game/expansion/components/potions/PotionHouse";
import fanArt from "assets/fanArt/dawn_breaker.png";
import fanArt2 from "assets/fanArt/vergels.png";
import { Modal } from "react-bootstrap";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { Button } from "components/ui/Button";
import { SpeakingModal } from "features/game/components/SpeakingModal";
import { NPC_WEARABLES } from "lib/npcs";
import { ModalContext } from "features/game/components/modal/ModalProvider";
import { KrakenIntro } from "./npcs/Shelly";
import { PromotingModal } from "features/game/expansion/components/SpecialOffer";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

type InteractableName =
  | "kraken"
  | "welcome_sign"
  | "bud"
  | "plaza_statue"
  | "fan_art"
  | "auction_item"
  | "boat_modal"
  | "homeless_man"
  | "potion_table"
  | "fan_art"
  | "fan_art_1"
  | "fan_art_2"
  | "dawn_book_1"
  | "dawn_book_2"
  | "dawn_book_3"
  | "dawn_book_4"
  | "betty_home"
  | "igor_home"
  | "windmill"
  | "guild_house"
  | "timmy_home"
  | "bert_home"
  | "fat_chicken"
  | "woodlands"
  | "castle"
  | "port"
  | "beach"
  | "lazy_bud"
  | "plaza_blue_book"
  | "plaza_orange_book"
  | "plaza_green_book"
  | "potion_house"
  | "clubhouse_reward"
  | "beach_green_book"
  | "beach_orange_book"
  | "beach_blue_book"
  | "walrus"
  | "kraken_banner";

class InteractableModalManager {
  private listener?: (name: InteractableName, isOpen: boolean) => void;

  public open(name: InteractableName) {
    if (this.listener) {
      this.listener(name, true);
    }
  }

  public listen(cb: (name: InteractableName, isOpen: boolean) => void) {
    this.listener = cb;
  }
}

export const interactableModalManager = new InteractableModalManager();

interface Props {
  id: number;
}
export const InteractableModals: React.FC<Props> = ({ id }) => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);
  const {
    context: { state, farmId },
  } = gameState;

  const [interactable, setInteractable] = useState<InteractableName>();
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    interactableModalManager.listen((interactable, open) => {
      setInteractable(interactable);
    });
  }, []);

  const closeModal = () => {
    setInteractable(undefined);
  };

  const navigate = useNavigate();

  const { t } = useAppTranslation();

  return (
    <>
      {/* TODO - make smoother opening */}
      {interactable === "auction_item" && (
        <AuctioneerModal
          farmId={farmId}
          isOpen={interactable === "auction_item"}
          onClose={closeModal}
          gameState={state}
          onUpdate={(state) => {
            gameService.send("UPDATE", { state });
          }}
          onMint={(id) => {
            setInteractable(undefined);
            gameService.send("MINT", { auctionId: id });
          }}
          deviceTrackerId={gameState.context.deviceTrackerId as string}
        />
      )}

      {interactable === "potion_table" && <PotionHouse onClose={closeModal} />}

      <Modal
        centered
        show={interactable === "boat_modal"}
        onHide={closeModal}
        onShow={() => gameService.send("SAVE")}
      >
        <CloseButtonPanel onClose={closeModal}>
          <div className="p-2">
            <p className="mb-3">Would you like to return home?</p>
          </div>
          <Button
            onClick={() => navigate(`/land/${id}`)}
            disabled={gameState.matches("autosaving")}
          >
            {gameState.matches("autosaving") ? t("saving") : "Go home"}
          </Button>
        </CloseButtonPanel>
      </Modal>

      <Modal centered show={interactable === "fat_chicken"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          message={[
            {
              text: t("interactableModals.fatChicken.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "kraken"} onHide={closeModal}>
        <KrakenIntro onClose={closeModal} />
      </Modal>
      <Modal centered show={interactable === "lazy_bud"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          message={[
            {
              text: t("interactableModals.lazyBud.message"),
            },
          ]}
        />
      </Modal>

      <PromotingModal
        isOpen={interactable === "kraken_banner"}
        hasDiscount={!!gameState.context.state.inventory["Witches' Eve Banner"]}
        hasPurchased={
          !!gameState.context.state.inventory["Catch the Kraken Banner"]
        }
        onClose={closeModal}
      />
      <Modal centered show={interactable === "bud"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          message={[
            {
              text: t("interactableModals.bud.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "walrus"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          message={[
            {
              text: t("interactableModals.walrus.message"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "plaza_blue_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.raven}
          message={[
            {
              text: t("interactableModals.plazaBlueBook.message1"),
            },
            {
              text: t("interactableModals.plazaBlueBook.message2"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "plaza_orange_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.cornwell}
          message={[
            {
              text: t("interactableModals.plazaOrangeBook.message1"),
            },
            {
              text: "interactableModals.plazaOrangeBook.message2",
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "beach_green_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.finley}
          message={[
            {
              text: t("interactableModals.beachGreenBook.message1"),
            },
            {
              text: t("interactableModals.beachGreenBook.message2"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "beach_blue_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.finn}
          message={[
            {
              text: t("interactableModals.beachBlueBook.message1"),
            },
            {
              text: t("interactableModals.beachBlueBook.message2"),
            },
            {
              text: t("interactableModals.beachBlueBook.message3"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "beach_orange_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.finley}
          message={[
            {
              text: t("interactableModals.beachOrangeBook.message1"),
            },
            {
              text: t("interactableModals.beachOrangeBook.message2"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "plaza_green_book"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES.grimbly}
          message={[
            {
              text: t("interactableModals.plazaGreenBook.message1"),
            },
            {
              text: t("interactableModals.plazaGreenBook.message2"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "fan_art_1"} onHide={closeModal}>
        <CloseButtonPanel onClose={closeModal} title="Congratulations">
          <div className="p-2">
            <p className="text-sm mb-2 text-center">
              {t("interactableModals.fanArt1.message")}
            </p>
            <img src={fanArt} className="w-2/3 mx-auto rounded-lg" />
          </div>
        </CloseButtonPanel>
      </Modal>

      <Modal centered show={interactable === "fan_art"} onHide={closeModal}>
        <CloseButtonPanel onClose={closeModal} title="Congratulations">
          <div className="p-2 flex flex-col items-center">
            <p className="text-sm mb-2 text-center">
              {t("interactableModals.fanArt2.message")}
            </p>
            <img src={fanArt2} className="w-4/5 mx-auto rounded-lg mb-1" />
            <a
              href=" https://github.com/sunflower-land/sunflower-land/discussions/2638"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white text-xs mb-2 text-center"
            >
              {t("interactableModals.fanArt2.linkLabel")}
            </a>
          </div>
        </CloseButtonPanel>
      </Modal>

      <Modal centered show={interactable === "fan_art_2"} onHide={closeModal}>
        <CloseButtonPanel onClose={closeModal}>
          <p className="text-sm">{t("interactableModals.fanArt3.message")}</p>
        </CloseButtonPanel>
      </Modal>

      <Modal
        centered
        show={interactable === "clubhouse_reward"}
        onHide={closeModal}
      >
        <CloseButtonPanel onClose={closeModal}>
          <div className="p-2">
            <p className="text-sm mb-2">
              {t("interactableModals.clubhouseReward.message1")}
            </p>
            <p className="text-sm">
              {t("interactableModals.clubhouseReward.message2")}
            </p>
          </div>
        </CloseButtonPanel>
      </Modal>

      <Modal
        centered
        show={interactable === "plaza_statue"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          message={[
            {
              text: t("interactableModals.plazaStatue.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "dawn_book_1"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["marcus"]}
          message={[
            {
              text: t("interactableModals.dawnBook1.message1"),
            },
            {
              text: t("interactableModals.dawnBook1.message2"),
            },
            {
              text: t("interactableModals.dawnBook1.message3"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "dawn_book_2"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["bella"]}
          message={[
            {
              text: t("interactableModals.dawnBook2.message1"),
            },
            {
              text: t("interactableModals.dawnBook2.message2"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "dawn_book_3"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["sofia"]}
          message={[
            {
              text: t("interactableModals.dawnBook3.message1"),
            },
            {
              text: t("interactableModals.dawnBook3.message2"),
            },
            {
              text: t("interactableModals.dawnBook3.message3"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "dawn_book_4"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["marcus"]}
          message={[
            {
              text: t("interactableModals.dawnBook4.message1"),
            },
            {
              text: t("interactableModals.dawnBook4.message2"),
            },
            {
              text: t("interactableModals.dawnBook4.message3"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "timmy_home"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["timmy"]}
          message={[
            {
              text: t("interactableModals.timmyHome.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "windmill"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["cornwell"]}
          message={[
            {
              text: t("interactableModals.windmill.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "igor_home"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["igor"]}
          message={[
            {
              text: t("interactableModals.igorHome.message"),
            },
          ]}
        />
      </Modal>

      <Modal
        centered
        show={interactable === "potion_house"}
        onHide={closeModal}
      >
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["pumpkin' pete"]}
          message={[
            {
              text: t("interactableModals.potionHouse.message1"),
            },
            {
              text: t("interactableModals.potionHouse.message2"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "guild_house"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["pumpkin' pete"]}
          message={[
            {
              text: t("interactableModals.guildHouse.message"),
              actions: [
                {
                  text: t("interactableModals.guildHouse.readMore"),
                  cb: () => {
                    window.open(
                      "https://docs.sunflower-land.com/player-guides/bud-nfts",
                      "_blank"
                    );
                  },
                },
                {
                  text: t("interactableModals.guildHouse.budsCollection"),
                  cb: () => {
                    window.open(
                      "https://opensea.io/collection/sunflower-land-buds",
                      "_blank"
                    );
                  },
                },
              ],
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "betty_home"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["betty"]}
          message={[
            {
              text: t("interactableModals.bettyHome.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "bert_home"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["bert"]}
          message={[
            {
              text: t("interactableModals.bertHome.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "beach"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["old salty"]}
          message={[
            {
              text: t("interactableModals.beach.message1"),
            },
            {
              text: t("interactableModals.beach.message2"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "castle"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["tywin"]}
          message={[
            {
              text: t("interactableModals.castle.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "woodlands"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["bert"]}
          message={[
            {
              text: t("interactableModals.woodlands.message"),
            },
          ]}
        />
      </Modal>

      <Modal centered show={interactable === "port"} onHide={closeModal}>
        <SpeakingModal
          onClose={closeModal}
          bumpkinParts={NPC_WEARABLES["grubnuk"]}
          message={[
            {
              text: t("interactableModals.port.message"),
            },
          ]}
        />
      </Modal>
    </>
  );

  {
    /* 

      {/* <Modal
        centered
        show={!!interactable}
        onHide={closeModal}
      >
        <CloseButtonPanel onClose={closeModal}>
          {interactable === "fan_art" && (
            <div className="p-2">
              <p className="mb-2">Have you submitted your fan art?</p>
              <p className="mb-2">1000 SFL in prizes to be won!</p>
              <a
                href="https://github.com/sunflower-land/sunflower-land/discussions/2553"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          )}
        </CloseButtonPanel>
      </Modal> */
  }
};
