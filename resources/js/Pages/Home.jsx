import { Inertia } from "@inertiajs/inertia";
import React from "react";

export default function Home() {
  function start() {
    Inertia.get('/wishes')
  }
  return (
    <>
      <button onClick={() => start()}>Start</button>
    </>
  )
}
