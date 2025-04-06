import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { CustomNavbar } from "./Components/Navbar";
import UrbanStorie from "./Components/UrbanStorie";
import FooterLast from "./Components/FooterLast";
import { Home } from "./Pages/Home";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import LogOut from "./Pages/LogOut";
import Cart from "./Pages/Cart";
import AdminPage from "./Pages/AdminPage";
import BestDealsCarousel from "./Pages/BestDeal";
import WomenCollection from "./Pages/WomenCollection";
import MenArrivals from "./Pages/MenArrivals";
import OutletSummer from "./Pages/OutletSummer";
import AboutGentle from "./Pages/AboutGentle";
import ContactUs from "./Pages/ContactUs";

function App() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isAdminPage = path.startsWith("/admin");
  const isAuthPage = path === "/login" || path === "/signup";
  const isCartPage = path === "/cart";

  return (
    <div style={{ background: "#f5f5f5" }}>
      {/* Show Navbar unless it's admin page */}
      {!isAdminPage && <CustomNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/bestdeals" element={<BestDealsCarousel />} />
        <Route path="/womencollection" element={<WomenCollection />} />
        <Route path="/menarrivals" element={<MenArrivals />} />
        <Route path="/outletsummer" element={<OutletSummer />} />
        <Route path="/aboutgentle" element={<AboutGentle />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      {/* Extra Components – only show if NOT on admin, login/signup, OR cart */}
      {!isAdminPage && !isAuthPage && !isCartPage && (
        <>
          <BestDealsCarousel />
          <WomenCollection />
          <MenArrivals />
          <UrbanStorie />
          <OutletSummer />
          <AboutGentle />
        </>
      )}

      {/* Footer is shown on all pages EXCEPT admin */}
      {!isAdminPage && <FooterLast />}
    </div>
  );
}

export default App;
