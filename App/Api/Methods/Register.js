import Api from '../index';
import ApiConstants from '../ApiConstants';

export default function register(data) {
  return Api(ApiConstants.BASE_URL + ApiConstants.REGISTER, data, 'POST', null);
}
