import React, { useEffect, useState } from 'react';

export default function Daters (props) {
  const [daters, updateDaters] = useState([]);
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
      }
    )()
  },[]);
  return (
    <div>
      {daters.map((dater) => {
        return (
          <div key={dater.id}>
            <h3>Name: {dater.name}</h3>
            <img src={dater.img} alt={dater.name}/>
            <h4>Starsign: {dater.starsign} </h4>
            <h4>Age: {dater.age} </h4>
            {dater.ltl
              ? <h5> Loves to laugh and have a good time</h5>
              : <h5>HATES laughing, does NOT like having a good time. Do not attempt to cuddle this skinless meat-man</h5>
            }
          </div>
        )
      })}
    </div>
  )
}