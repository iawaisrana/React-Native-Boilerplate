import { connect } from './node_modules/react-redux';
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
