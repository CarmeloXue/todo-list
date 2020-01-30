import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Row, Container, Col, ListGroup, Button } from "react-bootstrap";

@inject("listStore")
@observer
export class ListContainer extends React.Component {
  componentDidMount() {
    const {
      listStore: { list, retrieveList }
    } = this.props;

    if (list.length === 0) retrieveList();
  }

  renderContent = () => {
    const {
      listStore: { list }
    } = this.props;

    if (list.length === 0) return <div>ops, no data avaliable here</div>;

    return (
      <ListGroup>
        {list.map((item, index) => (
          <ListGroup.Item key={index}>
            Name:{item.name}, Phone:{item.phone}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={8} md={8} sm={10}>
            <Link to="/add">
              <Button variant="primary">Add</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sm={10}>
            {this.renderContent()}
          </Col>
        </Row>
      </Container>
    );
  }
}
