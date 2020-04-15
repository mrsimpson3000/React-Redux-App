import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions/actions";

const Info = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className='text-center text-dark font-weight-bold bg-primary pt-4 pb-4'>
      <h1>Latest SpaceX Launch Data</h1>
      <p className='pt-3'>Mission Name: insert some data here</p>
      <p>Rocket Name: insert some data here</p>
      <p>Flight Number: insert some data here</p>
      <p>Launch Site: insert some data here</p>
      <p>Local Launch Time: insert some data here</p>
      <p>Details will go here</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.reducer.data,
    isFetching: state.reducer.isFetching,
    error: state.reducer.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Info);
