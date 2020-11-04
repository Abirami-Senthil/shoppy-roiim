import React from 'react'
import { Layout, ProductList, Cart } from '../components'
import { makeStyles } from '@material-ui/core/styles'
import productList from '../utils/productList'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  left: {
    flex: 2
  },
  right: {
    flex: 1
  }
}))

export default function Home() {
  const classes = useStyles()
  const items = productList.map((product) => {
    return { ...product, count: 0 }
  })

  const [products, setProducts] = React.useState(items)
  const increaseCount = (index) => {
    let items = [...products]
    let item = { ...items[index] }
    item.count += 1
    items[index] = item
    setProducts(items)
  }
  const decreaseCount = (index) => {
    let items = [...products]
    let item = { ...items[index] }
    if (item.count == 0) {
      return
    }
    item.count -= 1
    items[index] = item
    setProducts(items)
  }

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.left}>
          <ProductList
            products={products}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        </div>
        <div className={classes.right}>
          <Cart products={products} />
        </div>
      </div>
    </Layout>
  )
}
