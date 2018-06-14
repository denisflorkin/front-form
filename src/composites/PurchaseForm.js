import React from 'react'
import TextField from 'uxi/Input/TextField'
import Wrapper from './FormUIWrapper';


const PurchaseForm = props => {
  return (
    <Wrapper  >
      <TextField placeholder="Firearm Model Name" />
      <TextField placeholder="Firearm Serial Number" />
      <TextField placeholder="Purchase Date" />
      <TextField placeholder="Store Name" />
    </Wrapper>
  )
}

export default PurchaseForm
