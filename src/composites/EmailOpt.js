import React from 'react'
import Checkbox from 'uxi/Input/Checkbox'
import Wrapper from './FormUIWrapper';

const EmailOpt = props => {
  return (
    <Wrapper  >
      <Checkbox label="subscribe to newsletter" />
    </Wrapper>
  )
}

export default EmailOpt
