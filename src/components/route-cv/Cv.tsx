import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { requestProfile } from '../../actions/profile.actions'
import { IProfileData } from '../../interfaces/profile.model'
import { EnumProfileDataStatus } from '../../reducers/profile.reducer'
import { IRootState } from '../../reducers/root-reducers'
import Links from './additional-links/Links'
import Awards from './awards/Awards'
import Certification from './certifications/Certification'
import Contact from './contact-me/ContactMe'
import Education from './education/Education'
import Experience from './experience/Experience'
import Header from './header/Header'
import PersonalProjects from './personal-projects/PersonalProjects'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Summary from './summary/Summary'
import Tech from './tech/Tech'
import TestScores from './test-scores/TestScores'
interface IProps {
  profileData: IProfileData | null | undefined,
  profileStatus: EnumProfileDataStatus,
  fetchProfile: () => void
}
class Cv extends Component<IProps> {
  // constructor(props: IProps) {
  //   super(props)
  // }
  public componentDidMount() {
    this.props.fetchProfile()
  }
  public render() {
    return (
      <section>
        <Header />
        <Summary />
        <Tech />
        <Skills />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Awards />
        <Certification />
        <TestScores />
        <Education />
        <Links />
        <Contact />
      </section>
    )
  }
}

function mapStateToProps(state: IRootState) {
  return {
    profileData: state.profile.data,
    profileStatus: state.profile.status,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchProfile: bindActionCreators(requestProfile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cv)
