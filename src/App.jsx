import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <>
      <div className="container py-2">
        <h1 className="header">Weather Forecast</h1>
        <h3 className="header mb-0">Know Before You Go !</h3>
        <SearchInput />
      </div>
    </>
  );
}

export default App;
