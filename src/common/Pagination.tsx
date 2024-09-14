// Pagination.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface PaginationProps {
  limit?: number;
}

const Pagination: React.FC<PaginationProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (page: number) => {
    // Ensure page is within valid range
    if (page < 1) return;
    setCurrentPage(page);

    const searchParams = new URLSearchParams(location.search);

    searchParams.set("page", page.toString());

    navigate(`?${searchParams.toString()}`);
  };



  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Previous
        </Button>
        <div className="text-sm text-gray-500">Page {currentPage}</div>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 0}
        >
          Next
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
