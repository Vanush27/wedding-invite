import DraggableButton from "@ui-kit/DraggableBtn/DraggableButton";
import styles from "./styles.module.css";

const FrontPageInvitation = ({ setInvitationOpen }: any) => {
  return (
    <div>
      <div className={styles.mobileAdditionalBg} />
      <div className={styles.container}>
        <p className={styles.invitationText}>Save the date Vanush & Lusine</p>
        <>
          <DraggableButton setInvitationOpen={setInvitationOpen} />
        </>
      </div>
      <div className={styles.mobileAdditionalBg} />
    </div>
  );
};

export default FrontPageInvitation;
