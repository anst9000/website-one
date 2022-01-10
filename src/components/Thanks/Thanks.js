import "./Thanks.css";
import { Container, Row, Col } from 'react-bootstrap'

export const Thanks = () => {
  return (
    <Container className="thanks">
      <Row>
        <Col>
          <h2>Thank You!</h2>
          <p>We will get back to you as soon as possible</p>
        </Col>
      </Row>
    </Container>
  )
};
