import UserList from "@/components/dashboard/user/UserList";

// Mock data for bookings

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
      {/* <h2 className="text-2xl font-semibold mb-4 text-gray-700">User List</h2> */}
      <UserList />
    </div>
  );
}
