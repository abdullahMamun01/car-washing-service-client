import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser)
  return (
    <>
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="/dashboard"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user?.name}
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
     
        </span>

      </Link>

   
    </>
  );
};

export default DropdownUser;
