"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type Service = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const sampleData: Service[] = [
  {
    name: "Interior Car Washing",
    description:
      "Our service concludes with a detailed inspection to ensure every aspect of your car's interior meets our high standards. We make any necessary touch-ups to ensure your vehicle looks and feels as good as new. Washing service is perfect for maintaining a clean, comfortable, and hygienic driving environment. Whether preparing for a special event or simply indulging in some well-deserved car care, our expert team provides a thorough and attentive service that will leave your vehicle's interior sparkling and fresh.",
    price: 29,
    duration: 60,
    isDeleted: false,
    createdAt: "2024-08-30T06:02:14.113Z",
    updatedAt: "2024-08-30T06:02:14.113Z",
  },
  // Add more sample data here...
];

export default function CarWashingServiceList() {
  const [services, setServices] = useState<Service[]>(sampleData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Service;
    direction: "asc" | "desc";
  } | null>(null);

  const sortData = (key: keyof Service) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    setServices(
      [...services].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  const filteredServices = services.filter((service) => service);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Car Washing Services</h1>
      <div className="mb-4"></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button variant="ghost" onClick={() => sortData("name")}>
                Name <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Description</TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("price")}>
                Price <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("duration")}>
                Duration (min) <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredServices.map((service, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell
                className="max-w-xs truncate"
                title={service.description}
              >
                {service.description}
              </TableCell>
              <TableCell>${service.price}</TableCell>
              <TableCell>{service.duration}</TableCell>
              <TableCell>{service.isDeleted ? "Deleted" : "Active"}</TableCell>
              <TableCell>
                {new Date(service.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(service.updatedAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
