import { ITechItem, Level } from './TechItem'

import bootstrap from './img-tech/bootstrap.svg'
import materialUi from './img-tech/material-ui.svg'
import ng from './img-tech/ng.svg'
import ngMaterial from './img-tech/ngMaterial.svg'
import react from './img-tech/react.svg'
import rxjs from './img-tech/rxjs.png'
import spring from './img-tech/spring.svg'
import uikit from './img-tech/uikit.svg'

const frameworks: ITechItem[] = [{
  imgSrc: react,
  level: Level.Proficient,
  name: 'React',
}, {
  imgSrc: materialUi,
  level: Level.Proficient,
  name: 'Material Ui',
}, {
  imgSrc: ng,
  level: Level.Expert,
  name: 'Angular',
}, {
  imgSrc: spring,
  level: Level.Beginner,
  name: 'Spring',
}, {
  imgSrc: rxjs,
  level: Level.Expert,
  name: 'RxJS',
}, {
  imgSrc: ngMaterial,
  level: Level.Expert,
  name: 'Angular Material',
}, {
  imgSrc: bootstrap,
  level: Level.Proficient,
  name: 'Bootstrap',
}, {
  imgSrc: uikit,
  level: Level.Proficient,
  name: 'Ui Kit',
}]

export default frameworks
