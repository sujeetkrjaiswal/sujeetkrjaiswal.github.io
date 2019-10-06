import { Chip, createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call'
import ContactsIcon from '@material-ui/icons/Contacts'
import MailIcon from '@material-ui/icons/MailOutline'
import React, { FC } from 'react'
import useStyles from '../common-style'

import qr from './contact-qr.svg'

const contactStyle = makeStyles((theme: Theme) => createStyles({
  qrImg: {
    maxWidth: '100%',
    width: 320,
  },
  chipsContainer: {
    margin: theme.spacing(2, 0),
  },
  links: {
    textDecoration: 'none'
  },
  name: {
    fontWeight: 100,
  },

}))

const Contact: FC = () => {
  const classes = useStyles()
  const contact = contactStyle()
  return (
    <Paper className={classes.card} id="getInTouch">
      <Typography variant="h5" className={classes.heading}>
        Get in touch
      </Typography>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} sm={8} md={9}>
          <Typography variant="h5" color="primary" className={contact.name}>Sujeet Kumar Jaiswal</Typography>
          <div className={contact.chipsContainer}>
            <a href="tel:+91-8861301007" className={contact.links}>
              <Chip
                icon={<CallIcon />}
                label="+91-8861301007"
                color="primary"
                variant="outlined"
              />
            </a>
          </div>
          <div className={contact.chipsContainer}>
            <a href="mailTo:contact@sujeetjaiswal.com" className={contact.links}>
              <Chip
                icon={<MailIcon />}
                label="contact@sujeetjaiswal.com"
                color="primary"
                variant="outlined"
              />
            </a>
          </div>
          <div className={contact.chipsContainer}>
            <a download={true} href="/sujeet_jaiswal.vcf" className={contact.links}>
              <Chip
                icon={<ContactsIcon />}
                label="contact@sujeetjaiswal.com"
                color="primary"
                variant="outlined"
              />
            </a>
          </div>

        </Grid>
        <Grid item={true} xs={12} sm={4} md={3}>
          <img className={contact.qrImg} src={qr} alt="Contact QR Code" />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Contact
