/* Sorting Algorithm in Data Structure
 * @Implemented By: Plipus Tel | www.plipustel.com
 * @Created Date: Mei 28, 2023
 * @Lastest Updated: Oct 29 2023
 * Test update
 */
import React, { useState, useEffect} from "react";
import "./App.css";

function App() {
  /* State: Initial Data */
  const initialData = [9, 1, 3, 2, 5, 6, 9, 4, 5, 7];
  const [arrData, setArrData] = useState([...initialData]);

  /* State: Array informations */
  const [arrayInfo, setArrayInfo] = useState({
    arrayLength: '',
    arrayFirstIndex: '',
    arrayLastindex: '',
    arrayFirstItem: '',
    arrayLastItem: '',
  });
  // Create an array of the object's property names and values
  const arrayInfoItems = Object.entries(arrayInfo);

  /* State: read array */
  const [readArray, setReadArray] = useState([])

  /* Function: get array information */
  const getArrayInfo = () => {
    setArrayInfo({
      arrayLength: arrData.length,
      arrayFirstIndex: "0",
      arrayLastindex: arrData.length - 1,
      arrayFirstItem: arrData[0],
      arrayLastItem: arrData[arrData.length - 1]
    })
  };

  /* Read Array */
  const readArrayHandler = () => {
    setReadArray(arrData);
  };

  return (
    <div>
      <h1>One Dimenstion Arrays</h1>
      <span>
        By Plipus Tel{" "}
        <a href="https://www.plipustel.com" target="_blank">
          https://www.plipustel.com
        </a>
      </span>
      <hr></hr>
      <h3>Given Data Array</h3>
      <ul className="numbers">
        {arrData.map((rows, index) => (
          <li className="items" key={index}>
            {rows}
          </li>
        ))}
      </ul>

      <h3>1. Get Array Informations</h3>
      <button onClick={getArrayInfo}>Get Array Info</button>
      <ul>
        {arrayInfoItems.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h3>2. Read Array</h3>
      <button onClick={readArrayHandler}>Read Array</button>
      <ul className="numbers">
        {readArray.map((rows, index) => (
          <li key={index}>{rows}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
