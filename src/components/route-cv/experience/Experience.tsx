import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'
import infosys from './infosys.jpeg'

interface IExperience {
  id: string
  avatar: any
  name: string
  description: string
}
const experiences: IExperience[] = [{
  avatar: infosys,
  description: `Infosys | Strategic Technology Group | Aug 2016  - Present`,
  id: 'exp-1',
  name: 'Specialist Programmer',
}, {
  avatar: infosys,
  description: `Infosys | Education, Training & Assessment | Oct 2014 - July 2016`,
  id: 'exp-2',
  name: 'System Engineer',
}, {
  avatar: infosys,
  description: `Infosys | July 2014 - Oct 2014`,
  id: 'exp-3',
  name: 'System Engineer Trainee',
}]

const renderExperience = (experience: IExperience, logoClass: string) => (
  <ListItem alignItems="flex-start" key={experience.id}>
    <ListItemAvatar>
      <img src={experience.avatar} alt={experience.name} className={logoClass} />
    </ListItemAvatar>
    <ListItemText primary={experience.name} secondary={experience.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Experience
      </Typography>
      <List>
        {experiences.map((experience) => renderExperience(experience, classes.logo))}
      </List>
    </Paper>
  )
}

export default Skills
