import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import useStyles from '../common-style'

// import msPassed from './img-cert/ms-passed.jpeg'
// import msProfessional from './img-cert/ms-professional-certificate.jpg'
// import msSpecialist from './img-cert/ms-specialist-certificate.jpg'
// import udacityCert from './img-cert/udacity-certificate.jpg'
import linkedIn from '../additional-links/linkedin.svg'
import ms from './img-cert/ms.svg'
import udacity from './img-cert/udacity.png'

interface ICertificates {
  avatar: any
  name: string
  id: number
  description: string
  url: string
  certificate?: string
}
const certifications: ICertificates[] = [{
  avatar: udacity,
  description: `Udacity | Issued March 2019 | No Expiration Date | Credential ID 2UAGMKFJ`,
  id: 1,
  name: 'Mobile Web Specialist - Nanodegree Program',
  url: 'https://graduation.udacity.com/confirm/2UAGMKFJ',
}, {
  avatar: linkedIn,
  description: `LinkedIn | Issued Jan 2019 | No Expiration Date`,
  id: 2,
  name: 'Become a Web Developer',
  url: 'http://www.linkedin.com/learning/paths/become-a-web-developer',
}, {
  avatar: ms,
  description: `Microsoft | Issued March 2017 | No Expiration Date | Credential ID G050-2376`,
  id: 3,
  name: 'Exam 480: Programming in HTML5 with JavaScript and CSS3',
  url: 'https://www.youracclaim.com/badges/a8f8b3e8-b43f-4f80-b4e4-e573e42ca527/linked_in_profile',
}]

const renderCertificate = (certificate: ICertificates, classes: Record<'anchorOverride' | 'logo', string>) => (
  <ListItem component="a" href={certificate.url} target="_blank" alignItems="flex-start" key={certificate.id}>
    <ListItemAvatar>
      <img src={certificate.avatar} alt={certificate.name} className={classes.logo} />
    </ListItemAvatar>
    <ListItemText className={classes.anchorOverride} primary={certificate.name} secondary={certificate.description} />
  </ListItem>
)

const Certifications: FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.card} id="certifications">
      <Typography variant="h5" className={classes.heading}>
        Certifications
      </Typography>
      <List component="nav">
        {certifications.map((certificate) => renderCertificate(certificate, classes))}
      </List>
    </Paper>
  )
}

export default Certifications
