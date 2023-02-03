import { ButtonRemoveAll } from "../../../styles/button";
import { CartTotalStyled } from "./style";
function CartTotal({ currentSale, handleClickRemoveAll }) {
  return (
    <CartTotalStyled>
      <p>Total</p>
      <p>
        {`R$ ${Number.parseFloat(
          currentSale.reduce((previusValue, currentValue) => {
            return previusValue + currentValue.price;
          }, 0)
        ).toFixed(2)}`}
      </p>
      <ButtonRemoveAll
        onClick={() => {
          handleClickRemoveAll();
        }}
      >
        Remover Todos
      </ButtonRemoveAll>
    </CartTotalStyled>
  );
}
export default CartTotal;
