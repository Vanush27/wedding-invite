import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [firstEventRef, firstEventInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [secondEventRef, secondEventInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [thirdEventRef, thirdEventInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [fourthEventRef, fourthEventInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [fifthEventRef, fifthEventInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      linesRef.current.forEach((line) => {
        const linePosition = line?.getBoundingClientRect().top as number;
        const screenPosition = window.innerHeight / 1.2;

        if (linePosition < screenPosition) {
          line?.classList.add(styles.visible);
        }
      });
    };

    // const debouncedHandleScroll = debounce<any>(, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [linesRef]);

  return (
    <div className={styles.timeline}>
      <div ref={(el) => (linesRef.current[0] = el)} className={styles.line} />

      <div
        ref={firstEventRef}
        className={`${styles.event} ${
          firstEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            firstEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          10:00 - 11:00
        </p>
        <p
          className={`${styles.text} ${
            firstEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Փեսայի տուն
        </p>
      </div>

      <div ref={(el) => (linesRef.current[1] = el)} className={styles.line} />

      <div
        ref={secondEventRef}
        className={`${styles.event} ${
          secondEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            secondEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          11:30 - 13:00
        </p>
        <p
          className={`${styles.text} ${
            secondEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Հարսի տուն
        </p>
      </div>

      <div ref={(el) => (linesRef.current[2] = el)} className={styles.line} />

      <div
        ref={thirdEventRef}
        className={`${styles.event} ${
          thirdEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            thirdEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          14:00 - 15:00
        </p>
        <p
          className={`${styles.text} ${
            thirdEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Պսակադրություն
        </p>
      </div>

      <div ref={(el) => (linesRef.current[3] = el)} className={styles.line} />

      <div
        ref={fourthEventRef}
        className={`${styles.event} ${
          fourthEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            fourthEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          17:30 - 23:30
        </p>
        <p
          className={`${styles.text} ${
            fourthEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Հարսանյաց հանդիսություն
        </p>
      </div>

      <div ref={(el) => (linesRef.current[4] = el)} className={styles.line} />

      <div
        ref={fifthEventRef}
        className={`${styles.event} ${
          fifthEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            fifthEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          00:00
        </p>
        <p
          className={`${styles.text} ${
            fifthEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Բարի գիշեր բարեկամներ
        </p>
      </div>
    </div>
  );
};

export default Timeline;
