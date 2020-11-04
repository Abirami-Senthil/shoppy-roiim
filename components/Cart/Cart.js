import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: 20
  },
  cartList: {
    listStyle: 'none'
  }
}))

export default function Cart({ products }) {
  const classes = useStyles()
  var total = 0
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
            Your Cart
          </Typography>
          <table>
            <tbody>
              {products.map((product) => {
                if (product.count > 0) {
                  total += product.price * product.count
                  return (
                    <tr key={Math.random()}>
                      <td>{product.name}</td> <td>x</td>{' '}
                      <td> {product.count} </td> <td> = </td>{' '}
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
        </CardContent>
      </Card>
    </div>
  )
}
