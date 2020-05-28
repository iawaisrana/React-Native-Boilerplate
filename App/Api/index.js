import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      return value;
    }
    return '';
  } catch (e) {
    return '';
  }
};

export default async function api(path, params, method, token) {
  try {
    token = await getAuthToken();

    const options = {
      url: path,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      method: method,
      body: JSON.stringify(params),
    };

    console.log('options', path, options);

    return axios(options)
      .then((resp) => {
        return resp.data;
      })
      .then((data) => data)
      .catch((error) => {
        console.log('error', error);
      });
  } catch (error) {
    return error;
  }
}
