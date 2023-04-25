import { Layout } from "@/Base/Layout";
import { ProfileForm } from "@/Components/Forms/User/Profile";
import { SharePublicProfile } from "@/Components/SharePublicProfile";
import { User } from "@/Types/User";
import { Head } from "@inertiajs/react";
import { useState } from "react";

interface ProfileProps {
  errors: Record<string, string>;
  auth: {
    user: User;
  },
  url: string;
}

export default function Profile({ errors, auth: { user }, url }: ProfileProps) {
  return (
    <>
      <Layout user={user}>
        <Head title="Profile"/>
        <ProfileForm user={user} errors={errors} />
        <SharePublicProfile url={url} user={user} />
      </Layout>
    </>
  )
}