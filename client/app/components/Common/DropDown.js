import React from 'react';
import ProTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const DropDown = props => (
  <div className="field">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    <Dropdown
      placeholder={props.placeholder || props.label}
      fluid
      search={props.search}
      selection
      multiple={props.multiple}
      allowAdditions={props.allowAdditions}
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      onAddItem={props.onAddItem}
      {...props}
    />
  </div>
);

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DropDown;
