import { router } from '@inertiajs/react';
import React from "react";

export default function Home() {
  function start() {
    router.get('/wishes')
  }
  return (
    <>
      <button onClick={() => start()}>Start</button>
    </>
  )
}
