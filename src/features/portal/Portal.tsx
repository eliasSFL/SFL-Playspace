import React, { useContext } from "react";
import { PortalContext } from "./PortalProvider";
import { useActor } from "@xstate/react";
import { Modal } from "react-bootstrap";
import { Panel } from "components/ui/Panel";
import { Button } from "components/ui/Button";
import { PortalPhaser } from "./PortalPhaser";
import { PortalHud } from "./components/PortalHud";
import { translate } from "lib/i18n/translate";

export const Portal: React.FC = () => {
  const { portalService } = useContext(PortalContext);
  const [portalState] = useActor(portalService);

  return (
    <div>
      {portalState.matches("error") && (
        <Modal centered show>
          <Panel>
            <span>{translate("portal.wrong")}</span>
          </Panel>
        </Modal>
      )}

      {portalState.matches("loading") && (
        <Modal centered show>
          <Panel>
            <span className="loading">{translate("portal.loading")}</span>
          </Panel>
        </Modal>
      )}
      {portalState.matches("unauthorised") && (
        <Modal centered show>
          <Panel>
            <span>{translate("portal.unauthorised")}</span>
          </Panel>
        </Modal>
      )}
      {portalState.matches("idle") && (
        <Modal centered show>
          <Panel>
            <Button onClick={() => portalService.send("START")}>
              {translate("start")}
            </Button>
          </Panel>
        </Modal>
      )}
      {portalState.matches("ready") && (
        <>
          <PortalHud />
          <PortalPhaser />
        </>
      )}
    </div>
  );
};
