import { FC, memo, Suspense } from "react";
import { Typography } from "@material-ui/core";

import { useGetCovidData } from "../../hooks/useGetCovidData";

const ResultCountsComponent = () => {
  const { data } = useGetCovidData();
  console.log(data);

  return (
    <>
      <Typography
        color="primary"
        variant="h6"
        align="center"
        gutterBottom
        noWrap
      >
        {new Date(data?.lastUpdate).toDateString()}
      </Typography>
      <p>test</p>
    </>
  );
};

export const Home: FC = memo(() => {
  return (
    <>
      <Typography
        color="primary"
        variant="h4"
        align="center"
        gutterBottom
        noWrap
      >
        WorldWide Covid-19 Data
      </Typography>
      <Suspense fallback={<p>データ取得中....</p>}>
        <ResultCountsComponent />
      </Suspense>
      <p>test</p>
      <p>test</p>
    </>
  );
});
