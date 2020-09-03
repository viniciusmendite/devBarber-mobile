import React from 'react';

import {InputArea, Input} from './styles';

const SignInput = ({IconSvg, placeholder}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <Input placeholder={placeholder} placeholderTextColor="#268596" />
    </InputArea>
  );
};

export default SignInput;
