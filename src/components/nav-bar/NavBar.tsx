import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { toggleNavBar } from '../../actions/navBar.actions'
import { IRootState } from '../../reducers/root-reducers'
const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    {
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      root: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
      },
      title: {
        flexGrow: 1,
      },
    },
  ),
)
interface IProps {
  toggleDrawer: () => void,
  isDrawerOpen: boolean,
}

const NavBar: FC<IProps> = (props) => {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.root} >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={props.toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sujeet Jaiswal
        </Typography>
      </Toolbar>
    </AppBar >
  )
}

function mapStateToProps(state: IRootState) {
  return {
    isDrawerOpen: state.navBar.isOpen,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleDrawer: bindActionCreators(toggleNavBar, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar)
