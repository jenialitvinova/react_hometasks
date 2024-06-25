import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MenuPage from "./Pages/MenuPage/MenuPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { useAppDispatch } from "./hooks/globalhooks";
import { actions as authActions } from "./store/slices/auth.slice";
import { getCartFromFirestore, setCart } from "./store/slices/cart.slice";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import OrderPage from "./Pages/OrderPage/OrderPage";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(authActions.isLogged(true));
        const cart = await getCartFromFirestore(user.uid);
        dispatch(setCart(cart));
      } else {
        dispatch(authActions.isLogged(false));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="login" element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="order" element={<PrivateRoute />}>
            <Route index element={<OrderPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
