import { useState, ChangeEvent } from "react"
import { CarIcon, ChevronDownIcon, ChevronUpIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import PaymentTable from "./PaymentTable"
import Pagination from "@/common/Pagination"

// Define the payment data structure
interface Payment {
  id: number
  user: string
  amount: number
  date: string
  service: string
  status: string
}

// Mock data for demonstration
const payments: Payment[] = [
  { id: 1, user: "John Doe", amount: 25, date: "2023-04-01", service: "Basic Wash", status: "Completed" },
  { id: 2, user: "Jane Smith", amount: 40, date: "2023-04-02", service: "Deluxe Wash", status: "Pending" },
  { id: 3, user: "Bob Johnson", amount: 60, date: "2023-04-03", service: "Premium Wash", status: "Completed" },
  { id: 4, user: "Alice Brown", amount: 30, date: "2023-04-04", service: "Basic Wash", status: "Refunded" },
  { id: 5, user: "Charlie Davis", amount: 50, date: "2023-04-05", service: "Deluxe Wash", status: "Completed" },
  // Add more mock data as needed
]

export default function PaymentList() {
  const [sortColumn, setSortColumn] = useState<keyof Payment | "">("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(5)



  const filteredPayments = payments.filter((payment) =>
    Object.values(payment).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    }
    return 0
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage


  const pageNumbers: number[] = []
  for (let i = 1; i <= Math.ceil(sortedPayments.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Car Wash Service - Admin Payment List</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search payments..."
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Items per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md overflow-x-auto">
        <PaymentTable />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedPayments.length)} of {sortedPayments.length} entries
        </div>
        <div className="flex space-x-2">
          {pageNumbers.map((number) => (
            <Button
              key={number}
              variant={currentPage === number ? "default" : "outline"}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </Button>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  )
}
