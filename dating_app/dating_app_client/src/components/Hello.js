import React, { Component } from 'react';

export default function Daters (props) {
  const getDaters = async () => {
    const response = await fetch('http://localhost:3000/daters');
    const data = await response.json();
    console.log(daters);
  }
  return (
    <div>This is the daters.</div>
  )
}