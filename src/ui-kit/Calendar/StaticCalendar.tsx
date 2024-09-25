import React from "react";

import styles from "./StaticCalendar.module.css";

const daysInMonth = [
  "",
  "",
  "",
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

const daysOfWeek = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուր", "Շբթ", "Կիր"];

const StaticCalendar = () => {
  const month = "Նոյեմբեր";
  const year = 2024;

  return (
    <div className={styles.static_calendar}>
      <div className={styles.header}>
        <div className={styles.month_year}>
          <span>
            {month} {year}
          </span>
        </div>
      </div>

      <div className={styles.days_of_week}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.days}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.days_of_month}>
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={[styles.days, day === "2" ? styles.highlight : ""].join(
              " "
            )}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticCalendar;
