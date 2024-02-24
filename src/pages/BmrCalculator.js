import React from "react";
import {
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchData } from "../utils/fetchData";

function BmrCalculator() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const options = {
    method: "GET",
    url: "https://gym-fit.p.rapidapi.com/calculator/bmr",
    params: {
      gender: "male",
      height: "180",
      weight: "78",
      age: "25",
    },
    headers: {
      "X-RapidAPI-Key": "17ed0d770bmshe142f537b2cb7b9p165f5bjsn6d1c428aff94",
      "X-RapidAPI-Host": "gym-fit.p.rapidapi.com",
    },
  };

  return (
    <Box mt="20px">
      <form
        onSubmit={handleSubmit(async (data) => {
          const response = await fetchData({ ...options, params: data });
          setResult(response);
        })}
        className="bmr-calculator-form-styling"
      >
        <TextField label="Height" {...register("height")} required />
        <TextField label="Weight" {...register("weight")} required />
        <TextField label="Age" {...register("age")} required />
        <RadioGroup
          required
          aria-labelledby="demo-controlled-radio-buttons-group"
          // name="controlled-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio {...register("gender")} />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio {...register("gender")} />}
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
      <p>Your Bmr is: {result} kcal</p>
    </Box>
  );
}

export default BmrCalculator;
