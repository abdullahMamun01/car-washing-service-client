import toast from "react-hot-toast";

export function catchError(error : Error) {
    if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message , {position:'bottom-right'})
       
      } else {

        toast.error(error.message, {position:'bottom-right'})
      }
}