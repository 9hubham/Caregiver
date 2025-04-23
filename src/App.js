import Bookings from "./components/bookings";
// Import your own Payments component, not from MUI
import Payments from "./components/payments"; // This needs to be created if it doesn't exist
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import Profile from "./components/profile";
import Profile2 from "./components/Profile2";
import EditMember from "./components/editMember";
import MyCondition from "./components/myCondition";
import AddPaymentdetails from "./components/addPaymentdetails";
import ChangePassword from "./components/changePassword";
import FamilyMemberCard from "./components/familyMemberCard";
import ServicesNeed from "./components/servicesNeed";
import SpecialNeeds from "./components/specialNeeds";
import EditPaymentdetails from "./components/addPaymentdetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/appointment" element={<Bookings />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/editMember" element={<EditMember />} />
          <Route path="/mycondition" element={<MyCondition />} />
          <Route path="/addPaymentdetails" element={<AddPaymentdetails />} />
          <Route path="/editPaymentdetails" element={<EditPaymentdetails />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/familyMemberCard" element={<FamilyMemberCard />} />
          <Route path="/mycondition" element={<MyCondition />} />
          <Route path="/servicesneed" element={<ServicesNeed />} />
          <Route path="/specialneeds" element={<SpecialNeeds />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
