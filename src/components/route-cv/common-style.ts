import { createStyles, makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => createStyles({
  anchorOverride: {
    color: theme.palette.text.primary
  },
  card: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3),
  },
  content: {
    marginBottom: theme.spacing(1),
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  logo: {
    height: '3em',
    width: '3em',
  },
  smallLogo: {
    height: '2em',
    width: '2em',
  },
  subheading: {
    margin: theme.spacing(4, 0, 2, 0),
  },
}))
