import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useMyBookingQuery } from "@/redux/api/bookingApi";
import NotFound from "@/components/error/NotFound";
import CountDownTimer from "@/components/time/CountDownTimer";

interface Booking {
  id: string;
  name: string;
  price: number;
  date: string;
  startTime: string;
  endTime: string;
  isRunning: boolean;
  isTimePassed: boolean;
}

export default function UpcomingBooking() {
  const { data, isLoading, isError } = useMyBookingQuery();
  const [runningCountDown, setRunningCountDown] = useState(false);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data) {
    return <NotFound />;
  }

  const upcoming: Booking[] = data?.map((booking) => ({
    id: booking._id,
    date: booking.slot.date,
    name: booking.service.name,
    startTime: booking.slot.startTime,
    endTime: booking.slot.endTime,
    price: booking.service.price,
    isRunning: false,
    isTimePassed: false,
  }));
  const currentTime = new Date(new Date().toUTCString()).getTime();

  const upcomingBookings = upcoming?.filter((book) => {
    const startTime = new Date(`${book.date}T${book.startTime}:00Z`).getTime();
    const endTime = new Date(`${book.date}T${book.endTime}:00Z`).getTime();
    if (currentTime >= startTime && currentTime <= endTime) {
      book.isRunning = true;
    }

    if (currentTime > endTime) {
      book.isTimePassed = true;
      book.isRunning = false;
    }
    return endTime > currentTime;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bookings</CardTitle>
        <CardDescription>Your scheduled car wash services.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingBookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <CardTitle>{booking.name}</CardTitle>
                <CardDescription>${booking.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(booking.date).toDateString()}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>
                    {new Date(
                      `${booking.date}T${booking.startTime}:00Z`
                    ).toLocaleTimeString()}
                  </span>
                </div>
                <div className="text-sm">
                  Time until appointment:
                  {booking.isRunning && (
                    <span className="text-sky-500 ml-3">
                      Your Appoint is Running!
                    </span>
                  )}
                  {booking.isTimePassed && (
                    <span className="text-red-500">Times up!</span>
                  )}
                  {!booking.isRunning && !booking.isTimePassed && (
                    <CountDownTimer
                      date={booking.date}
                      startTime={booking.startTime}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
