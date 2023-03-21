import { Head, router } from '@inertiajs/react';
import React from "react";

export default function Home() {
  function start() {
    router.get('/wishes')
  }
  return (
    <>
      <Head title="Home"/>
      <button onClick={() => start()}>Start</button>
    </>
  )
}
