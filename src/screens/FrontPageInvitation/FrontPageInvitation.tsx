import React, { useEffect, useState } from "react";
import { parse } from "qs";

import styles from "./styles.module.css";
import DraggableButton from "@ui-kit/DraggableBtn/DraggableButton";

const FrontPageInvitation = ({ setInvitationOpen }: any) => {
  const [invTo, setInvTo] = useState<any>("");

  useEffect(() => {
    // const invTo = parse(window.location.search.substring(1));
    // setInvTo(invTo.to);
  }, []);

  return (
    <div>
      <div className={styles.mobileAdditionalBg} />
      <div className={styles.container}>
        <p className={styles.invitationText}>
          {/* {invTo && (
            <span>
              Dear <br />
              <span className={styles.invitationTo}>{invTo}</span>
              <br />
            </span>
          )} */}
          Save the date Vanush & Lusine
        </p>
        <>
          <DraggableButton setInvitationOpen={setInvitationOpen} />
        </>

        {/* <div className={styles.buttonContainer}>
          <Button
            text="Բացել հրավերը"
            onClick={() => setInvitationOpen(true)}
          />
        </div> */}
      </div>
      <div className={styles.mobileAdditionalBg} />
    </div>
  );
};

export default FrontPageInvitation;
