import CartList from "./CartList";
import CartTotal from "./CartTotal";
import CartEmpty from "./CartEmpty";
import { CartStyled, CartHeader } from "./style";
function Cart({ currentSale, handleClickRemove, handleClickRemoveAll }) {
  return (
    <CartStyled>
      <CartHeader>
        <h3>Carrinho de compras</h3>
      </CartHeader>
      {console.log(currentSale)}
      {currentSale.length === 0 ? (
        <CartEmpty></CartEmpty>
      ) : (
        <>
          <CartList
            currentSale={currentSale}
            handleClickRemove={handleClickRemove}
          ></CartList>
          <CartTotal
            currentSale={currentSale}
            handleClickRemoveAll={handleClickRemoveAll}
          ></CartTotal>
        </>
      )}
    </CartStyled>
  );
}
export default Cart;
