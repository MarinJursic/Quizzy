import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import { Provider } from "react-redux";
import store from "./store";

import LoadingPage from "./pages/Loading/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Header = lazy(() => import("./components/Header/Header"));
const QuizzyPlus = lazy(() => import("./pages/QuizzyPlus/QuizzyPlus"));
const Purchase = lazy(() => import("./pages/Purchase/Purchase"));
const ThanksForPurchase = lazy(() =>
  import("./pages/Purchase/ThanksForPurchase/ThanksForPurchase")
);
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Study = lazy(() => import("./pages/Study/Study"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quizzyplus" element={<QuizzyPlus />} />
            <Route path="/quizzyplus/purchase" element={<Purchase />} />
            <Route
              path="/quizzyplus/purchase/thanks"
              element={<ThanksForPurchase />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/study" element={<Study />} />
            <Route exact path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
