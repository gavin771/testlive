import React, { Component } from 'react'
import { Segment, Button, Header, Form as SemanticForm } from 'semantic-ui-react';
import { reduxForm, Field as ReduxField } from 'redux-form'
import { connect } from "react-redux";
import FormField from "./FormField";
import { saveTestRailData } from '../../actions'

class TestRailDetails extends Component {
  render () {
    const domain = this.props.user ? this.props.user.domain : '';
    const api = this.props.user ? this.props.user.api : '';

    return (
      <div>
        <Header as='h3' attached='top'>
          <Header.Content>
            TestRail Details
          </Header.Content>
        </Header>

        <Segment raised color="teal" attached>
          <SemanticForm>
            <SemanticForm.Group widths={2}>
              <ReduxField
                key='domain'
                name='domain'
                component={FormField}
                type='text'
                label='TestRail Domain'
                value={domain}
              />
              <ReduxField
                key='api'
                name='api'
                component={FormField}
                type='text'
                label='TestRail API Key'
                value={api}
              />
            </SemanticForm.Group>
          </SemanticForm>
        </Segment>

        <Button.Group attached='bottom'>
          <Button primary>Test Connection</Button>
          <Button color='green' onClick={this.props.handleSubmit(this.props.saveTestRailData)}>Save Details</Button>
        </Button.Group>
      </div>
    )
  }
}

function validate (values) {
  const errors = {};

  if (!values.api) {
    errors.api = `You must enter an API key`
  }

  if (!values.domain) {
    errors.domain = `You must enter a valid domain`
  }

  return errors
}

export default connect(null, { saveTestRailData })(reduxForm({
  form: 'testRailForm',
  validate,
})(TestRailDetails));