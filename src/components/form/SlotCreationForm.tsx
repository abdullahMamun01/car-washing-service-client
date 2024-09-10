import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TimePicker from "../date/TimePicker";
import ControlledInput from "./ControlledInput";
import SubmitButton from "./SubmitButton";

import SelectServiceList from "./SelectServiceList";
import { TCreateSlot } from "@/redux/types/slot.type";
import { useCreateSlotMutation } from "@/redux/api/slotApi";
import { catchError } from "@/utils/catchError";
import toast from "react-hot-toast";

export default function SlotCreationForm() {
  const [createSlot, { isLoading }] = useCreateSlotMutation();
  const onsubmit: SubmitHandler<TCreateSlot> = async (formData) => {
    try {
      await createSlot(formData).unwrap();
      toast.success("slot created successfully", { position: "bottom-right" });
      form.reset()
    } catch (error) {
      catchError(error as Error);
    }
  };

  const form = useForm<TCreateSlot>();
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <ControlledInput
                name="date"
                className="w-full mt-0"
                inputType="date"
                label="select date"
              />
            </div>
            <div>
              <TimePicker name="startTime" label="Start Time" />
            </div>
            <div>
              <TimePicker name="endTime" label="End Time" />
            </div>
            <div>
              <SelectServiceList />
            </div>
          </div>
          <SubmitButton isLoading={isLoading} className="w-full sm:w-auto">
            Create Slot
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
}
