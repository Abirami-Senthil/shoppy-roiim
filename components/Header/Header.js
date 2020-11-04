import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { MovieFilter, AccountCircle, Store } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header({ title }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Store />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Movie Match'
}