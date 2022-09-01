import { FC, memo, Suspense } from "react";
import { Typography } from "@material-ui/core";

import { useGetCovidData } from "../../hooks/useGetCovidData";

const ResultCountsComponent = () => {
  const { data, error } = useGetCovidData();
  console.log(data);

  return (
    <>
      <p>test</p>
    </>
  );
};

export const Home: FC = memo(() => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom noWrap>
        Dashboard of Covid19
      </Typography>
      <Suspense fallback={<p>データ取得中....</p>}>
        <ResultCountsComponent />
      </Suspense>
      <p>test</p>
      <p>test</p>
    </>
  );
});
