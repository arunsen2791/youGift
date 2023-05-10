import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody
} from "reactstrap";
import { Edit, Trash, Folder, Plus } from "react-feather";
import { Link } from "react-router-dom";
const MyGifts = () => {

  return (
    <Container>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <div className='d-flex justify-content-between my-1'>
                <div>Organize your my gift</div>
                <div>
                  <button style={{ borderRadius: "20px" }} className="btn btn-secondary" ><Plus size={15} className="me-50" />Create New Folder</button></div>
              </div>
              <div className='d-flex'>
                <div>
                  <div className='btnfix'>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>

                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />


                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />

                  </div>
                </div>
                <div>
                  <div>
                    <Folder size={50} className="me-50 text-primary" />
                  </div>
                  <div><h5>General Clients</h5></div>
                  <div>

                    <Edit size={15} className="me-50" />

                    <Trash size={15} className="me-50" />


                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col md="3" lg="3">
          <div>
            <h3>My Favorate Gifts</h3>
          </div>

          <Card>
            <CardBody>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuLC2cG3NaynVhGzDbO64pap3x0Zm23gS8w&usqp=CAU" alt="cake" />
            </CardBody>
          </Card>
        </Col>
        <Col md="3" lg="3">
          <div>
            <h3>My Favorate Gifts</h3>
          </div>

          <Card>
            <CardBody>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuLC2cG3NaynVhGzDbO64pap3x0Zm23gS8w&usqp=CAU" alt="cake" />
            </CardBody>
          </Card>
        </Col>
        <Col md="3" lg="3">
          <div>
            <h3>My Favorate Gifts</h3>
          </div>

          <Card>
            <CardBody>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuLC2cG3NaynVhGzDbO64pap3x0Zm23gS8w&usqp=CAU" alt="cake" />
            </CardBody>
          </Card>
        </Col>
        <Col md="3" lg="3">
          <div>
            <h3>My Favorate Gifts</h3>
          </div>

          <Card>
            <CardBody>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuLC2cG3NaynVhGzDbO64pap3x0Zm23gS8w&usqp=CAU" alt="cake" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyGifts;
