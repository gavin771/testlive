import React, { Component } from 'react'
import { Segment, Button, Header, Form as SemanticForm } from 'semantic-ui-react';
import { reduxForm, Field as ReduxField } from 'redux-form'
import { connect } from "react-redux";
import FormField from "./FormField";
import FormMessage from './FormMessage';
import { saveTestRailData } from '../../actions'

class TestRailDetails extends Component {

  constructor() {
    super();

    this.state = {
      testReponse: ''
    }
  }

  testConnection () {
    //test test rail connection & set state
  }

  render () {
    //console.log(this.props)

    const { handleSubmit, submitting } = this.props
    const domain = this.props.user ? this.props.user.domain : '';
    const api = this.props.user ? this.props.user.api : '';
    const form = this.props.formValues
    const formDomain = form.testRailForm && form.testRailForm.values ? form.testRailForm.values.domain : '';
    const formApi = form.testRailForm && form.testRailForm.values ? form.testRailForm.values.api : '';

    //console.log(formDomain)
    return (
      <div>
        <Header as='h3' attached='top'>
          <Header.Content>
            TestRail Details
          </Header.Content>
        </Header>

        <Segment raised color="teal" attached>
          <SemanticForm loading={submitting}>
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
            {this.props.error || this.props.submitSucceeded ?
              <FormMessage error={this.props.error} dirty={this.props.dirty} success={this.props.submitSucceeded} testResponse={this.state.testReponse} /> : ''}
          </SemanticForm>
        </Segment>


        <Button.Group attached='bottom'>
          <Button primary onClick={this.testConnection()} disabled={!formDomain || !formApi}>Test Connection</Button>
          <Button color='green' onClick={handleSubmit(this.props.saveTestRailData)} disabled={!formDomain || !formApi || submitting}>Save Details</Button>
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

function mapStateToProps (state) {
  //console.log(state)
  return {
    formValues: state.form,
    testRailFormError: state.testRailFormError
  }
}

export default connect(mapStateToProps, { saveTestRailData })(reduxForm({
  form: 'testRailForm',
  validate,
})(TestRailDetails));