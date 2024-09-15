import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Startup from "./pages/Startup";
import Quarter1 from "./pages/Quarter1";
import Quarter2 from "./pages/Quarter2";
import StartupDetails from "./pages/StartupDetails";
import Quarter1Detail from "./pages/Quarter1Detail";
import Quarter2Detail from "./pages/Quarter2Detail";

import ResourcesVideos from "./pages/ResourcesVideos";
import Cashflow from "./pages/Cashflow";
import FinancialStatement from "./pages/FinancialStatement";
import ProtectedRoute from "./pages/ProtectedRoute";
import IncomeStatement from "./pages/admin/UpdateIncomeStatement";
import UsersList from "./pages/admin/UsersList";
import UserDetails from "./pages/admin/UserDetails";
import UpdateUserFinanceStatement from "./pages/admin/UpdateUserFinanceStatement";
import UserIncomeComparison from "./pages/UserIncomeComparison";
import MemberRoles from "./pages/MemberRoles";
import MemberRolesDetails from "./pages/MemberRolesDetails.jsx";

import Dashboard from "./pages/admin/Dashboard";
// import IncomeFromOpportunities from "./pages/admin/IncomeFromOpportunities";
import UserCostComparison from "./pages/UserCostComparison";
// import ExpensesFromOpportunities from "./pages/admin/ExpensesFromOpportunities";
// import AdditionalExpenses from "./pages/admin/AdditionalExpenses";
// import ExtraCostOpportunities from "./pages/admin/ExtraCostOpportunities";
// import ExtraIncomeOpportunities from "./pages/admin/ExtraIncomeOpportunities.jsx";
import Revenue from "./pages/admin/Revenue";
import UpdateQuarter1Info from "./pages/admin/UpdateQuarter1Info";
import UpdateQuarter2Info from "./pages/admin/UpdateQuarter2Info";
import UpdateEmployeeInfo from "./pages/admin/UpdateEmployeeInfo";
import Quarter1EmployeeInfo from "./pages/Quarter1EmployeeInfo";
import Quarter2EmployeeInfo from "./pages/Quarter2EmployeeInfo";
import Quarter3Details from "./pages/QuartersDetail/Quarter3Details";
import Quarter3 from "./pages/Quarters/Quarter3";
import Quarter3EmployeeInfo from "./pages/QuartersEmployeeInfo/Quarter3EmployeeInfo";
import UpdateQuarter3Info from "./pages/admin/UpdateQuarter3Info";
import Quarter4Details from "./pages/QuartersDetail/Quarter4Details";
import Quarter4 from "./pages/Quarters/Quarter4";
import Quarter4EmployeeInfo from "./pages/QuartersEmployeeInfo/Quarter4EmployeeInfo";
import UpdateQuarter4Info from "./pages/admin/UpdateQuarter4Info";
import ResetPassword from "./pages/ResetPassword";
// import AdditionalIncome from "./pages/admin/AdditionalIncome";
import Quarter1Completion from "./pages/Quarter1Completion.jsx";
import Quarter2Completion from "./pages/Quarter2Completion.jsx";
import Quarter3Completion from "./pages/Quarter3Completion.jsx";
import Quarter4Completion from "./pages/Quarter4Completion.jsx";
import Outcomes from "./pages/admin/Outcomes.jsx";
import QuarterOutcomes from "./pages/QuarterOutcomes.jsx";
import Introduction from "./pages/Introduction.jsx";
import SettingScene from "./pages/SettingScene.jsx";
import AboutGame from "./pages/AboutGame.jsx";
import ChooseRole from "./pages/ChooseRole.jsx";

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
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />

      {/* </Route> */}

      <Route element={<ProtectedRoute isAuthenticated={authUser} />}>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/about-game" element={<AboutGame />} />
        <Route path="/setting-the-scene" element={<SettingScene />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/startup/:id" element={<StartupDetails />} />
        <Route path="/roles" element={<MemberRoles />} />
        <Route path="/roles/:id" element={<MemberRolesDetails />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/quarter1" element={<Quarter1 />} />
        <Route path="/quarter1/:id" element={<Quarter1Detail />} />
        <Route path="/quarter1Completion" element={<Quarter1Completion />} />

        <Route path="/quarter2" element={<Quarter2 />} />
        <Route path="/quarter2/:id" element={<Quarter2Detail />} />
        <Route path="/quarter2Completion" element={<Quarter2Completion />} />
        <Route path="/quarter3" element={<Quarter3 />} />
        <Route path="/quarter3/:id" element={<Quarter3Details />} />
        <Route path="/quarter3Completion" element={<Quarter3Completion />} />
        <Route path="/quarter4" element={<Quarter4 />} />
        <Route path="/quarter4/:id" element={<Quarter4Details />} />
        <Route path="/quarter4Completion" element={<Quarter4Completion />} />

        <Route path="/resources/videos" element={<ResourcesVideos />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/quarter1EmpInfo" element={<Quarter1EmployeeInfo />} />
        <Route path="/quarter2EmpInfo" element={<Quarter2EmployeeInfo />} />
        <Route path="/quarter3EmpInfo" element={<Quarter3EmployeeInfo />} />
        <Route path="/quarter4EmpInfo" element={<Quarter4EmployeeInfo />} />
        <Route path="/financialStatement" element={<FinancialStatement />} />
        <Route
          path="/user/incomeComparison"
          element={<UserIncomeComparison />}
        />
        <Route path="/user/costComparison" element={<UserCostComparison />} />
        <Route path="/user/quarterOutcomes" element={<QuarterOutcomes />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/admin/incomeFromOpportunities"
          element={<IncomeFromOpportunities />}
        /> */}
        {/* <Route path="/admin/additionalCost" element={<AdditionalExpenses />} /> */}
        {/* <Route
          path="/admin/extraCostOpportunities"
          element={<ExtraCostOpportunities />}
        /> */}
        <Route path="/admin/revenue" element={<Revenue />} />
        {/* <Route
          path="/admin/expensesFromOpportunities"
          element={<ExpensesFromOpportunities />}
        /> */}
        {/* <Route path="/admin/additionalIncome" element={<AdditionalIncome />} /> */}
        {/* <Route
          path="/admin/extraIncomeOpportunities"
          element={<ExtraIncomeOpportunities />}
        /> */}
        <Route path="/admin/incomeStatement" element={<IncomeStatement />} />
        <Route path="/admin/outcomes" element={<Outcomes />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/user/:id" element={<UserDetails />} />
        <Route path="/admin/employee" element={<UpdateEmployeeInfo />} />
        <Route
          path="/admin/user/finance/:id"
          element={<UpdateUserFinanceStatement />}
        />
        <Route path="/admin/quarter1" element={<UpdateQuarter1Info />} />
        <Route path="/admin/quarter2" element={<UpdateQuarter2Info />} />
        <Route path="/admin/quarter3" element={<UpdateQuarter3Info />} />
        <Route path="/admin/quarter4" element={<UpdateQuarter4Info />} />
      </Route>
    </Routes>
  );
}

export default App;
