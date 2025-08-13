import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About, Contact, Home, Professionals } from "./pages";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudio" element={<About />} />
          <Route path="/profesionales" element={<Professionals />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Providers>
  );
}

export default App;
