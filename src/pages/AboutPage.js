import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';

const AboutPage = () => {
    <Container>
        <Row className='row-content'>
            <Col sm='6'>
                <H3>Our Mission</H3>
                <p>
                        We present a curated database of the best campsites in the
                        vast woods and backcountry of the World Wide Web Wilderness.
                        We increase access to adventure for the public while
                        promoting safe and respectful use of resources. The expert
                        wilderness trekkers on our staff personally verify each
                        campsite to make sure that they are up to our standards. We
                        also present a platform for campers to share reviews on
                        campsites they have visited with each other.
                    </p>
            </Col>
            <Col sm='6'>
                <Card>
                    <Card-Header className='bg-primary text-white'>
                        <h3>Facts at a Glance</h3>
                        </Card-Header>
                        <Card-Body>
                        <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 3, 2016</dd>
                                <dt className='col-6'>No. of Campsites in 2019</dt>
                                <dd className='col-6'>563</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>42</dd>
                            </dl>
                            </Card-Body>
                </Card>
                </Col>
                <Col>
                <Card className='bg-light mt-3'>
                    <CardBody>
                        <blockquote className='blockquote'>
                            <p> I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.
                            </p>
                            </blockquote>
                            <footer className='blockquote-footer'>
                            Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                    </footer>
                    </CardBody>
                    </Card>
                </Col>
        </Row>
        <Row className='row-content'>
            <Col xs='12'>
                <h3>Community Partners</h3>
            </Col>
        </Row>

    </Container>
}