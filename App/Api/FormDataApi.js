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

export default async function formDataApi(path, params, method, type) {
  let token = await getAuthToken();

  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
    method: method,
    body: params,
  };

  return fetch(path, options)
    .then((resp) => resp.json())
    .then((json) => json)
    .catch((error) => console.log(error));
}
