import { notification } from 'antd';
const API_URL = 'https://dog.ceo/api/breeds/image/random';

const api = {
  getEvents: async (callback) => {
    try {
        const result = await fetch(API_URL);
        const response = await result.json();
        const { status, message } = response;

        if (status === 'success') {
          callback && callback(JSON.parse(localStorage.getItem('data')) || []);
        }
        if (status === 'error') {
          notification.error({ message });
        }
    } catch(e) {
      notification.error({ message: e.message });
    }    
  },
  createEvent: async (callback) => {
    try {
      const result = await fetch(API_URL);
      const response = await result.json();
      const { status, message } = response;
      if (status === 'success') {
        notification.success({ message: 'Event success created'});
        callback && callback();
      }
      if (status === 'error') {
        notification.error({ message });
      }
    } catch(e) {
      notification.error({ message: e.message });
    }
  },
  editEvent: async (callback) => {
    try {
      const result = await fetch(API_URL);
      const response = await result.json();
      const { status, message } = response;
      if (status === 'success') {
        notification.success({ message: 'Event success edit'});
        callback && callback();
      }
      if (status === 'error') {
        notification.error({ message });
      }
    } catch(e) {
      notification.error({ message: e.message });
    }
  },
  removeEvent: async (callback) => {
    try {
      const result = await fetch(API_URL);
      const response = await result.json();
      const { status, message } = response;
      if (status === 'success') {
        notification.success({ message: 'Event remove'});
        callback && callback();
      }
      if (status === 'error') {
        notification.error({ message });
      }
    } catch(e) {
      notification.error({ message: e.message });
    }
  },
}

export default api;