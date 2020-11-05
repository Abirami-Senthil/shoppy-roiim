import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: 20
  },
  cartList: {
    listStyle: 'none'
  }
}))

export default function Cart({
  products,
  checkoutFn,
  total,
  buttonAction,
  paymentLoading
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
            Your Cart
          </Typography>
          {total > 0 && (
            <>
              <table>
                <tbody>
                  {products.map((product) => {
                    if (product.count > 0) {
                      return (
                        <tr key={Math.random()}>
                          <td>{product.name}</td>
                          <td>x</td>
                          <td>{product.count}</td>
                          <td> = </td>
                          <td> $ {product.price * product.count} </td>
                        </tr>
                      )
                    }
                  })}
                </tbody>
              </table>
              <hr />
              <Typography gutterBottom variant="h6" component="h6">
                Total: $ {total}
              </Typography>
            </>
          )}
          {total === 0 && (
            <Typography gutterBottom variant="h6" component="h6">
              Your cart is empty
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="secondary"
            disabled={total === 0 || paymentLoading}
            onClick={() => checkoutFn()}
          >
            {buttonAction}
          </Button>
          {paymentLoading && <CircularProgress />}
        </CardActions>
      </Card>
    </div>
  )
}
