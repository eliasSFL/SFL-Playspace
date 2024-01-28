import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "@xstate/react";

import Spritesheet, {
  SpriteSheetInstance,
} from "components/animation/SpriteAnimator";

import strikeSheet from "assets/resources/crimstone/crimstone_rock_spark.png";

import { PIXEL_SCALE } from "features/game/lib/constants";

import { Bar } from "components/ui/ProgressBar";
import { InnerPanel } from "components/ui/Panel";
import classNames from "classnames";
import { loadAudio, miningAudio } from "lib/utils/sfx";
import crimstone_1 from "assets/resources/crimstone/crimstone_rock_1.webp";
import crimstone_2 from "assets/resources/crimstone/crimstone_rock_2.webp";
import crimstone_3 from "assets/resources/crimstone/crimstone_rock_3.webp";
import crimstone_4 from "assets/resources/crimstone/crimstone_rock_4.webp";
import crimstone_5 from "assets/resources/crimstone/crimstone_rock_5.webp";
import { ZoomContext } from "components/ZoomProvider";

import { MachineState } from "features/game/lib/gameMachine";
import { Context } from "features/game/GameProvider";
import { getBumpkinLevel } from "features/game/lib/level";
import { getCrimstoneStage } from "../Crimstone";

const tool = "Gold Pickaxe";

const STRIKE_SHEET_FRAME_WIDTH = 48;
const STRIKE_SHEET_FRAME_HEIGHT = 48;

const _bumpkinLevel = (state: MachineState) =>
  getBumpkinLevel(state.context.state.bumpkin?.experience ?? 0);

interface Props {
  bumpkinLevelRequired: number;
  hasTool: boolean;
  touchCount: number;
  minesLeft: number;
  minedAt: number;
}

const RecoveredCrimstoneComponent: React.FC<Props> = ({
  bumpkinLevelRequired,
  hasTool,
  touchCount,
  minesLeft,
  minedAt,
}) => {
  const { scale } = useContext(ZoomContext);
  const [showSpritesheet, setShowSpritesheet] = useState(false);
  const [showEquipTool, setShowEquipTool] = useState(false);
  const [showBumpkinLevel, setShowBumpkinLevel] = useState(false);

  const strikeGif = useRef<SpriteSheetInstance>();

  useEffect(() => {
    loadAudio([miningAudio]);

    // prevent performing react state update on an unmounted component
    return () => {
      strikeGif.current = undefined;
    };
  }, []);

  const { gameService } = useContext(Context);
  const bumpkinLevel = useSelector(gameService, _bumpkinLevel);
  const bumpkinTooLow = bumpkinLevel < bumpkinLevelRequired;

  const crimstoneImage = [
    crimstone_1,
    crimstone_2,
    crimstone_3,
    crimstone_4,
    crimstone_5,
  ][getCrimstoneStage(minesLeft, minedAt) - 1];

  useEffect(() => {
    if (bumpkinTooLow) return;
    if (touchCount > 0) {
      setShowSpritesheet(true);
      miningAudio.play();
      strikeGif.current?.goToAndPlay(0);
    }
  }, [touchCount]);

  const handleHover = () => {
    if (bumpkinTooLow) {
      setShowBumpkinLevel(true);
      return;
    }
    if (!hasTool) {
      setShowEquipTool(true);
    }
  };

  const handleMouseLeave = () => {
    setShowBumpkinLevel(false);
    setShowEquipTool(false);
  };

  return (
    <div
      className="absolute w-full h-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {/* Uncollected resource node which is collectable */}
      <div
        className={classNames("absolute w-full h-full", {
          "cursor-pointer hover:img-highlight": !showEquipTool,
          "cursor-not-allowed": showEquipTool,
        })}
      >
        {/* static resource node image */}
        {!showSpritesheet && (
          <img
            src={crimstoneImage}
            className={
              bumpkinTooLow
                ? "absolute pointer-events-none opacity-50"
                : "absolute pointer-events-none"
            }
            style={{
              width: `${PIXEL_SCALE * 24}px`,
              bottom: `${PIXEL_SCALE * 1}px`,
              right: `${PIXEL_SCALE * 4}px`,
            }}
          />
        )}

        {/* spritesheet */}
        {showSpritesheet && (
          <>
            <img
              src={crimstoneImage}
              className={
                bumpkinTooLow
                  ? "absolute pointer-events-none opacity-50"
                  : "absolute pointer-events-none"
              }
              style={{
                width: `${PIXEL_SCALE * 24}px`,
                bottom: `${PIXEL_SCALE * 1}px`,
                right: `${PIXEL_SCALE * 4}px`,
              }}
            />
            <Spritesheet
              className="pointer-events-none"
              style={{
                position: "absolute",
                width: `${STRIKE_SHEET_FRAME_WIDTH * PIXEL_SCALE}px`,
                height: `${STRIKE_SHEET_FRAME_HEIGHT * PIXEL_SCALE}px`,
                imageRendering: "pixelated",

                // Adjust the base of resource node to be perfectly aligned to
                // on a grid point.
                bottom: `${PIXEL_SCALE * 0}px`,
                left: `${PIXEL_SCALE * -4}px`,
              }}
              getInstance={(spritesheet) => {
                strikeGif.current = spritesheet;
                spritesheet.goToAndPlay(0);
              }}
              image={strikeSheet}
              widthFrame={STRIKE_SHEET_FRAME_WIDTH}
              heightFrame={STRIKE_SHEET_FRAME_HEIGHT}
              zoomScale={scale}
              fps={24}
              steps={6}
              direction={`forward`}
              autoplay={false}
              loop={true}
              onLoopComplete={(spritesheet) => {
                spritesheet.pause();
                if (touchCount == 0 && !!strikeGif.current) {
                  setShowSpritesheet(false);
                }
              }}
            />
          </>
        )}
      </div>

      {/* Bumpkin level warning */}
      {showBumpkinLevel && (
        <div
          className="flex justify-center absolute w-full pointer-events-none"
          style={{
            top: `${PIXEL_SCALE * -14}px`,
          }}
        >
          <InnerPanel className="absolute whitespace-nowrap w-fit z-50">
            <div className="text-xxs mx-1 p-1">
              <span>Bumpkin level {bumpkinLevelRequired} required.</span>
            </div>
          </InnerPanel>
        </div>
      )}

      {/* No tool warning */}
      {showEquipTool && (
        <div
          className="flex justify-center absolute w-full pointer-events-none"
          style={{
            top: `${PIXEL_SCALE * -14}px`,
          }}
        >
          <InnerPanel className="absolute whitespace-nowrap w-fit z-50">
            <div className="text-xxs mx-1 p-1">
              <span>Equip {tool.toLowerCase()}</span>
            </div>
          </InnerPanel>
        </div>
      )}

      {/* Health bar */}
      {touchCount > 0 && (
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            marginLeft: `${PIXEL_SCALE * -8}px`,
            bottom: `${PIXEL_SCALE * -5}px`,
          }}
        >
          <Bar percentage={100 - (touchCount / 3) * 100} type="health" />
        </div>
      )}
    </div>
  );
};

export const RecoveredCrimstone = React.memo(RecoveredCrimstoneComponent);
