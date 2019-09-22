import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { themeToggleDir } from '../../actions/theme.actions'
import { EnumDirValues } from '../../interfaces/toggleDir.model'
import { IRootState } from '../../reducers/root-reducers'

interface IProps {
  currentDir: EnumDirValues,
  toggleDir: any
}

const ToggleDir: FC<IProps> = (props) => (
  <div>
    {props.currentDir}
    <button onClick={props.toggleDir}>Toggle</button>
  </div>
)

function mapStateToProps(state: IRootState) {
  return {
    currentDir: state.theme.dir,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleDir: bindActionCreators(themeToggleDir, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleDir)
