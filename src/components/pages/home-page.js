import React from "react";
import ScooterList from "../scooter-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <ScooterList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
