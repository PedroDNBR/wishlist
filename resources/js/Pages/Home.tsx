import { ButtonComponent } from '@/Components/Button';
import { LandingPageFooter } from '@/Components/LandingPage/LandingPageFooter/intex';
import { LandingPageHeader } from '@/Components/LandingPage/LandingPageHeader';
import { LandingPageItemsContainer } from '@/Components/LandingPage/LandingPageItemsContainer';
import { Head, router } from '@inertiajs/react';
import React from "react";

export default function Home() {
  function start() {
    router.get('/wishes')
  }

  return (
    <>
      <Head title="Home"/>
      <LandingPageHeader start={start}/>
      <LandingPageItemsContainer/>
      <LandingPageFooter start={start}/>
    </>
  )
}
