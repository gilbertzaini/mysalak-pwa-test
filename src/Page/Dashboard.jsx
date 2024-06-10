import React from "react";
import Navbar from "../Components/Navbar";
import { useNavbar, useStore } from "../state";
import Header from "../Components/Header";
import Weather from "../Components/Weather";

const Dashboard = () => {
  const counter = useStore();
  const page = useNavbar();

  return (
    <div>
      <Header />
      <Weather />
      {/* <p>Page {page.page}</p>
      <button onClick={counter.decrease}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increase}>+</button> */}

      <Navbar />
    </div>
  );
};

export default Dashboard;
