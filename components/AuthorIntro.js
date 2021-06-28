
import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars.githubusercontent.com/u/23156873?s=400&u=edef44bf6c60b51c76b665761474bd9992395fe1&v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
          My name is Sebastián Velásquez and I am an experienced software engineer and freelance developer.
          and this is my blog page.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>

export default AuthorIntro;
