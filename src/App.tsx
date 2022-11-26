import { Routes, Route } from 'react-router-dom';
import { SignUp } from "./pages/authentication/signup/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
