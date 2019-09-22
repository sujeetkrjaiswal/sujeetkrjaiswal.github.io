import { ITechItem, Level } from './TechItem'

import aws from './img-tech/aws.png'
import firebase from './img-tech/firebase.png'
import github from './img-tech/github.svg'

const miscTechs: ITechItem[] = [{
  imgSrc: github,
  level: Level.Expert,
  name: 'Github',
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
