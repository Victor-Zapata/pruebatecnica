import "./App.css";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "2rem",
      }}
    >
      <div>
        <Link to="peliculas"><h2>Peliculas</h2></Link>
      </div>
      <div>
        <Link to="series"><h2>Series</h2></Link>
      </div>
    </div>
  );
}

export default App;
