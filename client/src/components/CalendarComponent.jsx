/* eslint-disable react/prop-types */
import { format, startOfMonth } from "date-fns";
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
import { useState } from "react";
import "@zach.codes/react-calendar/dist/calendar-tailwind.css";
const CalendarComponent = ({ events }) => {
  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  console.log(events);
  const formattedEvent = events.map((event) => {
    return {
      title: event.eventTitle,
      date: new Date(event.dateTime),
      color: event.color,
    };
  });
  return (
    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={(date) => setCurrentMonth(date)}
    >
      <MonthlyNav />
      <MonthlyBody events={formattedEvent}>
        <MonthlyDay
          renderDay={(data) => {
            return data.map((item, index) => (
              <div
                className="item"
                key={index}
                style={{ background: item.color || "#ffffff" }}
              >
                <DefaultMonthlyEventItem
                  title={item.title}
                  // Format the date here to be in the format you prefer
                  date={format(item.date, "kk:mm")}
                />
              </div>
            ));
          }}
        />
      </MonthlyBody>
    </MonthlyCalendar>
  );
};

export default CalendarComponent;
