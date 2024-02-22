import { useState } from "react";
import { StringDiff } from 'react-string-diff';

import { env } from "/env";

const App =() => {
  const [text, setText] = useState("");
  const [oldText, setOldText] = useState("");
  const [fixedText, setFixedText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onSubmit = async () => {
    const data = {
      "inputs": text,
    }
    setOldText(text);
    const result = await query(data);
    setFixedText(result[0].generated_text);
  }

  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/vennify/t5-base-grammar-correction",
      {
        headers: { Authorization: `Bearer ${env.HUGGING_FACE_API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  return(
    <div>
      <div>Fix your grammar</div>
      
      <input type="text" value={text} onChange={onChangeText}/>
      <button
        onClick={onSubmit}
      >Fix</button>
      <p></p>
      <div>Fixed sentence!</div>
      <div>{fixedText}</div>
      <p></p>
      <div>With diff</div>
      <StringDiff oldValue={oldText} newValue={fixedText} />
    </div>
  );
}

export default App;