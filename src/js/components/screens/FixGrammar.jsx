import { useEffect, useState } from "react";
import { StringDiff } from "react-string-diff";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { env } from "/env";
import BottomNavigator from "js/components/BottomNavigator";
import Bar from "js/components/Bar";

const FixGrammar = ({ changeTheme }) => {
  const [text, setText] = useState("");
  const [oldText, setOldText] = useState("");
  const [fixedText, setFixedText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("history") === null) {
      let history = [];
      localStorage.setItem("history", JSON.stringify(history));
    }
  }, []);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async () => {
    setOldText("");
    setFixedText("");
    if (text.trim().length === 0) {
      alert("Input something!");
      setShowFixed(false);
      return;
    }

    const data = {
      inputs: text,
    };

    try {
      const result = await query(data);
      setFixedText(result[0].generated_text);
      setOldText(text);
      setShowFixed(true);

      // update localStorage
      const history = JSON.parse(localStorage.getItem("history"));
      history.push({ text: text, fixedText: result[0].generated_text });
      localStorage.setItem("history", JSON.stringify(history));
    } catch (error) {
      alert("Error, try again");
      setShowFixed(false);
    }
  };

  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/vennify/t5-base-grammar-correction",
      {
        headers: { Authorization: `Bearer ${env.HUGGING_FACE_API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result;
  };

  const handleCopy = () => {
    setOpenSnackbar(true);
    navigator.clipboard.writeText(fixedText);
  };

  return (
    <Box>
      <Bar changeTheme={changeTheme} />
      <Container maxWidth="md" sx={{ mt: 10, mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Snackbar
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            autoHideDuration={2000}
            message="Copied to clipboard"
          />
          <Typography variant="h5">Fix your grammar</Typography>
          <TextField
            margin="normal"
            fullWidth
            multiline
            label="Input a sentence"
            autoFocus
            value={text}
            onChange={onChangeText}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            onClick={onSubmit}
          >
            Fix
          </Button>
          {showFixed ? (
            <>
              <Typography variant="h5" gutterBottom>
                Fixed!
              </Typography>
              <Container sx={{ wordWrap: "break-word" }}>
                <StringDiff oldValue={oldText} newValue={fixedText} />
              </Container>
              <Grid container justifyContent="flex-end">
                <IconButton aria-label="copy" onClick={handleCopy}>
                  <ContentCopyIcon />
                </IconButton>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Container>
      <BottomNavigator />
    </Box>
  );
};

export default FixGrammar;
