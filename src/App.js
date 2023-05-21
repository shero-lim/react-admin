import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/admin";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/" Component={Admin}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
