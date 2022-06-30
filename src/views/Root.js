import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import AboutMePage from './AboutMePage';
import CoursesPage from './CoursesPage';
import ServicesPage from './ServicesPage';
// import ShopPage from './ShopPage';
import ContactPage from './ContactPage';
import Footer from '../components/footer/container/footerContainer'
import ContactDataContainer from "../components/contactData/container/container";
import SingleServicesPage from "./SingleServicePage";
import SingleCoursePage from "./SingleCoursePage";
import CoursesList from "./CoursesList";
import ServicesList from "./ServicesList";

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/o-mnie' element={<AboutMePage />} />
      <Route path='/szkolenia' element={<CoursesPage />} />
      <Route path='/atelier-urody' element={<ServicesPage />} />
      {/* <Route path='/aroma-atelier' element={<ShopPage />} /> */}
      <Route path='/kontakt' element={<ContactPage />} />

      <Route path='/atelier-urody/lista' element={<ServicesList />} />
      <Route path='/szkolenia/lista' element={<CoursesList />} />

      <Route path='/atelier-urody/usluga' element={<SingleServicesPage />} />
      <Route path='/szkolenia/szkolenie' element={<SingleCoursePage />} />

    </Routes>
    <ContactDataContainer />
    <Footer />
  </Router>
)

export default Root;
