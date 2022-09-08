/**
 * from:
 * https://covid19.mathdro.id/api/countries/USA
 */
export type CovidDataCountry = {
  confirmed: {
    value: number;
    detail: string;
  };
  recovered: {
    value: number;
    detail: string;
  };
  deaths: {
    value: number;
    detail: string;
  };
  lastUpdate: string;
};
