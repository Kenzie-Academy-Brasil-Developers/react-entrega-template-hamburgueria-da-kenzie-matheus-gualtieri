import Product from "./Product";
import { ProductListContainer } from "./style";
function ProductList({ showProducts, handleClickAdd }) {
  return (
    <ProductListContainer>
      <ul>
        {showProducts.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleClickAdd={handleClickAdd}
            ></Product>
          );
        })}
      </ul>
    </ProductListContainer>
  );
}
export default ProductList;
