import React from "react";
import Button from "@/components/common/Button";

interface PaginationProps {
  currentPage: number;   
  totalPages: number;   
  onPageChange: (page: number) => void;  
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full gap-x-4 py-8">
      <Button
        variant="v3"
        size="large"
        value="Previous"
        className="bg-beige"
        onClick={handlePreviousPage}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant="v3"
          size="large"
          value={`${index+1}`}
          className={`bg-beige ${currentPage === index + 1 ? 'font-bold' : ''}`}
          onClick={() => onPageChange(index + 1)}
        />
      ))}
      <Button
        variant="v3"
        size="large"
        value="Next"
        className="bg-beige"
        onClick={handleNextPage}
      />
    </div>
  );
};

export default Pagination;
