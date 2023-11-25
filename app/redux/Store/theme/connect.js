import { ThemeActions } from './actions'
import { connect } from 'react-redux'

function mapStateToProps({ theme }) {
  return {
    theme,
  }
}

const mapDispatchToProps = ThemeActions

const ThemeConnect = (WrappedComponent) => {
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
  return ConnectedComponent
}

export default ThemeConnect
