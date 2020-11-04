import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    minWidth: 200,
    minHeight: 200
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}))

export default function ProductCard({
  productName,
  description,
  price,
  count,
  index,
  increaseCount,
  decreaseCount
}) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://via.placeholder.com/200"
        title="Product Image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {productName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            $ {price}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="remove" onClick={() => decreaseCount(index)}>
            <Remove />
          </IconButton>
          <Typography variant="subtitle2" color="textSecondary">
            {count}
          </Typography>
          <IconButton aria-label="add" onClick={() => increaseCount(index)}>
            <Add />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}
