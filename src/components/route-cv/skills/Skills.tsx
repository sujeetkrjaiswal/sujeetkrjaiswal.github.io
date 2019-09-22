import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import DevicesIcon from '@material-ui/icons/Devices'
import LinearScale from '@material-ui/icons/LinearScale'
import SearchIcon from '@material-ui/icons/Search'
import SecurityIcon from '@material-ui/icons/Security'
import SpeedIcon from '@material-ui/icons/Speed'
import React, { FC } from 'react'

import useStyles from '../common-style'

interface ISkills {
  id: string
  avatar: any
  name: string
  description: string
}
const skills: ISkills[] = [{
  avatar: DevicesIcon,
  description: `Single page applications in Angular, React.js using typescript, webpack and gulp.`,
  id: 'skill-1',
  name: 'Responsive and Progressive Web Application',
}, {
  avatar: SearchIcon,
  description: `Recommendation System for both personalized and non-personalized recommendations.
  Elastic Search for search, autocomplete & related document based on content similarity.`,
  id: 'skill-2',
  name: 'Elastic Search & Recommendation Systems',
}, {
  avatar: SecurityIcon,
  description: `SSO, Oauth2, and role based access control of resource restriction on both client and server side.`,
  id: 'skill-3',
  name: 'Authentication , Authorization & Access Control',
}, {
  avatar: SpeedIcon,
  description: `Performance enhancement using caching. Encryption strategies based on user, device and content hash.`,
  id: 'skill-4',
  name: 'Performance, Security & Encryption',
}, {
  avatar: LinearScale,
  description: `Intermediate knowledge of Application Architecture
  (Clustering, Load Balancing, Caching, High Availability through redundancy),
  Database Design (RDBMS), API and Data Flow Design for entire applications`,
  id: 'skill-5',
  name: 'Application Architecture & Design for Scalability',
}]

const renderSkill = (skill: ISkills) => (
  <ListItem alignItems="flex-start" key={skill.id}>
    <ListItemAvatar>
      <skill.avatar />
    </ListItemAvatar>
    <ListItemText primary={skill.name} secondary={skill.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Skills
      </Typography>
      <List>
        {skills.map((skill) => renderSkill(skill))}
      </List>
    </Paper>
  )
}

export default Skills
