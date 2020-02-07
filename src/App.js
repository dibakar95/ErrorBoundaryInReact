import React from "react";
import "./styles.css";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
//import Child from './Child'
export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroname="batman" />
        <Hero heroname="Superman" />
        <Hero heroname="Jackyl" />
        <Hero heroname="" />
      </ErrorBoundary>
    </div>
  );
}
