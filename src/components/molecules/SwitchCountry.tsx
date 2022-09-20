import { FC, React, memo, useState } from "react";
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
 * onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
 *           setSelectedCountry(e.target.value)
 * 等でuseState経由の状態管理だと、子から親への情報伝搬が必要になる。
 */
export const SwitchCountry: FC = memo(() => {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry);
  const classes = useStyles();
  const countries = useCountryList();
  // const countries: Country[] = useRecoilState(countriesListState);
  console.log(countries);

  return (
    <>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCountry(e.target.value)
          }
        >
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
