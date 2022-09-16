import { FC, memo } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { CovidChartBar } from "./CovidChartBar";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const CovidChart: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;

  return (
    <>
      <SContainer>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6}>
            <CovidChartBar
              infectedCount={infectedCount}
              recoveredCount={recoveredCount}
              deadCount={deadCount}
            />
          </Grid>
        </Grid>
      </SContainer>
    </>
  );
});
