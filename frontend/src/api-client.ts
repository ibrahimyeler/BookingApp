import axios from 'axios';
import { RegisterFormData, SignInFormData } from './types'; // Türlerin bulunduğu dosyanın yolu

// Temel URL ayarını yapmalısınız.
axios.defaults.baseURL = 'http://localhost:5000';

const apiClient = {
  register: async (data: RegisterFormData) => {
    try {
      const response = await axios.post('/api/users/register', data);
      return response.data;
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;
    }
  },
  signIn: async (data: SignInFormData) => {
    try {
      const response = await axios.post('/api/auth/login', data);
      return response.data;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  },
};

// Burada `apiClient`'ı default export olarak ekliyoruz
export default apiClient;
