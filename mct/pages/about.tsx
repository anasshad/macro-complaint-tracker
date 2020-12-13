import React from "react";
import Head from "next/head";

const About: React.FC = () => (
  <div>
    <Head>
      <title>About</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="container mx-auto text-center">
      <h1 className="text-6xl m-12">Macro Compliance Tracker</h1>
      <p className="text-xl">
        This app will help ensure your macros are within a selected range.
      </p>
    </div>
  </div>
);

export default About;
