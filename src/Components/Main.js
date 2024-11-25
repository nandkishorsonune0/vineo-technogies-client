import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css'
import Button from './Button';
import { NameContext } from './Context';

function Main(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {name}= useContext(NameContext)
  useEffect(() => {
    axios.get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <table style={{border:"1px solid black"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Marks</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.roll_no}>
              <td>{item.name}</td>
              <td>{item.roll_no}</td>
              <td>{item.marks}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{props.name}</h1>
      <Button name="Next Button"/>
    </>
  );
}

export default Main;
