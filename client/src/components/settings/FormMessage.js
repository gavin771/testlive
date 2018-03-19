import React, { Component } from 'react'
import { Message, Transition } from 'semantic-ui-react';

class FormMessage extends Component {

  renderContent ({ error, success, message, testResponse, testStatus }) {
    //console.log(this.props)
    if (testStatus) {
      return (<Transition visible={true} transitionOnMount={true} animation='fade' duration={500}>
        < Message
          error={testStatus !== 200 ? true : false}
          success={testStatus === 200 ? true : false}
          header={testStatus !== 200 ? 'Oops...' : 'Success'}
          content={testStatus !== 200 ? testResponse : ''}
        />
      </Transition>)
    } else {
      return (<Transition visible={true} transitionOnMount={true} animation='fade' duration={500}>
        < Message
          error={error ? true : false}
          success={success ? true : false}
          header={error ? 'Oops...' : 'Success'}
          content={error ? error : message}
        />
      </Transition>)
    }
  }

  // componentWillReceiveProps (nextProps) {

  //   this.props.clearState()
  // }
  

  render () {
    //console.log(this.props)
    return (
      <div className='form-message'>
        {this.renderContent(this.props)}
      </div >
    )
  }
}

export default FormMessage