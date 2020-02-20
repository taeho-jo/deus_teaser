import { useHistory } from "react-router-dom";
let history = useHistory();

export const moveHome = () => {
  history.push("/");
};

export const movePartner = () => {
  history.push("/partner");
};
