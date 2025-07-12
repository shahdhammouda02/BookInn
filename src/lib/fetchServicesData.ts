import { servicesData } from "@/data/servicesData"
import { Service } from "@/types/service"

export const fetchServicesData = async(): Promise<Service[]> => servicesData
