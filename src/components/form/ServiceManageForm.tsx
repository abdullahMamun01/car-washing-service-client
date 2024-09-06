import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ControlledInput from "./ControlledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { carWashSchema } from "@/schema/services.schema";
import {
  useAddServiceMutation,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { TCarWashService } from "@/redux/types/service.type";
import { catchError } from "@/utils/catchError";
import SubmitButton from "./SubmitButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  resetUpdateService,
  useUpdateService,
} from "@/redux/features/service/serviceSlice";
import { closeModal } from "@/redux/features/modal/modalSlice";

export default function ServiceManageForm() {
  const selectedUpdateService = useAppSelector(useUpdateService);
  const dispatch = useAppDispatch();
  const [addService, { isLoading: isAddingService }] = useAddServiceMutation();
  const [updateService, { isLoading: isUpdatingService }] =
    useUpdateServiceMutation();

  const form = useForm<TCarWashService>({
    defaultValues: {
      name: selectedUpdateService?.name || "",
      description: selectedUpdateService?.description || "",
      price: selectedUpdateService?.price,
      duration: selectedUpdateService?.duration,
    },
    resolver: zodResolver(carWashSchema),
  });

  const onSubmit: SubmitHandler<TCarWashService> = async (formData) => {
    try {
      if (updateService) {
        await updateService({ ...formData, id: selectedUpdateService!.id });
      } else {
        await addService(formData).unwrap();
      }
      dispatch(closeModal("update-service"));
      dispatch(resetUpdateService());

      form.reset();
    } catch (error) {
      catchError(error as Error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="p-6 h-full overflow-hidden bg-white rounded-md"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="py-6 ">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="text"
            name="name"
            label="Service Name"
            placeholder="Service name"
          />
        </div>

        <div className="py-6 ">
          <div className="w-full ">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 md:flex-1 p-3">
                <label
                  htmlFor="duration"
                  className="block text-sm font-semibold uppercase mb-4 text-primary"
                >
                  Duration
                </label>
                <Controller
                  name="duration"
                  control={form.control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    >
                      <option value="">Select a category</option>
                      <option value="60">1:00 hour</option>
                    </select>
                  )}
                />
                {form.formState.errors.duration && (
                  <p className="text-red-600 pt-2">
                    {form.formState?.errors?.duration?.message as string}
                  </p>
                )}
                {/* <select
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value={60}>60 minutes</option>
                </select> */}
              </div>
              <div className="w-full md:w-1/3 md:flex-1 p-3">
                <ControlledInput
                  label="price"
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  inputType="number"
                  placeholder="service price"
                  name="price"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="w-full ">
            <Controller
              name="description"
              control={form.control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="service description..."
                  rows={8}
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                ></textarea>
              )}
            />
            {form.formState.errors.description && (
              <p className="text-red-600 pt-2">
                {form.formState?.errors?.description?.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="pt-6 w-full mx-auto flex justify-center">
          <SubmitButton
            isLoading={
              selectedUpdateService ? isUpdatingService : isAddingService
            }
            className="inline-flex w-full py-3 px-9 mb-6 text-base text-white font-semibold bg-primary hover:bg-orange-900 focus:ring-2 focus:ring-orange-900 focus:ring-opacity-50 rounded-full shadow-4xl focus:outline-none transition duration-200"
          >
            {(selectedUpdateService ? isUpdatingService : isAddingService)
              ? "submiting..."
              : selectedUpdateService
              ? "Update Service"
              : "Add Service"}
          </SubmitButton>
        </div>
      </form>
    </FormProvider>
  );
}
