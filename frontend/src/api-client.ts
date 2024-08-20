// api-client.ts
import axios from 'axios';
import { RegisterFormData } from './pages/Register';
import { SignInFormData } from './pages/SignIn';

// Temel URL ayarını yapmalısınız.
axios.defaults.baseURL = 'http://localhost:5000';

const apiClient = {
  register: async (data: RegisterFormData) => {
    const response = await axios.post('/api/users/register', data);
    return response.data;
  },
  signIn: async (data: SignInFormData) => {
    const response = await axios.post('/api/auth/login', data);
    return response.data;
  },
}


export default apiClient;
