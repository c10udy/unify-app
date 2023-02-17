import './index.css'; // Import Stylesheet
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, Footer } from './components/index';
import {
  Home,
  Menu,
  itemInformation,
  Product,
  Restaurants,
  Newsletter,
  Subscribe,
  Error,
} from './pages/index';

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/item_information" element={<itemInformation />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/product" element={<Product />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
