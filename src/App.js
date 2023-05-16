import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Project from "./components/project";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";

function App() {
  const [route, setRoute] = React.useState(window.location.pathname);
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

  React.useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ApolloProvider client={client}>
          <h1>This is my App!</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>

          <Footer />
        </ApolloProvider>
      </main>
    </div>
  );
}

export default App;
