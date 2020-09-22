import React, { useState, useEffect } from 'react';
import Daters from './components/Daters.js';

export default function App() {
  return (
    <div>
      <div className="parent">
        <header><h1>SINGLE AND READY TO MINGLE HELL YEAH</h1></header>
        <div className="main-body">
          <aside><Daters /></aside>
          <main></main>
          <aside><Daters /></aside>
        </div>
        <footer><h3>This is a footer.</h3></footer>
      </div>
    </div>
  )
}