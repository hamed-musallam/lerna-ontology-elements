import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "ontology-elements/dist/index.js";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ontology-autocomplete></ontology-autocomplete>
        <ontology-annotation annotation="Macrobrachium nipponense	NCBITAXON	http://purl.obolibrary.org/obo/NCBITaxon_159736"></ontology-annotation>
      </div>
    </>
  );
}

export default App;
