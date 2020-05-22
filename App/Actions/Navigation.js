/*
 * Reducer actions related with navigation
 */
import NavigationService from '../Navigation/NavigationService';

export function navigateToHome(params) {
  NavigationService.navigate('App', params);
}
