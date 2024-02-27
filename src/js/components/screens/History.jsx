import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BottomNavigator from "js/components/BottomNavigator";

const History = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Correction History</Typography>
      </Box>
      <BottomNavigator />
    </Container>
  );
};

export default History;
