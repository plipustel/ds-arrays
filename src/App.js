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
  const initialData = [9, 1, 8, 2, 5, 6, 9, 4, 5, 7];
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

  /* Insert an item */
  const arrayInsertAnItem = () => {
    const newDataArray = [...crudData];
    // splice(startingIndex, length, replacedWith) --> remove element index 1 with length 1, then replace with 12 value
    newDataArray.splice(1, 0, 18);
    setCrudData(newDataArray);
  };


  /* Insert some items */
  const arrayInsertSomeItems = () => {
    const newDataArray = [...crudData];
    // splice(startingIndex, length, replacedWith) --> remove element index 3 with length 2, then replace with 12 value
    newDataArray.splice(1, 0, 12, 13, 30);
    setCrudData(newDataArray);
  };


  /* Array Pop */
  const arrayPop = () => {
    const newDataArray = [...crudData];
    newDataArray.pop(); // pop (delete) as much as 1 element from the last of array
    setCrudData(newDataArray);
  };

   /* Remove an item */
   const arrayRemoveAnItem = () => {
    const newDataArray = [...crudData];
    // splice(startingIndex, length, replacedWith) --> remove element index 1 with length 1, then replace with 12 value
    newDataArray.splice(1, 1);
    setCrudData(newDataArray);
  };


   /* Remove an item */
   const arrayRemoveSomeItems = () => {
    const newDataArray = [...crudData];
    // splice(startingIndex, length, replacedWith) --> remove element index 1 with length 1, then replace with 12 value
    newDataArray.splice(1, 3);
    setCrudData(newDataArray);
  };
  /* Array Splice */
  const arraySpliceItem = () => {
    const newDataArray = [...crudData];
    newDataArray.splice(6); // splice(startingIndex, length) --> remove an element with index 6
    setCrudData(newDataArray);
  };

  /* Array Splice */
  const arraySplice = () => {
    const newDataArray = [...crudData];
    newDataArray.splice(3, 2); // splice(startingIndex, length) --> remove elemenents with index 3 and 2
    setCrudData(newDataArray);
  };



  const arraySpliceUpdateSecondElement = () => {
    const newDataArray = [...crudData];
    // splice(startingIndex, length, replacedWith) --> remove element index 1 with length 1, then replace with 12 value
    newDataArray.splice(1, 1, 18);
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {/* Left section */}
        <div style={{marginRight:20,}}> 
        
          <div>
            <button onClick={arrayPush} style={{ marginInline: 20 }}>
              Push item '8'
            </button>
            <text>Insert in the last of array <b>arr.push(8)</b></text>
          </div>
          <div>
            <button onClick={arrayInsertAnItem} style={{ marginInline: 20 }}>
              Insert item '18'
            </button>
            <text>Insert new item in index 1 <b>arr.splice(1, 0, 18)</b></text>
          </div>
          <div>
            <button onClick={arrayInsertSomeItems} style={{ marginInline: 20 }}>
              Insert items '12', '13', '30'
            </button>
            <text>Insert new item in index 1 <b>arr.splice(1, 0, 12, 13, 30)</b></text>
          </div>
          
        </div>

        {/* Right section */}
        <div>
          <div>
            <button onClick={arrayPop} style={{ marginInline: 20 }}>
             Pop an item
            </button>
            <text>Remove an item from the last index <b>arr.pop()</b></text>
          </div>
          <div>
            <button onClick={arrayRemoveAnItem} style={{ marginInline: 20 }}>
              Remove item '1'
            </button>
            <text>Remove new item in index 1 <b>arr.splice(1, 1)</b></text>
          </div>
          <div>
            <button onClick={arrayRemoveSomeItems} style={{ marginInline: 20 }}>
              Remove some items
            </button>
            <text>Remove three items starting from 1 <b>arr.splice(1, 3)</b></text>
          </div>
          <div>
            <button onClick={resetArray} style={{ marginInline: 20 }}>
             Reset Array
            </button>
          </div>
          
        </div>
      </div>
    </div>  
  );
}

export default App;
