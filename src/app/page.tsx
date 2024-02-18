"use client";
import styles from "./page.module.css";
import {useState} from "react";


export default function Home() {

  const [choices, setChoices] = useState([]);

  return (
    <main className={styles.main}>
      <p>Hello!</p>

      <button onClick={async () => {
          const response = await fetch("/api/chat-gpt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              someData: true,
            }),
          });
          const result = await response.json();
          setChoices(result.choices)
        }}
      >
        Hit API
      </button>
      {choices.map(choice => {
        console.log(choice)
        return (
          <p key={choice['index']}>{choice['message']['content']}</p>
        )
      })}
    </main>
  )
}
