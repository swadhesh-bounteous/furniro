import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "@/types/types";

const fetchProducts = async (): Promise<Array<ProductApi>> => {
  const res = await fetch("https://localhost:7283/products");
  const data = await res.json();
  console.log(data);
  return data;
};

const useGetProducts = () => {
    return useQuery({
      queryKey: ['posts'],
      queryFn: () => fetchProducts(),
    })
  }

export default useGetProducts