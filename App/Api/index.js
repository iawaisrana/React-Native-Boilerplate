import AsyncStorage from '@react-native-community/async-storage';

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
  token = await getAuthToken();
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };
  console.log('options', path, options);
  return fetch(path, options)
    .then(resp => {
      resp.json();
      console.log('res', resp.json());
    })
    .then(json => json)
    .catch(error => {
      error;
      console.log('error', error);
    });
}
