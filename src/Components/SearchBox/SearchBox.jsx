import { Input, SearchButton, Wrapper } from "Components/SearchBox/SearchBox.styled";
import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchBox = ({sendSearchName}) => {
  const [searchName, setSearchName] = useState('');

  const onChange = e => {
    setSearchName(e.target.value);
  };

    const send = () => {
        sendSearchName(searchName);
  };

  return (
    <Wrapper>
      <Input type="text" onChange={e => onChange(e)} />
      <SearchButton type="button" onClick={send}>
        🔎
      </SearchButton>
    </Wrapper>
  );
}; 

SearchBox.propTypes = {
  sendSearchName: PropTypes.func.isRequired,
}