import PocketBase from "pocketbase";
import styles from "./PromptForm.module.css";

export const pbClient = new PocketBase('http://127.0.0.1:8090');

export async function getResponses() {
    const records = await pbClient.collection('responses').getList(1, 20, {
        sort: '-created',
    });
    return records;
}

export default async function ResponsesPage() {
    const responses = await getResponses();

    reutrn (
        <div>
            <h1> Responses </h1>
            <div className={styles.grid}>
                {responses?.map((response) => {
                    return <ResponseRecord key={response.id} responseRecord={response}/>;
                })}
            </div>
        </div>
    )
}

function ResponseRecord({ responseRecord }) {
    const { id, prompt, response, created } = response || {};
  
    return (
        <div className={styles.note}>
          <h2>{prompt}</h2>
          <h5>{response}</h5>
          <p>{created}</p>
        </div>
    );
}