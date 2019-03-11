import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={1} total={10000} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route path="/roller-store/" component={HomePage} />
      </Switch>
    </main>
  );
};

export default App;
