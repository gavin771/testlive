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

    const { handleSubmit, submitting, dirty } = this.props
    //const domain = this.props.user ? this.props.user.testRailDomain : '';
    //const username = this.props.user ? this.props.user.testRailUsername : '';
    //const api = this.props.user ? this.props.user.api : '';
    const form = this.props.formValues
    const formDomain = form.testRailForm && form.testRailForm.values ? form.testRailForm.values.domain : '';
    const formApi = form.testRailForm && form.testRailForm.values ? form.testRailForm.values.api : '';
    const formUsername = form.testRailForm && form.testRailForm.values ? form.testRailForm.values.username : '';

    //console.log(this.props)
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
              />
              <ReduxField
                key='username'
                name='username'
                component={FormField}
                type='text'
                label='TestRail Username'
              />
            </SemanticForm.Group>
            <ReduxField
              key='api'
              name='api'
              component={FormField}
              type='text'
              label='TestRail API Key'
            />
            {this.props.error || this.props.submitSucceeded ?
              <FormMessage error={this.props.error} dirty={this.props.dirty} success={this.props.submitSucceeded} testResponse={this.state.testReponse} /> : ''}
          </SemanticForm>
        </Segment>


        <Button.Group attached='bottom'>
          <Button primary onClick={this.testConnection()} disabled={!formDomain || !formApi || !formUsername}>Test Connection</Button>
          <Button color='green' onClick={handleSubmit(this.props.saveTestRailData)} disabled={!dirty || !formDomain || !formApi || !formUsername || submitting}>Save Details</Button>
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
    testRailFormError: state.testRailFormError,
    user: state.user,
    initialValues: {
      domain: state.user?state.user.testRailDomain:'',
      username: state.user?state.user.testRailUsername:'',
      api: state.user?state.user.testRailApi:''
    }
  }
}

export default connect(mapStateToProps, { saveTestRailData })(reduxForm({
  form: 'testRailForm',
  validate,
  enableReinitialize: true
})(TestRailDetails));