
import UpcomingBooking from "./UpcomingBooking";
import PastBookingList from "./PastBookingList";

export default function UserBookings() {
  // Mock booking data

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, john
      </h1>

      <div className="space-y-6">
        <UpcomingBooking />
        <PastBookingList />
      </div>
    </div>
  );
}
