import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import FixGrammar from "js/components/screens/FixGrammar";
import History from "js/components/screens/History";
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
    {
      path: "/history",
      element: <History />,
    },
  ]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <BrowserRouter></BrowserRouter>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
