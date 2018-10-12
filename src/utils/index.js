import numeral from "numeral";

export const setCurrency = price => {
  return numeral(price).format(0.0);
};
