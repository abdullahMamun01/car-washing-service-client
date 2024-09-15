import { useState } from "react";
import {
  CarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  const [sortColumn, setSortColumn] = useState<keyof Payment | "">("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleSort = (column: keyof Payment) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredPayments = payments.filter((payment) =>
    Object.values(payment).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    const aValue = a[sortColumn as keyof Payment];
    const bValue = b[sortColumn as keyof Payment];
    
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedPayments.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedPayments.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead
            onClick={() => handleSort("user")}
            className="cursor-pointer hover:bg-gray-100"
          >
            User{" "}
            {sortColumn === "user" &&
              (sortDirection === "asc" ? (
                <ChevronUpIcon className="inline ml-1" />
              ) : (
                <ChevronDownIcon className="inline ml-1" />
              ))}
          </TableHead>
          <TableHead
            onClick={() => handleSort("amount")}
            className="cursor-pointer hover:bg-gray-100"
          >
            Amount{" "}
            {sortColumn === "amount" &&
              (sortDirection === "asc" ? (
                <ChevronUpIcon className="inline ml-1" />
              ) : (
                <ChevronDownIcon className="inline ml-1" />
              ))}
          </TableHead>
          <TableHead
            onClick={() => handleSort("date")}
            className="cursor-pointer hover:bg-gray-100"
          >
            Date{" "}
            {sortColumn === "date" &&
              (sortDirection === "asc" ? (
                <ChevronUpIcon className="inline ml-1" />
              ) : (
                <ChevronDownIcon className="inline ml-1" />
              ))}
          </TableHead>
          <TableHead
            onClick={() => handleSort("service")}
            className="cursor-pointer hover:bg-gray-100"
          >
            Service{" "}
            {sortColumn === "service" &&
              (sortDirection === "asc" ? (
                <ChevronUpIcon className="inline ml-1" />
              ) : (
                <ChevronDownIcon className="inline ml-1" />
              ))}
          </TableHead>
          <TableHead
            onClick={() => handleSort("status")}
            className="cursor-pointer hover:bg-gray-100"
          >
            Status{" "}
            {sortColumn === "status" &&
              (sortDirection === "asc" ? (
                <ChevronUpIcon className="inline ml-1" />
              ) : (
                <ChevronDownIcon className="inline ml-1" />
              ))}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentItems.map((payment) => (
          <TableRow key={payment.id} className="hover:bg-gray-50">
            <TableCell className="font-medium">{payment.user}</TableCell>
            <TableCell>${payment.amount.toFixed(2)}</TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <CarIcon className="mr-2 h-4 w-4 text-blue-500" />
                {payment.service}
              </div>
            </TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  payment.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : payment.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {payment.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
