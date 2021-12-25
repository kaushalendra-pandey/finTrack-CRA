import LandingPage from "./components/Landing Page/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
const Routes = [
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }

];

export default Routes;