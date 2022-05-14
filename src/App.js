import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useRouter} from "./utils/routes";

function App() {
  const routes = useRouter();

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {routes &&
            routes.map((r) => (
              <Route exact key={r.path} path={r.path} element={r.element} />
            ))}
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
