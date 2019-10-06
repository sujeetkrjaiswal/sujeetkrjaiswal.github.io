import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'
import infosys from './infosys.jpeg'

interface IExperience {
  id: string
  avatar: any
  name: string
  description: string,
  url: string
}
const experiences: IExperience[] = [{
  avatar: infosys,
  description: `Infosys | Strategic Technology Group | Aug 2016  - Present`,
  id: 'exp-1',
  name: 'Specialist Programmer',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Infosys',
}, {
  avatar: infosys,
  description: `Infosys | Education, Training & Assessment | Oct 2014 - July 2016`,
  id: 'exp-2',
  name: 'System Engineer',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Infosys',
}, {
  avatar: infosys,
  description: `Infosys | July 2014 - Oct 2014`,
  id: 'exp-3',
  name: 'System Engineer Trainee',
  url: 'https://wiki.sujeetjaiswal.com/wiki/Infosys',
}]

const renderExperience = (experience: IExperience, logoClass: string) => (
  <ListItem alignItems="flex-start" key={experience.id}>
    <ListItemAvatar>
      <a href={experience.url} target="_blank" rel="noopener noreferrer">
        <img src={experience.avatar} alt={experience.name} className={logoClass} />
      </a>
    </ListItemAvatar>
    <ListItemText primary={experience.name} secondary={experience.description} />
  </ListItem>
)

const Skills: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="experience">
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
