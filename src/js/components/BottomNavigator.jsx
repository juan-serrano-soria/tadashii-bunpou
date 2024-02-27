import { useLocation, Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HistoryIcon from "@mui/icons-material/History";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import Paper from "@mui/material/Paper";

const BottomNavigator = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={useLocation().pathname}>
        <BottomNavigationAction
          component={Link}
          to="/"
          value="/"
          label="Fix Grammar"
          icon={<SpellcheckIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/history"
          value="/history"
          label="History"
          icon={<HistoryIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigator;
