import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritePage from "./pages/Favorites";
import Layout from "./component/layouts/Layout"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />

        <Route path="/new-meetup" element={<NewMeetUpPage />} />

        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
