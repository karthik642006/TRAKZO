import axios from 'axios';
import { Platform } from 'react-native';

// Use 10.0.2.2 for Android emulator, localhost for iOS/Web, or actual local IP for physical device
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:5000/api' : 'http://localhost:5000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const vitalsService = {
  getVitals: async (userId: string) => {
    const response = await api.get(`/vitals/${userId}`);
    return response.data;
  },
  addVitals: async (data: any) => {
    const response = await api.post('/vitals', data);
    return response.data;
  }
};

export const userService = {
  getUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  }
};

export default api;
