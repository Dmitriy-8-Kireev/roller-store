import React, { Component } from "react";
import ScooterListItem from "../scooters-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";

import { withStoreService } from "../hoc";
import { fetchApidata, scooterAddedToCart } from "../../actions";
import { compose } from "../../utils";

import "./scooter-list.css";
import ErrorIndicator from "../error-indicator";

const ScooterList = ({ scooters, onAddedToCart }) => {
  return (
    <ul className="scooter-list row">
      {scooters.map(scooter => {
        return (
          <li key={scooter.id} className="col-sm-12 col-md-6 col-lg-6">
            <ScooterListItem
              scooter={scooter}
              onAddedToCart={() => onAddedToCart(scooter.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
class ScooterListContainer extends Component {
  componentDidMount() {
    this.props.fetchApidata();
  }

  render() {
    const { scooters, loading, error, onAddedToCart } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    if (loading) {
      return <Spinner />;
    }
    return <ScooterList scooters={scooters} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ scooterList: { scooters, loading, error } }) => {
  return { scooters, loading, error };
};

const mapDispatchToProps = (dispatch, { datastoreService }) => {
  return {
    fetchApidata: fetchApidata(datastoreService, dispatch),
    onAddedToCart: id => dispatch(scooterAddedToCart(id))
  };
};

export default compose(
  withStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ScooterListContainer);
