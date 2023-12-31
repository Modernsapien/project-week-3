import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  ProtectedRoute,
  Dashboard,
  Calendar,
  Todo,
  Pomodoro,
  Signup,
} from "./pages";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
