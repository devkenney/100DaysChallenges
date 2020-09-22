import React from 'react';

export default function Daters (props) {
  return (
    <div>
      {props.daters?.map((dater) => {
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