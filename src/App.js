import React, { Component } from 'react';
import {
  Button, Container, Row, Col, Media, Alert, Badge, Breadcrumb,
  ButtonGroup, Card, Carousel, Dropdown, Form, InputGroup,
  FormControl, Image, Figure, Jumbotron, ListGroup, Modal,
  Nav, Navbar, Popover, OverlayTrigger, Pagination,
  ProgressBar, Table, Tabs, Tab, Collapse
} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true,
    };
  }
  render() {
    const popover = (
      <Popover title='informasi'>This is popover</Popover>
    );
    return (
      <div className='container'>
        <h1>Hello Bootstrap</h1>
        <Button varian='primary'>Testing</Button>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Makanan Sate
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p>
                    Makanan Sate
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>
        <Alert variant='primary'>
          Pesan Alert
        </Alert>
        <Badge variant="secondary">Badge Baru</Badge>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/'>Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant='primary'>Tombol</Button>
        <ButtonGroup className='ml-2'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonGroup>
        <Card style={{width: '18rem'}} >
          <Card.Img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' variant='top' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go Somewhere</Button>
          </Card.Body>
        </Card>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg' alt='1' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png' alt='1' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg' alt='1' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Dropdown>
          <Dropdown.Toggle variant='success'>
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Action Action</Dropdown.Item>
            <Dropdown.Item>Something</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          <Form.Group>
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukan Nama" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukan Email" />
          </Form.Group>
        </Form>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder='username'></FormControl>
        </InputGroup>
        <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg' alt='gambar' roundedCircle />
        <Figure>
          <Figure.Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' alt='nasi padang' width='200' />
          <Figure.Caption>Lorem ipsum set dollar</Figure.Caption>
        </Figure>
        <Jumbotron>
          <h1>Hello World</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <Button variant='primary'>Learn More</Button>
        </Jumbotron>
        <ListGroup>
          <ListGroup.Item>Nasi Goreng</ListGroup.Item>
          <ListGroup.Item>Mie Goreng</ListGroup.Item>
          <ListGroup.Item>Nasi Uduk</ListGroup.Item>
        </ListGroup>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal Body Here</p>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
        <Nav>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Form.Control placeholder='search' className='mr-sm-2' />
            <Button>Search</Button>
          </Form>
        </Navbar>
        <OverlayTrigger trigger='click' placement='right' overlay={popover}>
          <Button variant='success'>Munculkan Overlay</Button>
        </OverlayTrigger>
        <Pagination size='lg'>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
        </Pagination>
        <ProgressBar now={75} label='75%'/>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Menu</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nasi Goreng</td>
              <td>Makanan</td>
              <td>20.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mie Goreng</td>
              <td>Makanan</td>
              <td>15.000</td>
            </tr>
          </tbody>
        </Table>
        <Tabs>
          <Tab eventKey='home' title='home'>
            <p>
              Halaman home
            </p>
          </Tab>
          <Tab eventKey='about' title='about'>
            <p>
              Halaman about
            </p>
          </Tab>
          <Tab eventKey='contact' title='contact'>
            <p>
              Halaman contact
            </p>
          </Tab>
        </Tabs>
        <Button variant='primary' onClick={() => {this.setState({buka: !this.state.buka})}}>Click</Button>
        <Collapse in={this.state.buka}>
          <p>Show paragraph</p>
        </Collapse>
      </div>
    );
  }
}

export default App;
