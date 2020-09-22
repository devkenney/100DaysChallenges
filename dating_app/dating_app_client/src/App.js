import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Daters from './components/Daters.js';

export default function App() {
  const [daters, updateDaters] = useState({});
  const [formInputs, updateFormInputs] = useState({
    name: '',
    starsign: '',
    image: '',
    age: 0,
    ltl: false
  })
  const getDaters = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      updateDaters(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    (
      async function () {
        await getDaters();
        console.log(daters);
      }
    )()
  },[]);

  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value });
    updateFormInputs(updatedFormInputs);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/users',
        formInputs
      );
      const createdDater = await response.data;
      await updateFormInputs({
        name: '',
        starsign: '',
        image: '',
        age: 0,
        ltl: false
      })
      await updateDaters([createdDater, ...daters])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="parent">
        <header><h1>SINGLE AND READY TO MINGLE HELL YEAH</h1></header>
        <div className="main-body">
          <aside><Daters daters={daters.list_one} /></aside>
          <main></main>
          <aside><Daters daters={daters.list_two} /></aside>
        </div>
        <footer>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formInputs.name}
            />
            <label htmlFor="starsign">Star Sign</label>
            <input
              type="text"
              id="starsign"
              onChange={handleChange}
              value={formInputs.starsign}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              onChange={handleChange}
              value={formInputs.age}
            />
            <label htmlFor="img">Image</label>
            <input
              type="text"
              id="img"
              onChange={handleChange}
              value={formInputs.image}
            />
            <label htmlFor="ltl">Likes to Laugh</label>
            <input
              type="checkbox"
              id="ltl"
              onChange={handleChange}
              value={formInputs.ltl}
            />
            <input type="submit" value="submit" />
          </form>
        </footer>
      </div>
    </div>
  )
}