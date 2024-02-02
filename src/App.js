import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loginpage from "scenes/loginPage";
import Homepage from "scenes/homePage";
import Profilepage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/Profile/:userId" element={<Profilepage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
