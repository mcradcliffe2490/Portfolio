import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CustomCursor } from "@yhattav/react-component-cursor";
import { settings } from "./portfolio";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: import.meta.env.MODE === "test",
      });
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div style={useCursor ? { cursor: "none" } : undefined}>
          {useCursor && (
            <CustomCursor smoothness={1.5}>
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  border: `2px solid ${themes[theme].secondaryText}`,
                  borderRadius: "50%",
                  transition: "transform 75ms ease",
                  pointerEvents: "none",
                }}
              />
            </CustomCursor>
          )}
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
