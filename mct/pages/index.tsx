import React from "react";
import fetch from "isomorphic-unfetch";

import Result from "../components/Result";
import MCTForm from "../components/MCTForm";
import DateSelector from "../components/DateSelector";

const App = ({ data }) => {
  const onChange = (x) => {
    console.log(x);
  };

  return (
    <div className="container mx-auto">
      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Macro Compliance Tracker</h1>
        </div>
      </div>

      <DateSelector />

      <div className="flex">
        <Result results={data.calories} />
        <Result results={data.carbs} />
        <Result results={data.fat} />
        <Result results={data.protein} />
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
  console.log(json);
  return {
    data: json,
  };
};

export default App;
