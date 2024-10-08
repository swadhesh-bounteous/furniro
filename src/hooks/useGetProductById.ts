import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "@/types/types";

const fetchProductById = async (id: number): Promise<ProductApi> => {
  const res = await fetch(`https://localhost:7283/api/products/${id}`);
  
  if (!res.ok) {
    throw new Error('Error fetching product');
  }

  const data = await res.json();
  return data;
};

const useGetProductById = (id: number) => {
  return useQuery({
    queryKey: ['product', id],  
    queryFn: () => fetchProductById(id), 
    enabled: !!id,  
  });
};

export default useGetProductById;
