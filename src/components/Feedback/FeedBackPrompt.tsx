import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";


export default function FeedbackPrompt() {
  return (
    <div className="text-center mt-8">
      <p className="text-lg text-gray-700">
        Want to share your experience? 
        <span className="text-sky-500 font-semibold"> Log in or sign up</span> to leave feedback and help us improve!
      </p>
      <Link
        to="/auth/login"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-white hover:bg-sky-600"
      >
        <span className="font-medium"> Log In / Sign Up </span>
        <ArrowRightCircle />
      </Link>
    </div>
  );
}
