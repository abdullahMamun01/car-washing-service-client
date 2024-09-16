import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePaymentListQuery } from "@/redux/api/paymentApi";
import { CarIcon, Loader } from "lucide-react";
import { useLocation } from "react-router-dom";

// Define the shape of a payment
type Payment = {
  id: number;
  user: string;
  amount: number;
  date: string;
  service: string;
  status: "Completed" | "Pending" | "Refunded";
};

// Mock data for demonstration
const payments: Payment[] = [
  {
    id: 1,
    user: "John Doe",
    amount: 25,
    date: "2023-04-01",
    service: "Basic Wash",
    status: "Completed",
  },
  {
    id: 2,
    user: "Jane Smith",
    amount: 40,
    date: "2023-04-02",
    service: "Deluxe Wash",
    status: "Pending",
  },
  {
    id: 3,
    user: "Bob Johnson",
    amount: 60,
    date: "2023-04-03",
    service: "Premium Wash",
    status: "Completed",
  },
  {
    id: 4,
    user: "Alice Brown",
    amount: 30,
    date: "2023-04-04",
    service: "Basic Wash",
    status: "Refunded",
  },
  {
    id: 5,
    user: "Charlie Davis",
    amount: 50,
    date: "2023-04-05",
    service: "Deluxe Wash",
    status: "Completed",
  },
  // Add more mock data as needed
];

export default function PaymentTable() {
  const location = useLocation();
  const { data, isLoading, isFetching } = usePaymentListQuery(location.search);

  if (isLoading || isFetching) {
    return (
      <div className="min-h-screen text-sky-500">
        <Loader />
      </div>
    );
  }

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="cursor-pointer hover:bg-gray-100">
            User{" "}
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-gray-100">
            Amount
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-gray-100">
            Date{" "}
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-gray-100">
            Service{" "}
          </TableHead>
          <TableHead className="cursor-pointer hover:bg-gray-100">
            Status{" "}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((payment) => (
          <TableRow key={payment._id} className="hover:bg-gray-50">
            <TableCell className="font-medium">{payment.user.name}</TableCell>
            <TableCell>${payment.service.price.toFixed(2)}</TableCell>
            <TableCell>{new Date(payment.paymentDate).toDateString()}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <CarIcon className="mr-2 h-4 w-4 text-blue-500" />
                {payment.service.name}
              </div>
            </TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  payment.paymentStatus === "completed"
                    ? "bg-green-100 text-green-800"
                    : payment.paymentStatus === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {payment.paymentStatus}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
