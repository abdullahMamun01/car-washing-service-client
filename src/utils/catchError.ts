import toast from "react-hot-toast";

export function catchError(error : Error) {
    if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };
        console.log(err.data.message)
        toast.error(err.data.message , {position:'bottom-right'})
       
      } else {
        console.log('something wen wrong' , error.message)
      }
}