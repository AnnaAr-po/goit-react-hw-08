import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from './redux/auth/selectors';
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import {RestrictedRoute} from "./components/RestrictedRoute/RestrictedRoute";


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;