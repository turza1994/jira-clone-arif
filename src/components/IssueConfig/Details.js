import React from 'react';
import './index.css';

const Details = () => {
    return (
        <div className="container Details pt-5">
            <div className="row">
                <div className="col-12 col-sm-7 d-flex justify-content-center">
                    <table className="w-100">
                        <tbody>
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Folder</p>
                                </td>
                                <td>
                                    <input type="text" value="Sample Example > RestApi Example" disabled className="w-100 bg-dark-grey text-dark border-0 py-1 px-3" />
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-plus"></i></button>
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-check"></i></button>
                                        <button className="btn btn-sm-green ms-2 shadow"></button>
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Feature</p>
                                </td>
                                <td>
                                    <input type="text" value="Sample Feature > Sample REST API" disabled className="w-100 bg-dark-grey text-dark border-0 py-1 px-3" />
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-plus"></i></button>
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-check"></i></button>
                                        <button className="btn btn-sm-green ms-2 shadow"></button>
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Priority</p>
                                </td>
                                <td className="d-flex justify-content-between">
                                    <button className="w-25 bg-dark-grey text-dark py-1 border-0 me-1 btn-priority">P1</button>
                                    <button className="w-25 bg-dark-grey text-dark py-1 border-0 me-1 btn-priority">P2</button>
                                    <button className="w-25 bg-dark-grey text-dark py-1 border-0 me-1 btn-priority">P3</button>
                                    <button className="w-25 bg-dark-grey text-dark py-1 border-0 me-1 btn-priority">P4</button>
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-check"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <p className="px-4 my-auto">Label(s)</p>
                                </td>
                                <td className="">
                                <select className="form-select w-100" aria-label="Default select example">
                                    <option defaultValue className="text-secondary">Search & select Labels...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </td>
                                <td>
                                    <div className="ms-4">
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-plus"></i></button>
                                        <button className="btn btn-light rounded-circle text-secondary"><i className="fas fa-check"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className="d-flex justify-content-end align-items-center">
                                    <button className="btn"><i className="fas fa-times"></i></button>
                                    <button className="btn-dark" style={{ fontSize: '11px' }}>Test</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-sm-5 d-flex justify-content-start align-items-center">
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
                </div>
            </div>
        </div>
    );
};

export default Details;