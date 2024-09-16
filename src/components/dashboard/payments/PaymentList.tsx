
import { Input } from "@/components/ui/input"

import PaymentTable from "./PaymentTable"
import Pagination from "@/common/Pagination"
import { SearchIcon } from "lucide-react"

// Define the payment data structure



export default function PaymentList() {
 

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Car Wash Service - Admin Payment List</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search payments..."

        
            className="pl-8"
          />
        </div>
 
      </div>
      <div className="rounded-md overflow-x-auto">
        <PaymentTable />
      </div>
      <div className="flex justify-between items-center mt-4">
      
        
      </div>
      <Pagination />
    </div>
  )
}
