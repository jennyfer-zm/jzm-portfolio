import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "../components/sections/hero";
import Portfolio from "../components/sections/portfolio";

const Home = () => {
  const cookieStore = cookies();
  const access = cookieStore.get("portfolio_access")?.value;

  if (access !== "granted") {
    redirect("/unlock");
  }

  return (
    <>
      <Hero />
      <Portfolio />
    </>
  );
};

export default Home;