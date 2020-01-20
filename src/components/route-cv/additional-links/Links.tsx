import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'
import blogs from './blog.png'
import googleDocs from './docs.png'
import linkedIn from './linkedin.svg'
import pdf from './pdf-icon.png'
import pluralsight from './pluralsight.png'
import stackoverflow from './stackoverflow.png'
import github from '../tech/img-tech/github.svg'
interface ILinks {
  id: string
  avatar: any
  name: string
  description: string
  url: string
}
const links: ILinks[] = [{
  avatar: blogs,
  description: `My personal Blogs hosted on Medium.com`,
  id: 'blog',
  name: 'My Blog',
  url: 'https://blog.sujeetjaiswal.com',
}, {
  avatar: linkedIn,
  description: `Visit LinkedIn Profile to see additional details`,
  id: 'linkedIn',
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/sujeetkrjaiswal/',
}, {
  avatar: github,
  description: `Github Developer Profile`,
  id: 'github',
  name: 'Github',
  url: 'https://github.com/sujeetkrjaiswal',
}, {
  avatar: stackoverflow,
  description: `Stackoverflow Developer Profile`,
  id: 'stackoverflow',
  name: 'Stackoverflow',
  url: 'https://stackoverflow.com/users/story/5570700',
}, {
  avatar: pluralsight,
  description: `You can see the test scores of PluralsightIQ on this.`,
  id: 'pluralsight',
  name: 'Pluralsight',
  url: 'https://app.pluralsight.com/profile/sujeetkrjaiswal',
}, {
  avatar: pdf,
  description: `PDF Version of Resume`,
  id: 'resume-pdf',
  name: 'Download Resume',
  url: 'https://docs.google.com/document/d/1xsQ5CsqtFYgLWQKw_1meVbe2BlGSNLJGr5lxOvNhUzs/export?format=pdf',
}, {
  avatar: googleDocs,
  description: `Resume hosted on Google Docs.
  You can download resume in your preferred format from File -> Download As`,
  id: 'google-docs',
  name: 'Resume',
  url: 'https://docs.google.com/document/d/1xsQ5CsqtFYgLWQKw_1meVbe2BlGSNLJGr5lxOvNhUzs/edit?usp=sharing',
}, {
  avatar: googleDocs,
  description: `Resume published using Google Docs.`,
  id: 'google-docs-published',
  name: 'Published Resume',
  url: 'https://docs.google.com/document/d/e/2PACX-1vTXuKPEKRD3irAUjNLblIdk3r_XzYpL7_K9ZBr1o25yzdlZ2VEJ4ucrx4i0FbPf6rCUHDFwN4Reemf3/pub',
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
      <img src={link.avatar} alt={link.name} className={logoClass} />
    </ListItemAvatar>
    <ListItemText className={textClass} primary={link.name} secondary={showSecondary ? link.description : null} />
  </ListItem>
)

const AdditionalLinks: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card}>
      <Typography variant="h5" className={classes.heading}>
        Additional Links
      </Typography>
      <List component="nav">
        {links.map((link) => renderLinks(link, classes.logo, classes.anchorOverride))}
      </List>
    </Paper>
  )
}

export const AdditionalLinkMenu: FC = () => {
  const classes = useStyles()
  return (
    <List component="nav">
      {links.map((link) => renderLinks(link, classes.smallLogo, classes.anchorOverride, false))}
    </List>
  )
}
export default AdditionalLinks
