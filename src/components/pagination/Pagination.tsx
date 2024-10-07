import React from "react";
import Button from "@/components/common/Button";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-4 py-8">
      <Button variant="v3" size="large" value="1" className="bg-beige" />
      <Button variant="v3" size="large" value="2" className="bg-beige" />
      <Button variant="v3" size="large" value="3" className="bg-beige" />
      <Button variant="v3" size="large" value="Next" className="bg-beige" />
    </div>
  );
};

export default Pagination;
