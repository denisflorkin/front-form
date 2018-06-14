import React from 'react'
import Checkbox from 'uxi/Input/Checkbox'
import Wrapper from './FormUIWrapper';

const Captcha = props => {
  return (
    <Wrapper  >
      <Checkbox label="not a robot" />
    </Wrapper>
  )
}

export default Captcha
