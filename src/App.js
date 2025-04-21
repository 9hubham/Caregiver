// import Profile from "./components/profile";
// import Bookings from "./components/bookings";

//import Bookings from "./components/bookings";
//import Payments from "./components/payments";

// import FamilyMemberCard from "./components/familyMemberCard";
import Profile2 from "./components/Profile2";
// // import EditMember from "./components/editMember";
// import ChangePassword from "./components/changePassword";
//import MyCondition from "./components/myCondition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SpecialNeeds from "./components/specialNeeds";
// import ServicesNeed from "./components/servicesNeed";
// import EditPaymentdetails from "./components/editPaymentdetails";
// import TargetPage from "./components/editMember";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
