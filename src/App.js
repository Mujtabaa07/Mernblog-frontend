import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import ArticlesList from "./Pages/ArticlesList";
import NotFound from "./Pages/NotFound";
//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:name" element={<Articles />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
