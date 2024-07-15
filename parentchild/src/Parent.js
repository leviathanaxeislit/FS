import React from "react";
import Child from "./Child";
const Parent = () => {
    const data = "Data from Parent to Child";
    return (
        <div>
            <h4>This is Parent component</h4>
            <Child data={data} />
        </div>
    );
};
export default Parent;
