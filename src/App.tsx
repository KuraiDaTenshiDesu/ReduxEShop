import { FC } from "react";
import "./style/App.css";
import Header from "./components/Header/Header";
import SaleHeader from "./components/SaleHeader/SaleHeader";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <SaleHeader />
      <Header />
      <img src="/DELETELATER.png" className="TODELETE" />
      <Footer />
    </div>
  );
};

export default App;
