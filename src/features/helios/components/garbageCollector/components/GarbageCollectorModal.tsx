import React, { useState } from "react";

import { acknowledgeTutorial, hasShownTutorial } from "lib/tutorial";
import { Button } from "components/ui/Button";
import { GarbageSale } from "./GarbageSale";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

export const GarbageCollectorModal: React.FC = () => {
  const [showTutorial, setShowTutorial] = useState<boolean>(
    !hasShownTutorial("Garbage Collector")
  );
  const { t } = useAppTranslation();

  if (showTutorial) {
    return (
      <>
        <div className="p-2">
          <p className="mb-3">Welcome to my humble shop.</p>
          <p className="mb-2">
            {`I'm the Garbage Trader, and I'll buy anything you've got - as long
            as it's garbage.`}
          </p>
        </div>
        <Button
          onClick={() => {
            acknowledgeTutorial("Garbage Collector");
            setShowTutorial(false);
          }}
        >
          {t("continue")}
        </Button>
      </>
    );
  }
  return <GarbageSale />;
};
