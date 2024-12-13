import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);

  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back! {counter}</h1>
      <Button
        text={"Continue"}
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      />
    </div>
  );
}

export default App;
