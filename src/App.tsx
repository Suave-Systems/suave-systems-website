import { BrowserRouter as Router, useRoutes  } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { routes } from "./routes/AppRoutes";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes/>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
