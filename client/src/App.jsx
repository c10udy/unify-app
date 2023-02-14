import './index.css'; // Import Stylesheet
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, Footer } from './components/index';
import {
  Home,
  Menu,
  itemInformation,
  Restaurants,
  Contact,
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
        <Route path="/itemInformation" element={<itemInformation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
