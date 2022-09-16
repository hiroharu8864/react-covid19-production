import { atom } from "recoil";
import { Country } from "../components/type/Country";

export const contriesListState = atom<Country[]>({
  key: "contriesList",
  default: [
    { name: "Japan" },
    { name: "Argentina" },
    { name: "Australia" },
    { name: "Brazil" },
    { name: "Canada" },
    { name: "France" },
    { name: "Germany" },
    { name: "India" },
    { name: "Italy" }
  ]
});
