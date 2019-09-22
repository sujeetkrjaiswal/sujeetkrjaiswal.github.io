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
  url: '',
}, {
  avatar: uptu,
  description: `Uttar Pradesh Technical University | 2014`,
  id: 2,
  name: 'B.Tech (Mechanical Engineering)',
  url: '',
}, {
  avatar: cbse,
  description: `Central Board of Secondary Education | 2010`,
  id: 3,
  name: 'XII',
  url: '',
}, {
  avatar: cbse,
  description: `Central Board of Secondary Education | 2008`,
  id: 4,
  name: 'X',
  url: '',
}]

const renderSkill = (edu: IEducation, logoClass: string) => (
  <ListItem key={edu.id}>
    <ListItemAvatar>
      <img src={edu.avatar} alt={edu.name} className={logoClass} />
    </ListItemAvatar>
    <ListItemText primary={edu.name} secondary={edu.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
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
