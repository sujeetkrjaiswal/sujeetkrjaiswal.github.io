import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'
import infosys from './infosys.jpeg'
import curefit from './curefit.svg'
import medianet from './medianet.png'

interface IExperience {
  id: string
  avatar: any
  name: string
  description: string,
  url: string
}
const experiences: IExperience[] = [{
  avatar: curefit,
  description: `Cure.fit | Feb 2020  - Present`,
  id: 'exp-1',
  name: 'Software Engineer',
  url: 'https://www.cure.fit/',
}, {
  avatar: medianet,
  description: `Media.net | Programmatic Platform | Nov 2019 - Feb 2020`,
  id: 'exp-2',
  name: 'Team Lead',
  url: 'https://www.media.net/',
}, {
  avatar: infosys,
  description: `Infosys | July 2014 - Nov 2019`,
  id: 'exp-3',
  name: 'Specialist Programmer, Strategic Technology Group, Expert Track',
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
