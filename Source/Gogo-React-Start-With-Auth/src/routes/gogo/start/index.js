import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  render() {
    return (
      <Fragment>
        {/* <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.start" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row> */}
        <Row>
        <Colxx sm="12" md="4" className="mb-4">
        
        <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="simple-icon-people mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">5</p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.totalemp" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
         
                </div>
              </CardBody>
            </Card>
        
        </Colxx>


        <Colxx sm="12" md="4" className="mb-4">
        
        <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="simple-icon-event mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">5</p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.empleaves" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
         
                </div>
              </CardBody>
            </Card>
        
        </Colxx>


        <Colxx sm="12" md="4" className="mb-4">
        
        <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="iconsmind-Alarm mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">5</p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.daysforpayroll" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
         
                </div>
              </CardBody>
            </Card>
        
        </Colxx>
        
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
