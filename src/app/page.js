"use client";

import GetToken from "@/utils/GetToken";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession({ required: true, onUnauthenticated() { redirect('/login') } });

  console.log(session);
  
  return (
    <main>
      <h3></h3>
    </main>
  )
}


export const getServerSideProps = async (context) => {
  const session = getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login'
      }
    }
  } else {
    return {
      props: {
        session: session
      }
    }
  }
}