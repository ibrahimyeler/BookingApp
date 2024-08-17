import { RegisterFormData } from "./pages/Register";
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signIn = async (data: { email: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, data);
    return response.data;
};

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(responseBody.message);
    }

    return responseBody;
};

// Fonksiyonları dışa aktarmak
export default { signIn, register };
