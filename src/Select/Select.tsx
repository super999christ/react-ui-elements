import React, { forwardRef, useRef } from 'react';
import ReactSelect, { SelectInstance, Props } from "react-select";

type SizeTypes = "sm" | "md" | "lg"

interface SelectProps extends Props<any> {
  size?: SizeTypes
  errorMessage?: string
}

const Select = forwardRef<null, SelectProps>((props, ref) => {
  const { size, errorMessage: ErrorMessage, ...rest } = props

  return (
    <>
      <ReactSelect ref={ref} {...rest} />
    </>
  )
})

export default Select;
