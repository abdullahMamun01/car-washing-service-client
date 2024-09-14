import { Button } from "@/components/ui/button";
import {
  Dialog,

  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeedbackForm from "../form/FeedbackForm";
import { ThumbsUp } from "lucide-react";

export default function FeedbackModal() {
  return (
    <Dialog>
      <DialogTrigger >
        <Button className="inline-flex  justify-center items-center gap-2 rounded  bg-sky-500 px-8 py-3 text-white hover:bg-sky-500 hover:text-white focus:outline-none focus:ring active:text-indigo-500">
          <ThumbsUp className=" text-white" />
          <span className="text-sm font-medium"> Feedback </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm />
    
      </DialogContent>
    </Dialog>
  );
}
