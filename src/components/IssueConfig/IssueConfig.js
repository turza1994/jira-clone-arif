import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Details from './Details';

const IssueConfig = () => {
    return (
        <div className="container IssueConfig py-3">
            <p className="fs-5">
                <span className="text-muted fw-lighter">TEST-1944</span>
                <span className="text-dark fw-lighter"> : Sample REST API Test</span>
                <i className="btn fas fa-edit ps-3 text-primary"></i>
            </p>
            <Tabs>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>Steps</Tab>
                </TabList>

                <TabPanel>
                    <Details />
                </TabPanel>

                <TabPanel>
                    <h2>Steps</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default IssueConfig;