import { ITechItem, Level } from './TechItem'

import aws from './img-tech/aws.png'
import firebase from './img-tech/firebase.png'
import github from './img-tech/github.svg'
import jenkins from './img-tech/jenkins.png'
import travis from './img-tech/travis.svg'

const miscTechs: ITechItem[] = [{
  imgSrc: github,
  level: Level.Expert,
  name: 'Github',
  url: 'https://wiki.sujeetjaiswal.com/wiki/GitHub',
}, {
  imgSrc: travis,
  level: Level.Proficient,
  name: 'Travis CI',
}, {
  imgSrc: jenkins,
  level: Level.Proficient,
  name: 'Jenkins',
}, {
  imgSrc: aws,
  level: Level.Beginner,
  name: 'AWS',
}, {
  imgSrc: firebase,
  level: Level.Beginner,
  name: 'Firebase',
}]

export default miscTechs
