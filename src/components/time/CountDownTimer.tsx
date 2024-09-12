import { Clock } from "lucide-react";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";

type TCountDownDate = {
  date: string;
  startTime: string;
};

export default function CountDownTimer({ date, startTime }: TCountDownDate) {
  const appointmentTime = new Date(`${date}T${startTime}:00Z`);

  const [duration, setDuration] = useState(calculateTimeLeft(appointmentTime));

  function calculateTimeLeft(targetDate: Date) {
    const currentTime = moment.tz(); // Get current time
    const targetTime = moment.tz(targetDate, "UTC"); // Use UTC time for target

    const diff = targetTime.diff(currentTime); // Get difference in milliseconds

    if (diff <= 0) {
      // Time is up or past
      return { days: "00", hours: "00", minute: "00", seconds: "00" };
    }

    const duration = moment.duration(diff);

    return {
      days: duration.days() > 9 ? duration.days() : `0${duration.days()}`,
      hours: duration.hours() > 9 ? duration.hours() : `0${duration.hours()}`,
      minute:
        duration.minutes() > 9 ? duration.minutes() : `0${duration.minutes()}`,
      seconds:
        duration.seconds() > 9 ? duration.seconds() : `0${duration.seconds()}`,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDuration = calculateTimeLeft(appointmentTime);

      // Check if time is up (all values are 0)
      if (
        newDuration.days === "00" &&
        newDuration.hours === "00" &&
        newDuration.minute === "00" &&
        newDuration.seconds === "00"
      ) {
        clearInterval(intervalId); // Stop the timer if time is up
      }

      setDuration(newDuration); // Update the duration
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, [appointmentTime]);

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
      <Clock className="w-4 h-4 ml-2 mt-2" />
      <h1 className="text-sky-500 font-bold mt-2">
        {duration.days} days {duration.hours}h {duration.minute}m{" "}
        {duration.seconds}s
      </h1>
    </div>
  );
}
