import React, { Component } from "react";
import ScooterListItem from "../scooters-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";

import { withStoreService } from "../hoc";
import { fetchApidata } from "../../actions";
import { compose } from "../../utils";

import "./scooter-list.css";
import ErrorIndicator from "../error-indicator";

class ScooterList extends Component {
  componentDidMount() {
    this.props.fetchApidata();
  }

  render() {
    const { scooters, loading, error } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="scooter-list row">
        {scooters.map(scooter => {
          return (
            <li key={scooter.id} className="col-sm-12 col-md-6 col-lg-6">
              <ScooterListItem scooter={scooter} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ scooters, loading, error }) => {
  return { scooters, loading, error };
};

const mapDispatchToProps = (dispatch, { datastoreService }) => {
  return {
    fetchApidata: fetchApidata(dispatch, datastoreService)
  };
};

export default compose(
  withStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ScooterList);
