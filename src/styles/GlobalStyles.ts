import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  /* ---------- COLORS ---------- */

  // Primary colors
  --brand-1: #4529E6;
  --brand-2: #5126EA;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD;

  // Grey scale
  --gray-0: #0B0D0D;
  --gray-1: #212529;
  --gray-2: #495057;
  --gray-3: #868E96;
  --gray-4: #ADB5BD;
  --gray-5: #CED4DA;
  --gray-6: #DEE2E6;
  --gray-7: #E9ECEF;
  --gray-8: #F1F3F5;
  --gray-9: #F8F9FA;
  --gray-10: #FDFDFD;
  --white-fixed: #FFFFFF;

  // Feedback colors
  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;
  --success-1: #18794E;
  --success-2: #CCEBD7;
  --success-3: #DDF3E4;

  // Random profile colors
  --random-1: #E34D8C;
  --random-2: #C04277;
  --random-3: #7D2A4D;
  --random-4: #7000FF;
  --random-5: #6200E3;
  --random-6: #36007D;
  --random-7: #349974;
  --random-8: #2A7D5F;
  --random-9: #153D2E;
  --random-10: #6100FF;
  --random-11: #5700E3;
  --random-12: #30007D;

  /* ---------- TYPOGRAPHY ---------- */

  // Family
  --font-family: "Lexend", sans-serif;

  // Titles
  --heading-1: 44px;
  --heading-2: 36px;
  --heading-3: 32px;
  --heading-4: 28px;
  --heading-5: 24px;

  // Texts
  --body-1: 16px;
  --body-2: 14px;

  // Weight
  --weight-1: 700;
  --weight-2: 600;
  --weight-3: 500;
  --weight-4: 400;
}

* {
  box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, b, u, i, ol, ul, li, fieldset, form, label, article, aside, footer, header, menu, nav, summary, input, textarea, select {
  background:transparent;
  border:0;
  font-size:100%;
  margin:0;
  outline:0;
  padding:0;
  vertical-align:baseline;
}
article, aside, footer, header, nav, section {
  display:block;
}
body {
  line-height:1;
  font-family: var(--font-family);
}
body.no-scroll {
  overflow: hidden;
}
input, select {
  vertical-align:middle;
}
ol, ul {
  list-style:none;
}
`;
