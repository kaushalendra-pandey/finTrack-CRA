import routes from './Routes'
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRoutes = () => {
  return useRoutes(routes);
};
function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>

  )
}

export default App
