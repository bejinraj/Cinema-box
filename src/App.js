import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
