import React from "react";
import Barchart from "../components/Barchart";
import Linechart from "../components/Linechart";
function Statistics() {
  return <div className="flex flex-row mt-5 "  >
    
    <Barchart />

    <Linechart />
  </div>;
}

export default Statistics;
