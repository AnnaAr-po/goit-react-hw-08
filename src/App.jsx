import { lazy, useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
};



export default App;