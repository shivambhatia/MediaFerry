import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, Container
} from 'reactstrap';

import FormInline from './FormInline';

export default class FormGridFormRow extends React.Component {
    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Grid Rows</CardTitle>
                                <Form>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleEmail11">Email</Label>
                                                <Input type="email" name="email" id="exampleEmail11"
                                                       placeholder="with a placeholder"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="examplePassword11">Password</Label>
                                                <Input type="password" name="password" id="examplePassword11"
                                                       placeholder="password placeholder"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                  
                                    <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck"/>
                                        <Label for="exampleCheck" check>Check me out</Label>
                                    </FormGroup>
                                    <Button color="primary" className="mt-2">Sign in</Button>
                                </Form>

                            </CardBody>
                        </Card>
                        
                    </Container>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
