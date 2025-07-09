import { useQuery } from "@tanstack/react-query";
import { fetchServicesData } from "@/lib/fetchServicesData";

export const useServiceData = () => {
  return useQuery({
    queryKey: ["servicesData"],
    queryFn: fetchServicesData,
  });
};
