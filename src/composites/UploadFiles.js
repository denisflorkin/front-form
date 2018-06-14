import React from 'react'
import FileInput from 'uxi/Input/FileInput'
import Wrapper from './FormUIWrapper';

const RebateForm = props => {
  return (
    <Wrapper  >
      <h1>Upload proof dude</h1>
      <FileInput />
    </Wrapper>
  )
}

export default RebateForm
