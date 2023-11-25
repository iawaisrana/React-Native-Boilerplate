import { StartupActions } from './actions'
import { connect } from 'react-redux'

function mapStateToProps({ startup }) {
  return {
    startup,
  }
}

const mapDispatchToProps = StartupActions

export default function StartupConnect(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps)
}
