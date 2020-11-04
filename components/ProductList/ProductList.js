import { ProductCard } from '..'

export default function ProductList({
  products,
  increaseCount,
  decreaseCount
}) {
  return (
    <>
      {products.map((product, index) => {
        return (
          <ProductCard
            key={Math.random()}
            productName={product.name}
            description={product.description}
            price={product.price}
            count={product.count}
            index={index}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        )
      })}
    </>
  )
}
