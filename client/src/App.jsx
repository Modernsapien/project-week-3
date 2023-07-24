import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  ProtectedRoute,
  Dashboard,
  Calender,
  Todo,
  Pomodoro,
} from "./pages";
import { AuthProvider } from "./contexts";


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
