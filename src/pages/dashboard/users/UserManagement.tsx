import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import UserList from "@/components/dashboard/user/UserList";

// Mock data for bookings
const bookings = [
  {
    id: 1,
    user: "John Doe",
    service: "Basic Wash",
    date: "2023-06-01",
    time: "10:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    user: "Jane Smith",
    service: "Deluxe Wash",
    date: "2023-06-02",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    user: "Bob Johnson",
    service: "Interior Cleaning",
    date: "2023-06-03",
    time: "11:30 AM",
    status: "In Progress",
  },
];




export default function UserManagement() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Management</h1>
      <Tabs
        defaultValue="bookings"
        className="bg-white rounded-lg shadow-md p-6"
      >
        <TabsList className="mb-4">
          <TabsTrigger value="bookings" className="px-4 py-2 text-lg">
            Bookings
          </TabsTrigger>
          <TabsTrigger value="users" className="px-4 py-2 text-lg">
            Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value="bookings">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
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
          </Table>
        </TabsContent>
        <TabsContent value="users">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            User List
          </h2>
          <UserList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
