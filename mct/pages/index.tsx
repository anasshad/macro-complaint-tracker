import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

import Result from "../components/Result";
import MCTForm from "../components/MCTForm";
import DateSelector from "../components/DateSelector";
import dayjs from "dayjs";

const App = ({ data }) => {
  const [results, setResults] = useState(data);

  const onChange = async (x) => {
    const data = { ...results };
    let type, macro;
    Object.keys(x).forEach((key) => {
      type = key.split(" ")[0].toLowerCase();
      macro = key.split(" ")[1].toLowerCase();
      data[macro][type] = x[key];
    });
    setResults(data);
    await updateMacros();
  };

  const updateMacros = async () => {
    const res = await fetch("/api/daily", {
      method: "post",
      body: JSON.stringify(results),
    });
  };

  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch("http://localhost:3000/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.add(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch("http://localhost:3000/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  return (
    <div className="container mx-auto">
      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Macro Compliance Tracker</h1>
        </div>
      </div>

      <DateSelector
        currentDate={dayjs(results.date).format("MM/DD/YYYY")}
        previousDay={getDataForPreviousDay}
        nextDay={getDataForNextDay}
      />

      <div className="flex">
        <Result results={results.calories} />
        <Result results={results.carbs} />
        <Result results={results.fat} />
        <Result results={results.protein} />
      </div>
      <div className="flex">
        <MCTForm item="Total" data={data} onChange={onChange} />
        <MCTForm item="Target" data={data} onChange={onChange} />
        <MCTForm item="Variant" data={data} onChange={onChange} />
      </div>
    </div>
  );
};

App.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/daily");
  const json = await res.json();
  return {
    data: json,
  };
};

export default App;
