import { Footer } from "../src/components/Footer";
import { Div } from "../src/components/Footer/style";

import React from "react";
import { Header } from "../src/components/Header";
import CommentInput from "../src/components/CommentInput";
import AsideProfile from "../src/components/AsideProfile";

export default function Home() {
  const user = {
    initials: "LS",
    name: "Lucas Simão",
  };
  const isLoggedIn = true;

  const handleCommentSubmit = (comment: string) => {
    console.log(`Comment submitted: ${comment}`);
  };
  return (
    <>
      <div>
        <AsideProfile user={user} />
        {/* <CommentInput user={user} /> */}
      </div>
    </>
  );
}
