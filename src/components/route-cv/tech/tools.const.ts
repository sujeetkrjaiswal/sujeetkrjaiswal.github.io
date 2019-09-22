import { ITechItem, Level } from './TechItem'

import bash from './img-tech/bash.png'
import elasticsearch from './img-tech/elasticsearch.svg'
import git from './img-tech/git.svg'
import gulp from './img-tech/gulp.svg'
import keycloak from './img-tech/keycloak.jpeg'
import mysql from './img-tech/mysql.svg'
import neo4j from './img-tech/neo4j.png'
import npm from './img-tech/npm.png'
import webpack from './img-tech/webpack.svg'
// to add: Neo4j
const tools: ITechItem[] = [{
  imgSrc: elasticsearch,
  level: Level.Proficient,
  name: 'Elasticsearch',
}, {
  imgSrc: neo4j,
  level: Level.Beginner,
  name: 'Neo4j',
}, {
  imgSrc: mysql,
  level: Level.Proficient,
  name: 'My SQL',
}, {
  imgSrc: git,
  level: Level.Expert,
  name: 'Git',
}, {
  imgSrc: webpack,
  level: Level.Expert,
  name: 'Webpack',
}, {
  imgSrc: npm,
  level: Level.Proficient,
  name: 'NPM',
}, {
  imgSrc: gulp,
  level: Level.Proficient,
  name: 'Gulp',
}, {
  imgSrc: bash,
  level: Level.Beginner,
  name: 'Bash',
}, {
  imgSrc: keycloak,
  level: Level.Proficient,
  name: 'Keycloak',
}]

export default tools
