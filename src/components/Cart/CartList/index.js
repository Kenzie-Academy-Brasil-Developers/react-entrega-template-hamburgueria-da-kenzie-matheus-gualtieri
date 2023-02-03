import CartProduct from "./CartProduct";
import { CartListContainer } from "./style";
function CartList({ currentSale, handleClickRemove }) {
  return (
    <CartListContainer>
      <ul>
        {currentSale.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              handleClickRemove={handleClickRemove}
            ></CartProduct>
          );
        })}
      </ul>
    </CartListContainer>
  );
}
export default CartList;
