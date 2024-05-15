import './App.css';
import { useRoutes } from "react-router-dom";
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <h1>React Router Demo</h1>
      {element}
    </>
  );
}

export default App;
