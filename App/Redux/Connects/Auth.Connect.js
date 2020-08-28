import { connect } from 'react-redux';
import { authActionsCreator } from '../actions';

function mapStateToProps({ AuthData }) {
  return {
    AuthData,
  };
}

const mapDispatchToProps = authActionsCreator;

export function authData(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}
