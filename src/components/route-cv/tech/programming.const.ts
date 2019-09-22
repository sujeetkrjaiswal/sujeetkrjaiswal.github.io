import { ITechItem, Level } from './TechItem'

import css from './img-tech/css.svg'
import es from './img-tech/es.png'
import html from './img-tech/html.svg'
import java from './img-tech/java.svg'
import js from './img-tech/js.svg'
import node from './img-tech/node.svg'
import python from './img-tech/python.svg'
import scss from './img-tech/scss.svg'
import ts from './img-tech/ts.svg'

const programming: ITechItem[] = [{
  imgSrc: js,
  level: Level.Expert,
  name: 'Javascript',
}, {
  imgSrc: es,
  level: Level.Expert,
  name: 'EcmaScript',
}, {
  imgSrc: ts,
  level: Level.Expert,
  name: 'Typescript',
}, {
  imgSrc: html,
  level: Level.Expert,
  name: 'HTML',
}, {
  imgSrc: css,
  level: Level.Expert,
  name: 'CSS',
}, {
  imgSrc: scss,
  level: Level.Expert,
  name: 'SCSS',
}, {
  imgSrc: node,
  level: Level.Proficient,
  name: 'Node',
}, {
  imgSrc: python,
  level: Level.Proficient,
  name: 'Python',
}, {
  imgSrc: java,
  level: Level.Proficient,
  name: 'Java',
}]

export default programming
