import { Footer } from "../src/components/Footer";
import { Div } from "../src/components/Footer/style";
import Header from "../src/components/Header";

import React from "react";

export default function Home() {
  const user = {
    initials: "LS",
    name: "Lucas Simão",
  };
  const isLoggedIn = false;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
    </>
  );
}
