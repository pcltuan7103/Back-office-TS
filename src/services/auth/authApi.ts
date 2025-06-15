import { ILoginEmail } from "@/types/auth";
import request from "../request";

export const loginApi = async (params: ILoginEmail) => {
    const data = await request.post('ayth/login', params);
    return data.data;
};