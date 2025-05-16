import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import all page screens
import Login2nd from "./auth/Login2nd";
import LoginTrial from "./auth/LoginTrial";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import WorkoutGallery from "./pages/WorkoutGallery";
import MyPlan from "./pages/MyPlan";
import Profile from "./pages/ProfilePage";
import BrowseExercise from "./pages/BrowseExercise";

//tests page
import HomeDummy from "./pages/DummyHome";
import PlanDummy from "./pages/DummyPlan";
import DummyScrollPage from "./pages/DummyScrollPage";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* default page  */}\
          <Route path="/" element={<Navigate to="/login2nd" replace />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logintrial" element={<LoginTrial />}></Route>
          <Route path="/login2nd" element={<Login2nd />}></Route>
          <Route path="/workoutgallery" element={<WorkoutGallery />}></Route>
          <Route path="/dummyhome" element={<HomeDummy />} />
          <Route path="/dummyplan" element={<PlanDummy />} />
          <Route path="/dummyscrollpage" element={<DummyScrollPage />} />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browseexercise" element={<BrowseExercise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
