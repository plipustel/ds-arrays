/* Sorting Algorithm in Data Structure
 * @Implemented By: Plipus Tel | www.plipustel.com
 * @Created Date: Mei 28, 2023
 * @Lastest Updated: Oct 29 2023
 * Test update
 */
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  /* State: Initial Data */
  const initialData = [9, 1, 3, 2, 5, 6, 9, 4, 5, 7];
  const [arrData, setArrData] = useState([...initialData]);
  const [crudData, setCrudData] = useState([...initialData]);

  /* State: Array informations */
  const [arrayInfo, setArrayInfo] = useState({
    arrayLength: "",
    arrayFirstIndex: "",
    arrayLastindex: "",
    arrayFirstItem: "",
    arrayLastItem: "",
  });
  // Create an array of the object's property names and values
  const arrayInfoItems = Object.entries(arrayInfo);

  /* State: read array */
  const [readArray, setReadArray] = useState([]);

  /* Function: get array information */
  const getArrayInfo = () => {
    setArrayInfo({
      arrayLength: arrData.length,
      arrayFirstIndex: "0",
      arrayLastindex: arrData.length - 1,
      arrayFirstItem: arrData[0],
      arrayLastItem: arrData[arrData.length - 1],
    });
  };

  /* Read Array */
  const readArrayHandler = () => {
    setReadArray(arrData);
  };

  /* Array Push */
  const arrayPush = () => {
    const newDataArray = [...crudData];
    newDataArray.push(8); // push (insert) as much as 1 element in the last of array
    setCrudData(newDataArray);
  };

  /* Array Pop */
  const arrayPop = () => {
    const newDataArray = [...crudData];
    newDataArray.pop(8); // pop (delete) as much as 1 element from the last of array
    setCrudData(newDataArray);
  };

  /* Array Splice */
  const arraySplice = () => {
    const newDataArray = [...crudData];
    newDataArray.splice(3, 2); // splice(startingIndex, length)
    setCrudData(newDataArray);
  };

   /* Array Splice */
   const arraySpliceItem = () => {
    const newDataArray = [...crudData];
    newDataArray.splice(6); // splice(startingIndex, length)
    setCrudData(newDataArray);
  };
  /* Reset Array */
  const resetArray = () => {
    const newDataArray = [...initialData];
    setCrudData(newDataArray);
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
      <button onClick={readArrayHandler}>Read Data Array</button>
      <ul className="numbers">
        {readArray.map((rows, index) => (
          <li key={index}>{rows}</li>
        ))}
      </ul>
      <h3>3. Push (8), Pop(), and Splice()</h3>
      <ul className="numbers">
        {crudData.map((rows, index) => (
          <li key={index}>{rows}</li>
        ))}
      </ul>
      <button onClick={arrayPush} style={{ marginInline: 20 }}>
        Push '8' Item
      </button>
      <button onClick={arrayPop} style={{ marginInline: 20 }}>
        Pop an Item
      </button>
      <button onClick={arraySplice} style={{ marginInline: 20 }}>
        Splice 'i:3', 'i:2'
      </button>

      <button onClick={arraySpliceItem} style={{ marginInline: 20 }}>
        Splice 'i:6'
      </button>

      <button onClick={resetArray} style={{ marginInline: 20 }}>
        Reset
      </button>
    </div>
  );
}

export default App;
