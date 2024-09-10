import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAvailableSlotListQuery,
  useUpdateSlotStatusMutation,
} from "@/redux/api/slotApi";
import { catchError } from "@/utils/catchError";
import { TSlotStatus } from "@/redux/types/slot.type";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import SlotSkeleton from "@/common/skeleton/SlotSkeleton";
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "available":
      return "bg-green-100 text-green-800";
    case "booked":
      return "bg-blue-100 text-blue-800";
    case "unavailable":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function SlotList() {
  const [changeSlotStatus, { isLoading: isStatusChanging }] =
    useUpdateSlotStatusMutation();

  const handleUpdateStatus = async (
    slotId: string,
    slotStatus: TSlotStatus
  ) => {
    try {
      const updaeSlot = await changeSlotStatus({ slotId, slotStatus }).unwrap();
      toast.success(
        `slot status change to ${updaeSlot.isBooked} successfully`,
        { position: "bottom-right" }
      );
    } catch (error) {
      catchError(error as Error);
    }
  };
  const location = useLocation();
  const { data, isLoading, isFetching } = useAvailableSlotListQuery(
    location.search
  );
  if (isLoading || isFetching) {
    return <SlotSkeleton />;
  }
  return (
    <div>
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
          {data?.map((slot) => (
            <TableRow
              key={slot._id}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell>{slot._id}</TableCell>
              <TableCell>{slot.date}</TableCell>
              <TableCell>{slot.startTime}</TableCell>
              <TableCell>{slot.endTime}</TableCell>
              <TableCell>{slot.service.name}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    slot.isBooked
                  )}`}
                >
                  {slot.isBooked}
                </span>
              </TableCell>
              <TableCell>
                <Select
                  value={slot.isBooked}
                  onValueChange={(value) =>
                    handleUpdateStatus(slot._id, value as TSlotStatus)
                  }
                  disabled={slot.isBooked === "booked" || isStatusChanging}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="unavailable">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
