import React, { useState } from "react";

import { FrontPageInvitation } from "@screens";
import { PlaySong } from "@components";
import WeddingInvitation from "@screens/WeddingInvitation/WeddingInvitation";

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  return (
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
};

export default MainScreen;
