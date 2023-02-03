import { Button } from "../../styles/button";
import { SearchedProductContainer } from "./style";
function SearchedProduct({ search, setSearch }) {
  return (
    <>
      {search ? (
        <SearchedProductContainer>
          <h2>
            Resultados para: <span>{search}</span>
          </h2>
          <Button
            type="button"
            onClick={() => {
              setSearch("");
            }}
          >
            Limpar Pesquisa
          </Button>
        </SearchedProductContainer>
      ) : (
        <></>
      )}
    </>
  );
}
export default SearchedProduct;
