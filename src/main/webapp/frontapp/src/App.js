import { Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./componerts/Header";
import Home from "./pages/post/Home";
import SaveForm from "./pages/post/SaveForm";
import Detail from "./pages/post/Detail";
import LoginForm from "./pages/user/LoginForm";
import JoinForm from "./pages/user/JoinForm";
import UpdateForm from "./pages/post/UpdateForm";

function App() {
  return (
    <div>
      <Header />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saveForm" element={<SaveForm />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/joinForm" element={<JoinForm />} />
        <Route path="/updateForm/:id" element={<UpdateForm />} />
      </Routes>
      </Container>
    </div>
  );
}
export default App;