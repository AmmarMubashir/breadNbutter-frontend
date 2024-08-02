import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Startup from "./pages/Startup";
import Quarter1 from "./pages/Quarter1";
import Quarter2 from "./pages/Quarter2";
import Quarter4 from "./pages/Quarter4";
import StartupDetails from "./pages/StartupDetails";
import Quarter1Detail from "./pages/Quarter1Detail";
import Quarter2Detail from "./pages/Quarter2Detail";
import ResourcesPresentation from "./pages/ResourcesPresentation";
import ResourcesPdf from "./pages/ResourcesPdf";
import ResourcesVideos from "./pages/ResourcesVideos";
import Cashflow from "./pages/Cashflow";
import FinancialStatement from "./pages/FinancialStatement";
import ProtectedRoute from "./pages/ProtectedRoute";
import IncomeStatement from "./pages/admin/UpdateIncomeStatement";
import UsersList from "./pages/admin/UsersList";
import UserDetails from "./pages/admin/UserDetails";
import UpdateUserFinanceStatement from "./pages/admin/UpdateUserFinanceStatement";
import UserIncomeComparison from "./pages/UserIncomeComparison";
import UserCostComparison from "./pages/UserCostComparison";

import Dashboard from "./pages/admin/Dashboard";
import Revenue from "./pages/admin/Revenue";
import UpdateQuarter1Info from "./pages/admin/UpdateQuarter1Info";
import UpdateQuarter2Info from "./pages/admin/UpdateQuarter2Info";
import UpdateEmployeeInfo from "./pages/admin/UpdateEmployeeInfo";
import Quarter1EmployeeInfo from "./pages/Quarter1EmployeeInfo";
import Quarter2EmployeeInfo from "./pages/Quarter2EmployeeInfo";

function App() {
  // const isAuthenticated = !!localStorage.getItem("breadToken");
  const { authUser } = useAuthContext();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   let User = JSON.parse(localStorage.getItem("breadUser"));
  //   if (User) {
  //     if (User.role === "admin") {
  //       navigate("/admin");
  //     }
  //   }
  // }, []);

  return (
    <Routes>
      {/* <Route element={<ProtectedRoute />}> */}
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* </Route> */}

      <Route element={<ProtectedRoute isAuthenticated={authUser} />}>
        <Route path="/startup" element={<Startup />} />
        <Route path="/startup/:id" element={<StartupDetails />} />
        <Route path="/quarter1" element={<Quarter1 />} />
        <Route path="/quarter1/:id" element={<Quarter1Detail />} />
        <Route path="/quarter2" element={<Quarter2 />} />
        <Route path="/quarter2/:id" element={<Quarter2Detail />} />
        <Route
          path="/resources/presentation"
          element={<ResourcesPresentation />}
        />
        <Route path="/resources/pdf" element={<ResourcesPdf />} />
        <Route path="/resources/videos" element={<ResourcesVideos />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/quarter4" element={<Quarter4 />} />
        <Route path="/quarter1EmpInfo" element={<Quarter1EmployeeInfo />} />
        <Route path="/quarter2EmpInfo" element={<Quarter2EmployeeInfo />} />
        <Route path="/financialStatement" element={<FinancialStatement />} />
        <Route
          path="/user/incomeComparison"
          element={<UserIncomeComparison />}
        />
        <Route path="/user/costComparison" element={<UserCostComparison />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/revenue" element={<Revenue />} />
        <Route path="/admin/incomeStatement" element={<IncomeStatement />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/user/:id" element={<UserDetails />} />
        <Route path="/admin/employee" element={<UpdateEmployeeInfo />} />
        <Route
          path="/admin/user/finance/:id"
          element={<UpdateUserFinanceStatement />}
        />
        <Route path="/admin/quarter1" element={<UpdateQuarter1Info />} />
        <Route path="/admin/quarter2" element={<UpdateQuarter2Info />} />
      </Route>
    </Routes>
  );
}

export default App;
