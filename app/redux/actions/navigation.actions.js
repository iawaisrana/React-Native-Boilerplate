import NavigationService from '../../navigation/navigation-service';

export function navigateToHome(params) {
  NavigationService.navigate('App', params);
}
