import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Styled } from "./SelectCountry.styled";

const SelectCountry = () => {
  const [selected, setSelected] = useState("");

  return (
    <Styled>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Global"
        searchable
      />
    </Styled>
  );
};

export default SelectCountry;
