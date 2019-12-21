import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap'
// import './style.css'

class HelpModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  componentDidMount() {

  }

  toggle = () => {

    this.setState({ modal: !this.state.modal })
    // if (this.props.onNextClick) this.props.onNextClick()
    // if (this.props.onCancelClick) this.props.onCancelClick()
  }

  // onNextClick(){
  //
  // }
  //
  // onCancelClick() {
  //
  // }

  render() {
    return(
      <div id="fourteenFont">
        <Button color="warning" onClick={this.toggle} id="fourteenFont">{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody id="fourteenFont">
          {this.props.body}
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button color="warning" onClick={this.toggle} id="fourteenFont">{this.props.okayButtonText}</Button>{' '}

            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default HelpModal
