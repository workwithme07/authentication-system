import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./context/privetRoute";
import ProtectedRoute from "./context/protectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
