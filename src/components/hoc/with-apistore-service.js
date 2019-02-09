import React from "react";
import { DatastoreServiceConsumer } from "../bookstore-service-context";

const withStoreService = () => Wrapped => {
  return props => {
    return (
      <DatastoreServiceConsumer>
        {datastoreService => {
          return <Wrapped {...props} datastoreService={datastoreService} />;
        }}
      </DatastoreServiceConsumer>
    );
  };
};

export default withStoreService;
