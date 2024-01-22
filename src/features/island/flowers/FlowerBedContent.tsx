import React, { useContext, useState } from "react";

import { ITEM_DETAILS } from "features/game/types/images";
import { Label } from "components/ui/Label";
import { Box } from "components/ui/Box";
import { Button } from "components/ui/Button";
import { SUNNYSIDE } from "assets/sunnyside";
import flowerBed from "assets/flowers/flower_bed_modal.png";
import { PIXEL_SCALE } from "features/game/lib/constants";
import classNames from "classnames";
import {
  FLOWER_CROSS_BREED_AMOUNTS,
  FLOWER_SEEDS,
  FlowerCrossBreedName,
  FlowerSeedName,
} from "features/game/types/flowers";
import { getKeys } from "features/game/types/craftables";
import { Context } from "features/game/GameProvider";
import { useActor } from "@xstate/react";
import { translate } from "lib/i18n/translate";

interface Props {
  id: string;
  onClose: () => void;
}

export const FlowerBedContent: React.FC<Props> = ({ id, onClose }) => {
  const { gameService } = useContext(Context);
  const [
    {
      context: {
        state: { inventory },
      },
    },
  ] = useActor(gameService);

  const [selecting, setSelecting] = useState<"seed" | "crossbreed" | null>(
    "seed"
  );

  const [seed, setSeed] = useState<FlowerSeedName>();
  const [crossbreed, setCrossBreed] = useState<FlowerCrossBreedName>();

  const selectSeed = (name: FlowerSeedName) => {
    setSeed(name);
    if (!crossbreed) setSelecting("crossbreed");
  };

  const selectCrossBreed = (name: FlowerCrossBreedName) => {
    setCrossBreed(name);
    if (!seed) setSelecting("seed");
  };

  const plant = () => {
    gameService.send({
      type: "flower.planted",
      id,
      seed: seed as FlowerSeedName,
      crossbreed: crossbreed as FlowerCrossBreedName,
    });
    onClose();
  };

  return (
    <>
      <div className="p-2">
        {crossbreed && (
          <div className="flex items-center justify-center">
            <img src={ITEM_DETAILS["Warty Goblin Pumpkin"].image} />
            <span className="text-xs">Red Tulip</span>
          </div>
        )}
        {!crossbreed && <p className="text-xs text-center">?</p>}
        <div
          className="relative mx-auto w-full mt-2"
          style={{
            width: `${PIXEL_SCALE * 80}px`,
          }}
        >
          <img src={flowerBed} className="w-full" />

          <div
            className={classNames(
              "absolute z-40 cursor-pointer bg-green-800 border-t-4 border-green-900 rounded-md",
              {}
            )}
            onClick={() => setSelecting("seed")}
            style={{
              height: `${PIXEL_SCALE * 16}px`,
              width: `${PIXEL_SCALE * 16}px`,
              top: `${PIXEL_SCALE * 6}px`,
              left: `${PIXEL_SCALE * 12}px`,
            }}
          >
            {selecting === "seed" && (
              <img
                src={SUNNYSIDE.ui.select_box}
                className="w-full absolute inset-0 -top-1"
              />
            )}
            {seed && (
              <img
                src={ITEM_DETAILS[seed].image}
                className="w-full absolute inset-0 -top-1"
              />
            )}
          </div>

          <div
            className={classNames(
              "absolute  z-40 cursor-pointer bg-green-800 border-t-4 border-green-900 rounded-md",
              {}
            )}
            onClick={() => setSelecting("crossbreed")}
            style={{
              height: `${PIXEL_SCALE * 16}px`,
              width: `${PIXEL_SCALE * 16}px`,
              top: `${PIXEL_SCALE * 6}px`,
              right: `${PIXEL_SCALE * 12}px`,
            }}
          >
            {selecting === "crossbreed" && (
              <img
                src={SUNNYSIDE.ui.select_box}
                className="w-full  absolute inset-0 -top-1"
              />
            )}
            {crossbreed && (
              <img
                src={ITEM_DETAILS[crossbreed].image}
                className="h-full absolute inset-0 -top-1 mx-auto"
              />
            )}
          </div>
        </div>

        <div className="grid">
          <div
            className={classNames("row-start-1 col-start-1", {
              invisible: !(selecting === "seed"),
            })}
          >
            <Label type="default">
              {translate("flowerBedContent.pickSeed")}
            </Label>
            <div className="flex flex-wrap">
              {getKeys(FLOWER_SEEDS()).map((name) => (
                <Box
                  image={ITEM_DETAILS[name].image}
                  count={inventory[name]}
                  onClick={() => selectSeed(name)}
                  key={name}
                  isSelected={seed === name}
                />
              ))}
            </div>
          </div>

          <div
            className={classNames("row-start-1 col-start-1", {
              invisible: !(selecting === "crossbreed"),
            })}
          >
            <Label type="default">
              {translate("flowerBedContent.crossbreedWith")}
            </Label>
            <div className="flex flex-wrap">
              {getKeys(FLOWER_CROSS_BREED_AMOUNTS)
                // .filter((name) => !!inventory[name]?.gte(1))
                .map((name) => (
                  <Box
                    image={ITEM_DETAILS[name].image}
                    count={inventory[name]}
                    onClick={() => selectCrossBreed(name)}
                    key={name}
                    isSelected={crossbreed === name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <Button disabled={!seed || !crossbreed} onClick={() => plant()}>
        Plant
      </Button>
    </>
  );
};
