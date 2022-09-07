import { FC, memo, Suspense } from "react";
import { Typography } from "@material-ui/core";

import { useGetCovidData } from "../../hooks/useGetCovidData";
import { CovidCards } from "../molecules/CovidCards";
import { CovidChart } from "../molecules/CovidChart";

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
      <CovidCards
        infectedCount={data?.confirmed.value}
        recoveredCount={data?.recovered.value}
        deadCount={data?.deaths.value}
      />
      <CovidChart
        infectedCount={data?.confirmed.value}
        recoveredCount={data?.recovered.value}
        deadCount={data?.deaths.value}
      />
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
    </>
  );
});
