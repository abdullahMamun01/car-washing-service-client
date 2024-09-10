import NotFound from "@/components/error/NotFound";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMyBookingQuery } from "@/redux/api/bookingApi";
import React from "react";
interface Booking {
  id: string;
  date: string;
  service: string;
  price: number;
  startTime: string;
  endTime: string
}

export default function PastBookingList() {
  const { data, isLoading, isError } = useMyBookingQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data) {
    return <NotFound />;
  }

  const pastBookings: Booking[] = data?.map((booking) => ({
    id: booking._id,
    date: booking.slot.date,
    service: booking.service.name,
    startTime: booking.slot.startTime,
    endTime: booking.slot.endTime ,
    price: booking.service.price,
  }));

  const currentTime = new Date(new Date().toUTCString()).getTime();

  const filterPastBooking = pastBookings?.filter((book) => {
    const endTime = new Date(`${book.date}T${book.endTime}:00Z`).getTime();

    return endTime < currentTime;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Past Bookings</CardTitle>
        <CardDescription>Your car wash history.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterPastBooking?.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  {new Date(booking.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>{booking.startTime} UTC</TableCell>

                <TableCell>${booking.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
