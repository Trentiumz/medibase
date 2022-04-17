import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Profile from "./profile.js";
import Search from "./search.js";
import Homepage from "./home.js";
import Medication from './medication';
import PageNotFound from './404';
import { check } from './tools';
import InitialSearch from './initial-search';


const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(check, 1000);

root.render(
  <>
  {/*<Navbar/>*/}
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />}>
      </Route>
      <Route exact path="/profile" element={<Profile />}></Route>
      <Route exact path="/search" element={<Search />}></Route>
      <Route exact path="/info">
        <Route exact path=":din" element={<InitialSearch />}></Route>
      </Route>
      <Route exact path="/medication" element={<Medication />} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </Router>
  </>
)
