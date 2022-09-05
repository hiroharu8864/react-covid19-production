import { FC, memo } from "react";
import styled from "styled-components";

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
      <SContainer></SContainer>
    </>
  );
});
