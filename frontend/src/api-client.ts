<<<<<<< HEAD
import axios from 'axios';
import { RegisterFormData, SignInFormData } from './types'; // Türlerin bulunduğu dosyanın yolu
=======
// api-client.ts
import axios from 'axios';
import { RegisterFormData } from './pages/Register';
import { SignInFormData } from './pages/SignIn';
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387

// Temel URL ayarını yapmalısınız.
axios.defaults.baseURL = 'http://localhost:5000';

const apiClient = {
  register: async (data: RegisterFormData) => {
<<<<<<< HEAD
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
=======
    const response = await axios.post('/api/users/register', data);
    return response.data;
  },
  signIn: async (data: SignInFormData) => {
    const response = await axios.post('/api/auth/login', data);
    return response.data;
  },
}


>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
export default apiClient;
