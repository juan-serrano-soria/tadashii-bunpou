import { useState } from "react";
import { StringDiff } from "react-string-diff";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { env } from "/env";

const App = () => {
  const [text, setText] = useState("");
  const [oldText, setOldText] = useState("");
  const [fixedText, setFixedText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async () => {
    const data = {
      inputs: text,
    };
    setOldText(text);
    const result = await query(data);
    setFixedText(result[0].generated_text);
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

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        <Button fullWidth variant="contained" sx={{ mb: 2 }} onClick={onSubmit}>
          Fix
        </Button>
        <Typography variant="h5">Fixed!</Typography>
        <StringDiff oldValue={oldText} newValue={fixedText} />
      </Box>
    </Container>
  );
};

export default App;
