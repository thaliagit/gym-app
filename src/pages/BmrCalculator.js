import React from "react";
import {
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function BmrCalculator() {
  return (
    <Box mt="20px">
      <form className="bmr-calculator-form-styling">
        <TextField label="Height" required sx={{ borderColor: "#FF2625" }} />
        <TextField label="Weight" required />
        <TextField label="Age" required />
        <RadioGroup
          required
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  color: "#FF2625",
                  "&.Mui-checked": {
                    color: "#FF2625",
                  },
                }}
              />
            }
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  color: "#FF2625",
                  "&.Mui-checked": {
                    color: "#FF2625",
                  },
                }}
              />
            }
            label="Male"
          />
        </RadioGroup>
        <Button
          type="submit"
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "140px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "46px",
          }}
        >
          Calculate
        </Button>
      </form>
    </Box>
  );
}

export default BmrCalculator;
