import React from 'react';
import type { Props } from 'react-select';
import Select2 from 'react-select';

const Select = ({ ...props }: Props) => {
  return <Select2 {...props} />;
};

export default Select;
