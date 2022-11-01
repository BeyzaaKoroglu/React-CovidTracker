import { useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCountry,
  selectedCountry,
} from "../../redux/covid/covidSlice";
import { getCountries, getCountryDetail } from "../../redux/covid/services";
import { Styled } from "./SelectCountry.styled";

const SelectCountry = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.covid.countries);
  const selected = useSelector(selectedCountry);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSelect = (code) => {
    dispatch(setSelectedCountry(code));
    dispatch(getCountryDetail(code));
  };

  return (
    <Styled>
      <ReactFlagsSelect
        selected={selected}
        onSelect={handleSelect}
        countries={countries}
        placeholder="Global"
        searchable
      />
    </Styled>
  );
};

export default SelectCountry;
