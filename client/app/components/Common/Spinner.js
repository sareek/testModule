import React from 'react';
import Loader from 'assets/img/loader.svg';

const Spinner = () => (
  <div className="spinner">
    <img src={Loader} alt="loader" />
  </div>
);

export default Spinner;
