import React from 'react';
import { BtnBlack, BtnCross, BtnGreenSm, BtnPriority, BtnRound } from '../../styled-components/Button.styled';
import { Container } from '../../styled-components/Container.styled';
import { Col, Row } from '../../styled-components/Grid.styled';
import { Input, Select } from '../../styled-components/Input.styled';
import './index.css';

const Details = () => {
    return (
        <Container>
            <Row>
                <Col justifySelf='end' alignSelf='center'>
                    <table style={{ paddingTop: '50px' }} >
                        <tbody>
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Folder</p>
                                </td>
                                <td colSpan="2">
                                    <Input type="text" value="Sample Example > RestApi Example" disabled='false' className="w-100 bg-dark-grey text-dark border-0 py-1 px-3" />
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <BtnRound> <i className="fas fa-plus"></i> </BtnRound>
                                        <BtnRound> <i className="fas fa-check"></i> </BtnRound>
                                        <BtnGreenSm />
                                    </div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Feature</p>
                                </td>
                                <td colSpan="2">
                                    <Input type="text" value="Sample Feature > Sample REST API" disabled className="w-100 bg-dark-grey text-dark border-0 py-1 px-3" />
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <BtnRound> <i className="fas fa-plus"></i> </BtnRound>
                                        <BtnRound> <i className="fas fa-check"></i> </BtnRound>
                                        <BtnGreenSm />
                                    </div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Priority</p>
                                </td>
                                <td colSpan="2">
                                    <div style={{width: '100%',display: 'flex', justifyContent: 'space-between'}}>
                                        <BtnPriority>P1</BtnPriority>
                                        <BtnPriority>P2</BtnPriority>
                                        <BtnPriority>P3</BtnPriority>
                                        <BtnPriority>P4</BtnPriority>
                                    </div>
                                </td>
                                <td>
                                    <div colSpan="2" style={{ marginLeft: '42%' }}>
                                        <BtnRound> <i className="fas fa-check"></i> </BtnRound>
                                    </div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Label(s)</p>
                                </td>
                                <td colSpan="4">
                                    <Select className="form-select w-100" aria-label="Default select example">
                                        <option defaultValue className="text-secondary">Search & select Labels...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Select>
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <BtnRound> <i className="fas fa-plus"></i> </BtnRound>
                                        <BtnRound> <i className="fas fa-check"></i> </BtnRound>
                                    </div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td className="d-flex justify-content-end align-items-center">
                                    <BtnCross className="btn"><i className="fas fa-times"></i></BtnCross>
                                    <BtnBlack className="btn-dark" style={{ fontSize: '11px' }}>Test</BtnBlack>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col justifySelf='start' alignSelf='end'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Created by:</td>
                                <td className="ps-3">null</td>
                            </tr>
                            <tr>
                                <td>Created on:</td>
                                <td className="ps-3">2017-08-22</td>
                            </tr>
                            <tr>
                                <td>Modified by:</td>
                                <td className="ps-3">Mohammad Sazid Al Rashid</td>
                            </tr>
                            <tr>
                                <td>Last Modified:</td>
                                <td className="ps-3">2020-09-01</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td className="ps-3">Manual</td>
                            </tr>
                            <tr>
                                <td>Automatability:</td>
                                <td className="ps-3">Performance</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;