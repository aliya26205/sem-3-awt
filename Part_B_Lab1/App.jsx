
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";

function App() {
  const [country, setCountry] = useState("");

  const capitals = {
    India: "New Delhi",
    France: "Paris",
    Japan: "Tokyo",
    Australia: "Canberra"
  };

  return (
    <div
      style={{
        backgroundColor: "#fff0f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          border: "2px solid #e91e63",
          borderRadius: "15px",
          padding: "30px",
          width: "350px",
          textAlign: "center",
          backgroundColor: "white",
          boxSizing: "border-box"
        }}
      >
        <h1
          style={{
            color: "#c2185b",
            fontSize: "27px",
            margin: "0 0 25px 0",
            lineHeight: "1.3"
          }}
        >
          Country and Capital
        </h1>

        <CountryDropdown
          country={country}
          setCountry={setCountry}
        />

        {country && (
          <h2
            style={{
              color: "#c2185b",
              backgroundColor: "#fce4ec",
              padding: "15px 8px",
              borderRadius: "8px",
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "0"
            }}
          >
            Capital: {capitals[country]}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
