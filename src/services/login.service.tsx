import api from "../config/frontApi.config";

interface LoginData {
  email_or_phone: string;
  password: string;
}

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export const loginService = async (data: LoginData): Promise<Response> => {
  try {
    const response = await api.post<Response>('/provider/auth/login', data);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const forgetPasswordService = async (email: string): Promise<Response> => {
  try {
    const response = await api.get<Response>(`/front/send-forget-password-email?email=${email}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
