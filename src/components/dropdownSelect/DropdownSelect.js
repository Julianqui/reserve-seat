import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const DropdownSelect = (props) => {
  const [newValue, setNewValue] = useState(props.defaultValue);

  const newValueHandler = (event) => {
    setNewValue(event.target.value);
    props.getSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: props.minWidth }} size="small">
      <InputLabel>
        {props.title}
      </InputLabel>
      <Select
        value={newValue}
        label={props.label}
        onChange={newValueHandler}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {props.data.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
