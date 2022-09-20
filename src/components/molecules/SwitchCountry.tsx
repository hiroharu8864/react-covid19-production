import { FC, React, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";
import { useRecoilState } from "recoil";

import { useCountryList } from "../../hooks/useCountryList";
import { Country } from "../type/Country";
import { countriesListState } from "../../store/countriesListState";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320
  }
}));

/**
 * onChangeイベントでカスタムフックを呼び出す
 */
export const SwitchCountry: FC = memo(() => {
  const classes = useStyles();
  const countries = useCountryList();
  // const countries: Country[] = useRecoilState(countriesListState);
  console.log(countries);

  return (
    <>
      <FormControl className={classes.formControl}>
        <NativeSelect>
          <option value="">select country</option>
          {countries.map((country, i: number) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
});
