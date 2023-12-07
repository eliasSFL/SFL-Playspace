import React, { useState } from "react";

import { PIXEL_SCALE } from "features/game/lib/constants";
import { Modal } from "react-bootstrap";
import { Panel } from "components/ui/Panel";
import { MapPlacement } from "features/game/expansion/components/MapPlacement";
import { SUNNYSIDE } from "assets/sunnyside";
import { CROP_LIFECYCLE } from "features/island/plots/lib/plant";
import { translate } from "lib/i18n/translate";
export const HeliosSunflower: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <MapPlacement x={0} y={12} height={1} width={1}>
      <div
        className="relative w-full h-full cursor-pointer hover:img-highlight"
        onClick={() => setShowModal(true)}
      >
        <img
          src={CROP_LIFECYCLE.Sunflower.ready}
          className="absolute"
          style={{
            width: `${PIXEL_SCALE * 16}px`,
            bottom: `${PIXEL_SCALE * 0}px`,
          }}
        />
      </div>
      <Modal show={showModal} centered onHide={() => setShowModal(false)}>
        <Panel>
          <img
            src={SUNNYSIDE.icons.close}
            className="absolute cursor-pointer z-20"
            onClick={() => setShowModal(false)}
            style={{
              top: `${PIXEL_SCALE * 6}px`,
              right: `${PIXEL_SCALE * 6}px`,
              width: `${PIXEL_SCALE * 11}px`,
            }}
          />
          <div className="p-2">
            <p>{translate("heliosSunflower.title")}</p>
            <p className="mt-2">{translate("heliosSunflower.description")}</p>
          </div>
        </Panel>
      </Modal>
    </MapPlacement>
  );
};
