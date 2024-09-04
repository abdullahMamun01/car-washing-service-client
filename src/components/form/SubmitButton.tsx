// SubmitButton.tsx

import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";



interface SubmitButtonProps {
  isLoading?: boolean;
 
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading = false,
  type = 'submit',
  className = '',
  children
}) => {
  return (
    <Button
      className={`inline-flex w-full py-3 px-9 mb-6 text-base text-white font-semibold bg-primary hover:bg-orange-900 focus:ring-2 focus:ring-orange-900 focus:ring-opacity-50 rounded-full shadow-4xl focus:outline-none transition duration-200 ${className}`}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex gap-2">
          {children} <Spinner className="text-white ml-2" size="small" />
        </span>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
};

export default SubmitButton;
