import { useState } from "react";
import { HeaderStyled, FormStyled } from "./style";
import { Button } from "../../styles/button";
function Header({ setSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };

  return (
    <HeaderStyled>
      <div>
        <h3>
          Burguer <span>Kenzie</span>
        </h3>
        <FormStyled onSubmit={submit}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          ></input>
          <Button type="submit"> Pesquisar</Button>
        </FormStyled>
      </div>
    </HeaderStyled>
  );
}
export default Header;
