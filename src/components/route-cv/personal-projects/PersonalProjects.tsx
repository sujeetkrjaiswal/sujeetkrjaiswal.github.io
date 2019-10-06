import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import WishIcon from '@material-ui/icons/CardGiftcard'
import CodeIcon from '@material-ui/icons/Code'
import ListIcon from '@material-ui/icons/List'
import ConstellationIcon from '@material-ui/icons/ScatterPlot'
import AutoTypingIcon from '@material-ui/icons/TextFields'
import React, { AnchorHTMLAttributes, FC } from 'react'
import useStyles from '../common-style'

import pokedex from './pokedex.png'
import wiki from './wiki.png'

function ImageAvatarCreator(img: string) {
  return function ImageAvatar(props: AnchorHTMLAttributes<any>) {
    return <img src={img} alt="Pokedex" {...props} />
  }
}

interface ILinks {
  id: string
  avatar: any
  name: string
  description: string
  url: string
}
const links: ILinks[] = [{
  avatar: ImageAvatarCreator(pokedex),
  description: `A Pokemon explorer`,
  id: 'pokedex',
  name: 'Pokedex',
  url: 'https://pokedex.sujeetjaiswal.com',
}, {
  avatar: ImageAvatarCreator(wiki),
  description: `Wikipedia redesigned to make it more readable and add social discussion forum.`,
  id: 'wiki',
  name: 'Wiki',
  url: 'https://wiki.sujeetjaiswal.com',
}, {
  avatar: ListIcon,
  description: `A "trello" inspired To-Do Planner application with boards, list and a global search.`,
  id: 'organizer',
  name: 'Organizer',
  url: 'https://github.sujeetjaiswal.com/organizer/#/',
}, {
  avatar: AutoTypingIcon,
  description: `An auto-typing code editor which types based on timer or keystroke. It was inspired by movies to create a hacker like typing experience`,
  id: 'autotyping',
  name: 'Auto Typing',
  url: 'http://github.sujeetjaiswal.com/AutoTyping/',
}, {
  avatar: ConstellationIcon,
  description: `A Moving stars and constellation effect created using canvas`,
  id: 'canvas-effects-constellation',
  name: 'Constellation effect',
  url: 'http://github.sujeetjaiswal.com/canvas-effects/ConstellationEffect/index.html',
}, {
  avatar: CodeIcon,
  description: 'Firework animation using canvas.',
  id: 'canvas-effects-fireworks',
  name: 'Fireworks Animation',
  url: 'http://github.sujeetjaiswal.com/canvas-effects/Fireworks/index.html',
}, {
  avatar: WishIcon,
  description: `A Diwali wish animation using canvas effects of fireworks and auto-typed messaged.`,
  id: 'canvas-effects-diwali',
  name: 'Diwali Wishes for 2016',
  url: 'http://github.sujeetjaiswal.com/canvas-effects/Diwali2016/index.html',
}]

const renderLinks = (link: ILinks, logoClass: string, textClass: string, showSecondary = true) => (
  <ListItem
    component="a"
    href={link.url}
    target="_blank"
    alignItems={showSecondary ? 'flex-start' : 'center'}
    key={link.id}
  >
    <ListItemAvatar>
      <link.avatar className={logoClass + ' ' + textClass} />
    </ListItemAvatar>
    <ListItemText className={textClass} primary={link.name} secondary={showSecondary ? link.description : null} />
  </ListItem>
)

const AdditionalLinks: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="personalProjects">
      <Typography variant="h5" className={classes.heading}>
        Personal Projects
      </Typography>
      <List component="nav">
        {links.map((link) => renderLinks(link, classes.logo, classes.anchorOverride))}
      </List>
    </Paper>
  )
}

export default AdditionalLinks
