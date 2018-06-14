import React from 'react'
import { TextField, SelectInput } from 'uxi/Input'
import { Field } from 'react-redux-form'
import { Flex } from 'uxi/Layout'
import Wrapper from './FormUIWrapper';

const ages = [];
let i = 0;
while (i < 99) {
  ages[i] = i;
  i = i + 1;
}

const RebateForm = props => {
  return (
    <Wrapper>
      <Field model="user.favoriteColors">
        <TextField placeholder="Name" />
      </Field>
      <TextField placeholder="LastName" />
      <TextField placeholder="address" />
      <TextField placeholder="City" />
      <TextField placeholder="ZIPCode" />
      <SelectInput label="Age">
        {
          ages.map((x, i) => (
            <Flex value={i}>{i}</Flex>
          ))
        }
      </SelectInput>
      <TextField placeholder="Phone" type="tel" />
      <TextField placeholder="email" type="email" />
    </Wrapper>
  )
}

export default RebateForm
