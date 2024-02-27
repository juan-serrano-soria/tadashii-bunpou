import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import FixGrammar from "js/components/screens/FixGrammar";
import BottomNavigator from "./components/BottomNavigator";

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const selectedTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FixGrammar />,
    },
  ]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <BottomNavigator />
    </ThemeProvider>
  );
};

export default App;
