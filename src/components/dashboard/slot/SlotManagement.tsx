"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"



// Predefined list of services
const services = [
  "Basic Wash",
  "Deluxe Wash",
  "Interior Cleaning",
  "Exterior Detailing",
  "Full Detailing",
]

// Mock data for slots
const initialSlots = [
  { id: 1, date: "2023-06-01", startTime: "09:00", endTime: "10:00", service: "Basic Wash", status: "Available" },
  { id: 2, date: "2023-06-01", startTime: "10:00", endTime: "11:30", service: "Deluxe Wash", status: "Booked" },
  { id: 3, date: "2023-06-01", startTime: "11:30", endTime: "13:00", service: "Interior Cleaning", status: "Unavailable" },
  { id: 4, date: "2023-06-02", startTime: "09:00", endTime: "10:00", service: "Basic Wash", status: "Available" },
]

export default function SlotManagement() {
  const [slots, setSlots] = useState(initialSlots)
  const [newSlot, setNewSlot] = useState({ date: "", startTime: "", endTime: "", service: "", status: "Available" })

  const handleCreateSlot = () => {
    if (!newSlot.date || !newSlot.startTime || !newSlot.endTime || !newSlot.service) {
   
      toast.error('Please fill in all fields' , {position:'bottom-right'})
      return
    }

    if (newSlot.startTime >= newSlot.endTime) {

      toast.error('End time must be after start time' , {position:'bottom-right'})
      return
    }

    const id = Math.max(...slots.map(slot => slot.id)) + 1
    setSlots([...slots, { ...newSlot, id }])
    setNewSlot({ date: "", startTime: "", endTime: "", service: "", status: "Available" })

    toast.success('New slot created' , {position:'bottom-right'})

  }

  const handleUpdateStatus = (id: number, newStatus: string) => {
    const updatedSlots = slots.map(slot => {
      if (slot.id === id) {
        if (slot.status === "Booked") {
          
          return slot
        }
        return { ...slot, status: newStatus }
      }
      return slot
    })
    setSlots(updatedSlots)
    
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'booked':
        return 'bg-blue-100 text-blue-800'
      case 'unavailable':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Slot Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Create New Slot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <Label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Select Date</Label>
            <Input
              id="date"
              type="date"
              value={newSlot.date}
              onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="startTime" className="block mb-2 text-sm font-medium text-gray-700">Start Time</Label>
            <Input
              id="startTime"
              type="time"
              value={newSlot.startTime}
              onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="endTime" className="block mb-2 text-sm font-medium text-gray-700">End Time</Label>
            <Input
              id="endTime"
              type="time"
              value={newSlot.endTime}
              onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">Select Service</Label>
            <Select
              value={newSlot.service}
              onValueChange={(value) => setNewSlot({ ...newSlot, service: value })}
            >
              <SelectTrigger id="service" className="w-full">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleCreateSlot} className="w-full sm:w-auto">Create Slot</Button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Slot List</h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">Date</TableHead>
              <TableHead className="font-bold">Start Time</TableHead>
              <TableHead className="font-bold">End Time</TableHead>
              <TableHead className="font-bold">Service</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slots.map((slot) => (
              <TableRow key={slot.id} className="hover:bg-gray-50 transition-colors">
                <TableCell>{slot.id}</TableCell>
                <TableCell>{slot.date}</TableCell>
                <TableCell>{slot.startTime}</TableCell>
                <TableCell>{slot.endTime}</TableCell>
                <TableCell>{slot.service}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(slot.status)}`}>
                    {slot.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Select
                    value={slot.status}
                    onValueChange={(value) => handleUpdateStatus(slot.id, value)}
                    disabled={slot.status === "Booked"}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Update status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Available">Available</SelectItem>
                      <SelectItem value="Unavailable">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  )
}