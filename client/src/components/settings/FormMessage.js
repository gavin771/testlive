import React, { Component } from 'react'
import { Message, Transition } from 'semantic-ui-react';

class FormMessage extends Component {

  renderContent ({ error, success, message }) {

    return (
      <Transition visible={true} transitionOnMount={true} animation='fade' duration={500}>
        < Message
          error={error ? true : false}
          success={success ? true : false}
          header={error ? 'Oops' : 'Success'}
          content={error ? error : message}
        />
      </Transition>
    )
    // if (this.props.error && this.props.dirty && !this.props.testReponse) {
    //   return
    //   <Message
    //     error
    //     header='Oops...'
    //     content={this.props.error}
    //   />
    // } else if (this.props.success) {
    //   return <p>Render success(test or saved)</p>
    // }
  }
  render () {
    console.log(this.props)
    return (
      <div>
        {this.renderContent(this.props)}
      </div >
    )
  }


  //   this.props.submitSucceeded ? (
  //     <Transition mountOnShow={false} visible={true} animation='scale' duration={500}>
  //       <Message
  //         success
  //         header='Saved'
  //       /></Transition>) : ''
  // }

}

export default FormMessage