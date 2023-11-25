import { AuthActions } from './actions'
import { connect } from 'react-redux'

function mapStateToProps({ user }) {
  return {
    user,
  }
}

const mapDispatchToProps = AuthActions

export default function UserConnect(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps)
}
