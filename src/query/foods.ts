import { useQuery } from "@tanstack/react-query";
import axiosClient from "../lib/api/middleware";

export type Prices = "100" | "150" | "200" | "250" | null;

export const useGetFoodList = ({ price }: { price: Prices }) => {
  const { data, isLoading: isFoodListLoading } = useQuery({
    queryKey: ["food-list", price],
    queryFn: async (): Promise<GenericResponse<FoodListArray[]>> => {
      const query = price ? `?price=${price}` : "";
      return await axiosClient.get(`/foods${query}`);
    },
  });

  return { foodList: data?.data || [], isFoodListLoading };
};
