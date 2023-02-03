import { CartProductCard, ContainerImg, CartProducInformation } from "./style";
import { ButtonRemove } from "../../../../styles/button";
function CartProduct({ product, handleClickRemove }) {
  return (
    <CartProductCard key={product.id}>
      <ContainerImg>
        <img src={product.img} alt={product.name}></img>
      </ContainerImg>
      <CartProducInformation>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
        <ButtonRemove
          type="button"
          onClick={() => handleClickRemove(product.id)}
        >
          Remover
        </ButtonRemove>
      </CartProducInformation>
    </CartProductCard>
  );
}
export default CartProduct;
