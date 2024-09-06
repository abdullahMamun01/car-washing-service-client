import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { PlusIcon } from "lucide-react";
import ServiceManageForm from "@/components/form/ServiceManageForm";
import CarWashingServiceList from "./CarWashingServiceList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal, isOpenModal } from "@/redux/features/modal/modalSlice";
import {
  resetDeleteService,
  resetUpdateService,
  useDeleteService,
} from "@/redux/features/service/serviceSlice";
import { catchError } from "@/utils/catchError";
import { useDeleteServiceMutation } from "@/redux/api/serviceApi";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";

export function ServiceManagement() {
  const openModal = useAppSelector((state) =>
    isOpenModal(state)("update-service")
  );
  const confirmDelteModal = useAppSelector((state) =>
    isOpenModal(state)("delete-service")
  );

  const dispatch = useAppDispatch();
  // const selectDelteService =
  const handleCloseModal = () => {
    dispatch(closeModal("update-service"));
    dispatch(resetUpdateService());
  };
  const [delteMuation, { isLoading }] = useDeleteServiceMutation();

  const handleDeleteCloseModal = () => {
    dispatch(closeModal("delete-service"));
    dispatch(resetDeleteService());
  };
  const selectDelteService = useAppSelector(useDeleteService);

  const handleDeleteService = async () => {
    const data: { serviceId: string } = {
      serviceId: selectDelteService!.serviceId,
    };
    try {
      await delteMuation(data).unwrap();
      handleDeleteCloseModal();
      toast.success("service delte successfully", { position: "bottom-right" });
    } catch (error) {
      catchError(error as Error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Management</CardTitle>
        <CardDescription>Manage available car wash services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white hover:bg-primary/90">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll  max-h-screen max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
              </DialogHeader>
              <ServiceManageForm />
            </DialogContent>
          </Dialog>
        </div>

        <CarWashingServiceList />

        <Dialog open={openModal} onOpenChange={() => handleCloseModal()}>
          <DialogContent className="overflow-y-scroll  max-h-screen max-w-2xl">
            <DialogHeader>
              <DialogTitle>Update Service</DialogTitle>
            </DialogHeader>
            <ServiceManageForm />
          </DialogContent>
        </Dialog>

        <AlertDialog
          open={confirmDelteModal}
          onOpenChange={() => handleDeleteCloseModal()}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete{" "}
                <span className="text-blue-400 font-bold block">
                  {selectDelteService?.serviceName}
                </span>{" "}
                this service?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                service and may affect existing bookings.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                onClick={handleDeleteService}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                {isLoading ? (
                  <span className="flex gap-2">
                    Deleting...{" "}
                    <Spinner className="text-primary ml-2" size="small" />
                  </span>
                ) : (
                  "delte service"
                )}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
