import React, { useEffect, useState } from "react";
import { TicketTable } from "./TicketTable";
import { CloseButtonPanel } from "features/game/components/CloseablePanel";
import { getRelativeTime } from "lib/utils/time";
import { Leaderboards } from "./actions/cache";
import { LeaderboardButton } from "./LeaderboardButton";
import { Modal } from "react-bootstrap";
import { fetchLeaderboardData } from "./actions/leaderboard";
import { getSeasonalTicket } from "features/game/types/seasons";
import { ITEM_DETAILS } from "features/game/types/images";
import { useAppTranslation } from "lib/i18n/useAppTranslations";

interface Props {
  farmId: number;
}

export const Leaderboard: React.FC<Props> = ({ farmId }) => {
  const [data, setData] = useState<Leaderboards | null>(null);
  const [loading, setLoading] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState(0);
  const { t } = useAppTranslation();
  useEffect(() => {
    setLoading(true);

    const fetchLeaderboards = async () => {
      try {
        const data = await fetchLeaderboardData(farmId);
        setData(data);
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Error loading leaderboards", e);
      }
    };

    fetchLeaderboards();
  }, []);

  const handleOpen = () => {
    setShowLeaderboard(true);
  };

  const handleClose = () => {
    setShowLeaderboard(false);
  };

  const seasonTicket = getSeasonalTicket();

  return (
    <>
      <LeaderboardButton
        loaded={!loading}
        onClick={data ? handleOpen : undefined}
      />
      {data && (
        <Modal show={showLeaderboard} onHide={handleClose} centered>
          <CloseButtonPanel
            onClose={handleClose}
            tabs={[
              {
                icon: ITEM_DETAILS[seasonTicket].image,
                name: `${seasonTicket}s`,
              },
            ]}
            currentTab={leaderboardTab}
            setCurrentTab={setLeaderboardTab}
          >
            {leaderboardTab === 0 && (
              <div>
                <div className="p-1 mb-1 space-y-1">
                  <p className="text-sm">{`${seasonTicket} Leaderboard`}</p>
                  <p className="text-[12px]">
                    {t("lastUpdated")}
                    {getRelativeTime(data.lastUpdated)}
                  </p>
                </div>
                {data.tickets.topTen && (
                  <TicketTable
                    rankings={data.tickets.topTen}
                    farmId={Number(farmId)}
                  />
                )}
                {data.tickets.farmRankingDetails && (
                  <>
                    <div className="flex justify-center items-center">
                      <p className="mb-[13px]">...</p>
                    </div>
                    <TicketTable
                      showHeader={false}
                      rankings={data.tickets.farmRankingDetails}
                      farmId={Number(farmId)}
                    />
                  </>
                )}
              </div>
            )}
          </CloseButtonPanel>
        </Modal>
      )}
    </>
  );
};
