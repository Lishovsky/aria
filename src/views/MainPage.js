import Navigation from '../components/navigation/navigationBar/navigationBar'
import Map from '../components/map/map'
import TopBar from '../components/topbar/topBar'
import AboutMe from '../components/aboutMe/contentBox/aboutMe'
import Contest from '../components/contest/container/container'
import Courses from '../components/courses/container/container'

const MainPage = () => (
    <>
        <Navigation />
        <TopBar />
        <AboutMe />
        <Contest />
        <Courses />
        <Map />
    </>
)

export default MainPage;
