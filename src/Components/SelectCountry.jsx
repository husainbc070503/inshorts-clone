import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGlobalContext } from "../Context/InshortsContext";
import { countries } from "../Constants/Countries";

const SelectCountry = () => {
  const { country, setCountry } = useGlobalContext();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "100%", marginTop:"20px" }}>
        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country}
          label="Age"
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((c) => {
            return (
              <MenuItem value={c} key={c}>
                {c}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountry;
