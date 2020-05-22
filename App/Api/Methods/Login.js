import Api from '../index';
import ApiConstants from '../ApiConstants';

export default function Login(data) {
  return Api(ApiConstants.BASE_URL + ApiConstants.LOGIN, data, 'POST', null);
}
