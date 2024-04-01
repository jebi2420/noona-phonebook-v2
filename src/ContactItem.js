import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='contact-item'>
      <Col lg={2}>
        <img 
            alt=""
            width={50}
            src='https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png'
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
    
  )
}

export default ContactItem