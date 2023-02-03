import "./App.css";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import SearchedProduct from "./components/SearchedProduct";
import { MainStyled } from "./styles/mainStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const localCurrentSale = localStorage.getItem("CARTLIST");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localCurrentSale ? JSON.parse(localCurrentSale) : []
  );
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("CARTLIST", JSON.stringify(currentSale));
  }, [currentSale]);

  const showProducts = products.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase());
  });

  const handleClickAdd = (productId) => {
    const productCart = products.find((product) => {
      return product.id === productId;
    });
    const productAlredyOnCart = currentSale.find((product) => {
      return product.id === productCart.id;
    });
    console.log(productAlredyOnCart);
    productAlredyOnCart
      ? toast.error("O Item já está no carrinho")
      : setCurrentSale([...currentSale, productCart]);
  };

  const handleClickRemove = (productId) => {
    const productOnCart = currentSale.filter((product) => {
      return product.id !== productId;
    });
    setCurrentSale(productOnCart);
  };
  const handleClickRemoveAll = () => {
    setCurrentSale([]);
  };
  return (
    <div className="App">
      <Header setSearch={setSearch}></Header>
      <MainStyled>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            <SearchedProduct
              search={search}
              setSearch={setSearch}
            ></SearchedProduct>
            <ProductList
              showProducts={showProducts}
              handleClickAdd={handleClickAdd}
            ></ProductList>
            <Cart
              currentSale={currentSale}
              handleClickRemove={handleClickRemove}
              handleClickRemoveAll={handleClickRemoveAll}
            ></Cart>
          </>
        )}
      </MainStyled>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
