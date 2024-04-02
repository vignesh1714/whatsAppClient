'use client'
// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { ActiveProjects } from 'sub-components';

const Layout = () => {
  return (
    <Container fluid className="px-6 py-4">
      <div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
          <div className="mb-2 mb-lg-0">
            <h3 className="mb-0 fw-bold">Devices</h3>
          </div>
          <div>
            <Link href="#" className="btn btn-white">Create New Devices</Link>
          </div>
        </div>
      </div>
      <Row className="justify-content-center">
        <ActiveProjects />
      </Row>
    </Container>
  )
}

export default Layout