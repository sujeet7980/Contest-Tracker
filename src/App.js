import "./App.css";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import SiteContest from "./Component/SiteContest";
import { Container ,Row,Col} from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Row className="w-100">
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Container >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<SiteContest/>} />
              </Routes>
            </Container>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
