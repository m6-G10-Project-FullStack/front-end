import { Footer } from "../src/components/Footer";
import { Banner, CarSection, Container, Pagination } from "./style";

import React from "react";
import { Header } from "../src/components/Header";
import CommentInput from "../src/components/CommentInput";
import AsideProfile from "../src/components/AsideProfile";

export default function Home() {
  const user = {
    initials: "KD",
    name: "Kleber Dimas",
    description:
      "Lorem ipsolom johnson dejaren rauver brailen. Mandrake sadrago marimbo aren, doro makuke lele. Dusgarov marakov malakoi, garoto espertinho.",
  };
  const isLoggedIn = true;

  return (
    <>
      <div>
        <AsideProfile user={user} />
        {/* <CommentInput user={user} /> */}
      </div>
    </>
  );
}
