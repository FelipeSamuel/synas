import React, { useState } from 'react';

//STYLE
import { InputWrapper, Autocomplete, ListFloat, Input } from './styles';

export default function DropdownList(props) {
  const [suggestions, setSuggestions] = useState(props.list);
  const [show, setShow] = useState(false);

  const updateSuggestions = async (event) => {
    props.setValue(event.target.value);
    if (props.value.length > 0) {
      const arr = props.list.filter((year) =>
        String(year).includes(event.target.value)
      );
      setSuggestions(arr);
    }
  };

  const handleSelection = (item) => {
    props.setValue(item);
    setSuggestions(props.list);
    setShow(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  const List = (props) => {
    const listItem = props.list.map((item, i) => (
      <div key={i} onClick={() => handleSelection(item)}>
        {item}
      </div>
    ));
    return <ListFloat>{listItem}</ListFloat>;
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={(e) => updateSuggestions(e)}
        onFocus={() => setShow(true)}
        onBlur={() => handleBlur()}
        readOnly={props.readOnly}
      />
      <Autocomplete>{show && <List list={suggestions} />}</Autocomplete>
    </InputWrapper>
  );
}
