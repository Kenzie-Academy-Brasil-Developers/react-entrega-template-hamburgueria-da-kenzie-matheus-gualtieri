import { Button } from "../../../styles/button";
import { ProductCard, CardInformation, CardImgContainer } from "./style";
function Product({ product, handleClickAdd }) {
  return (
    <ProductCard key={product.id}>
      <CardImgContainer>
        <img src={product.img} alt={product.name}></img>
      </CardImgContainer>
      <CardInformation>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>
          <span>{`R$ ${Number.parseFloat(product.price).toFixed(2)}`}</span>
        </p>
        <Button
          type="button"
          onClick={() => {
            handleClickAdd(product.id);
          }}
        >
          Adicionar
        </Button>
      </CardInformation>
    </ProductCard>
  );
}
export default Product;
