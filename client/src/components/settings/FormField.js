import React from 'react'
import { Input, Form, Header } from 'semantic-ui-react';

const FormField = ({ input, label, meta: { error, touched } }) => {

  return (
    <Form.Field>
      <Header as='h4' content={label} />
      <Input {...input} error={error && touched} />
    </Form.Field>
  )
}

export default FormField