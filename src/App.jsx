import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Centered output with nav above center */}
        <div className="content">
          <div className="center-stack">
            <nav className="app-nav">
              <Link to="/">Home</Link> |{" "}
              <Link to="/about">About</Link> |{" "}
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="route-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
