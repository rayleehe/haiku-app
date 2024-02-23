import { useState } from "react";
import styles from "./PromptForm.module.css";
import {useRouter} from "next/navigation";

export default function PromptForm({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Reset prompt
        onSubmit(prompt);
        setPrompt("");
      }}
    >
      <label>Enter your Haiku</label>
      <input
        className={styles.input}
        type="text"
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <input className={styles.submitButton} type="submit" disabled={isLoading} />
    </form>
  );
}
