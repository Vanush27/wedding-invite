import React, { useState } from "react";

import { FrontPageInvitation } from "@screens";
import { PlaySong } from "@components";
import WeddingInvitation from "@screens/WeddingInvitation/WeddingInvitation";

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  const renderInvitation = () => (
    <>
      {isInvitationOpen ? (
        <div style={{ width: "100%" }}>
          <PlaySong isInvitationOpen={isInvitationOpen} />
          <WeddingInvitation />
        </div>
      ) : (
        <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
      )}
    </>
  );

  return <>{renderInvitation()}</>;
};

export default MainScreen;
