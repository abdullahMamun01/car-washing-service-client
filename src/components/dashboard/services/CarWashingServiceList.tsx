import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/features/modal/modalSlice";
import {
  deleteService,
  updateService,
} from "@/redux/features/service/serviceSlice";
import { TCarWashService } from "@/redux/types/service.type";

export default function CarWashingServiceList() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return <div>loading...</div>;
  }
  const handleUpdateService = (data: TCarWashService) => {
    dispatch(openModal("update-service"));
    dispatch(updateService(data));
  };

  const handleDeleteService = (data: {
    serviceId: string;
    serviceName: string;
  }) => {
    dispatch(openModal("delete-service"));
    dispatch(deleteService(data));
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Service Name</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((service) => (
          <TableRow key={service._id}>
            <TableCell>{service._id}</TableCell>
            <TableCell>{service.name}</TableCell>
            <TableCell>{service.duration} minutes</TableCell>

            <TableCell>${service.price.toFixed(2)}</TableCell>
            <TableCell>
              <Button
                onClick={() =>
                  handleUpdateService({
                    name: service?.name,
                    id: service._id,
                    description: service?.description,
                    price: Number(service?.price),
                  } as TCarWashService)
                }
                variant="outline"
                size="sm"
                className="mr-2"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                onClick={() =>
                  handleDeleteService({
                    serviceId: service._id,
                    serviceName: service.name,
                  })
                }
                variant="outline"
                size="sm"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
