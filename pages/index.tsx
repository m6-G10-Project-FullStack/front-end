import { Footer } from "../src/components/Footer";
import { Div } from "../src/components/Footer/style";

import React from "react";
import { Header } from "../src/components/Header";

export default function Home() {
  const user = {
    initials: "LS",
    name: "Lucas Simão",
  };
  const isLoggedIn = true;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
    </>
  );
}
