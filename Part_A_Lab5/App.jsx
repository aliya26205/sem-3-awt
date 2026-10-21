
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography
} from "@mui/material";

function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "#c2185b" }}>
        Toggle Card
      </h2>

      <Button
        variant="contained"
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? "Hide Card" : "Show Card"}
      </Button>

      {showCard && (
        <Card
          style={{
            width: "220px",
            height: "220px",
            margin: "25px auto",
            backgroundColor: "#fce4ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "#c2185b" }}
            >
              Welcome!
            </Typography>

            <Typography>
              This is a Material UI Card.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default App;
