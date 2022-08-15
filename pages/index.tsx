import type { NextPage } from "next";
import Script from "next/script";
import vouchedOnReady from "../public/vouched-onready.js";

const Home: NextPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://static.vouched.id/widget/vouched-2.0.0.js"
        onReady={() => vouchedOnReady()}
      />
      <div id="vouched-element" style={{ height: "100%" }}></div>
    </>
  );
};

export default Home;
