import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HistoryIcon from "@mui/icons-material/History";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import Paper from "@mui/material/Paper";

const BottomNavigator = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Fix Grammar" icon={<SpellcheckIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigator;
