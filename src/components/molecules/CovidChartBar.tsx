import { FC, memo } from "react";

type Props = {
  infectedCount: number;
  recoveredCount: number;
  deadCount: number;
};

export const CovidCharBar: FC<Props> = memo((Props) => {
  const { infectedCount, recoveredCount, deadCount } = Props;

  return <></>;
});
