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
import { useGetAllBookingQuery } from "@/redux/api/bookingApi";
import { Badge } from "@/components/ui/badge";

export function BookingsOverview() {
  const { data, isLoading } = useGetAllBookingQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>
          Overview of the latest car wash bookings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-500">
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">User</TableHead>
              <TableHead className="font-bold">Service</TableHead>
              <TableHead className="font-bold">Date</TableHead>
              <TableHead className="font-bold">Time</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((booking) => (
              <TableRow key={booking._id} className="">
                <TableCell className="font-smibold">{booking._id}</TableCell>
                <TableCell className="font-smibold text-gray-100">
                  {booking.customer.name}
                </TableCell>
                <TableCell>{booking.service.name}</TableCell>
                <TableCell>{booking.slot.date}</TableCell>
                <TableCell>{booking.slot.startTime}</TableCell>
                <TableCell>
                  <Badge
                    className={`bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold`}
                  >
                    complete
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
{
  /* <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            User Bookings
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-bold">ID</TableHead>
                <TableHead className="font-bold">User</TableHead>
                <TableHead className="font-bold">Service</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="font-bold">Time</TableHead>
                <TableHead className="font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow
                  key={booking.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.user}</TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusColor(
                        booking.status
                      )} px-2 py-1 rounded-full text-xs font-semibold`}
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */
}
