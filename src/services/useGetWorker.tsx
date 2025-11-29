import axiosApiInstance from "@/api/axios-config";
import { endpoints } from "@/api/main-config";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
    const { data } = await axiosApiInstance.get(endpoints.getUsers);
    return data;
};

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        select: (data) => data
    });
};

