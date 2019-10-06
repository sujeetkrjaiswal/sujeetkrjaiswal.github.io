import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'

import cbse from './img-edu/cbse.jpeg'
import udacity from './img-edu/udacity.png'
import uptu from './img-edu/uptu.jpeg'

interface IEducation {
  avatar: any
  name: string
  id: number
  description: string
  url: string
}
const educationDetails: IEducation[] = [{
  avatar: udacity,
  description: `Udacity's Nano-degree Program | 2019`,
  id: 1,
  name: 'Mobile Web Specialist',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Udacity',
}, {
  avatar: uptu,
  description: `Uttar Pradesh Technical University | 2014`,
  id: 2,
  name: 'B.Tech (Mechanical Engineering)',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Dr._A.P.J._Abdul_Kalam_Technical_University',
}, {
  avatar: cbse,
  description: `Central Board of Secondary Education | 2010`,
  id: 3,
  name: 'XII',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Central_Board_of_Secondary_Education',
}, {
  avatar: cbse,
  description: `Central Board of Secondary Education | 2008`,
  id: 4,
  name: 'X',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Central_Board_of_Secondary_Education',
}]

const renderSkill = (edu: IEducation, logoClass: string) => (
  <ListItem key={edu.id}>
    <ListItemAvatar>
      <a href={edu.url} target="_blank" rel="noopener noreferrer">
        <img src={edu.avatar} alt={edu.name} className={logoClass} />
      </a>
    </ListItemAvatar>
    <ListItemText primary={edu.name} secondary={edu.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="education">
      <Typography variant="h5" className={classes.heading}>
        Education
      </Typography>
      <List>
        {educationDetails.map((skill) => renderSkill(skill, classes.logo))}
      </List>
    </Paper>
  )
}

export default Skills
