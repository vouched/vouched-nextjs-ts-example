import type { NextPage } from "next";
import Script from "next/script";
import vouchedOnLoad from "../public/vouched-onload.js";

const Home: NextPage = () => {
  return (
    <>
      <Script
        src="https://static.vouched.id/widget/vouched-2.0.0.js"
        onLoad={() => vouchedOnLoad()}
      />
      <div id="vouched-element" style={{ height: "100%" }}></div>
    </>
  );
};

export default Home;
