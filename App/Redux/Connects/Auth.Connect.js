import {connect} from 'react-redux';
import {authActionsCreator} from '../Actions';

function mapStateToProps({AuthData}) {
  return {
    AuthData,
  };
}

const mapDispatchToProps = authActionsCreator;

export function authData(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}
