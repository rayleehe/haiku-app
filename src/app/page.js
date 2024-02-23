"use client";
import PromptForm from "@/components/PromptForm";
import styles from "./page.module.css";
import { useState } from "react";
import "./globals.css";
import Responses from "@/components/Responses";

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const create = async (prompt) => {
    setIsLoading(true);
    // Get response from ChatGPT
    const response = await fetch("/api/chat-gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    setIsLoading(false);

    const result = await response.json();
    setChoices(result.choices);
    
    await save_response(prompt, result);
  };

  const save_response = async (prompt, result) => {
    // Save response into database
    await fetch('http://127.0.0.1:8090/api/collections/responses/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        response: result['choices'][0]['message']['content'],
      }),
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <p>Get Haiku Feedback</p>
        <PromptForm isLoading={isLoading} onSubmit={create} />

        {choices.map((choice) => {
          console.log(choice);
          return (
            <p className={styles.response} key={choice["index"]}>
              {choice["message"]["content"]}
            </p>
          );
        })}
      </div>
    </main>
  );
}
