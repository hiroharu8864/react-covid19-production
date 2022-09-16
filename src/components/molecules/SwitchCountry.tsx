import { FC, React, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useCountryList } from "../../hooks/useCountryList";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320
  }
}));

export const SwitchCountry: FC = memo(() => {
  const classes = useStyles();
  const countries = useCountryList();

  return (
    <>
      <FormControl className={classes.formControl}>
        <NativeSelect>
          <option value="">select country</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
});
