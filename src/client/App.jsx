import "./styles/index.sass"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Product from "./pages/product"
import About from "./pages/about"
import Contact from "./pages/contact"
import Cart from "./components/cart"
import Payment from "./pages/payment"

import { Routes, Route } from "react-router-dom"
import Shop from "./pages/shopping"
import Success from "./pages/success"
import ScrollReset from "../util/scrollreset"

function App() {
  return (
    <>
    <ScrollReset />
    <Header />
    <div className="main">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/shop/:filter" element={<Shop />}></Route>
          <Route path="/product/:productName" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/success" element={ <Success /> }/>
        </Routes>

      <Footer />
    </div>
      
    <Cart />
    </>
  )
}

export default App