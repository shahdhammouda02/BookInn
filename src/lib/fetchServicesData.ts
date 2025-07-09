import { servicesData } from "@/data/servicesData";

export const fetchServicesData = async()=>{
    return new Promise<typeof servicesData>((resolve)=>{
        setTimeout(() => {
            resolve(servicesData)
        }, 500);
    })
}