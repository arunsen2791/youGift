import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import SalesCard from "./SalesCard";
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained";
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived";
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions";
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker";
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders";
import SalesStat from "../../ui-elements/cards/analytics/Sales";
import ActivityTimeline from "./ActivityTimeline";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
//import { history } from "../../../history";
//import { logoutWithJWT } from "../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff";

class AnalyticsDashboard extends React.Component {
  componentDidMount() {
    // history.push("/pages/login");
    console.log(this.props.dispatch);
    // const { dispatch } = this.props;
    // dispatch(logoutWithJWT());
  }
  render() {
    return (
      <React.Fragment>
        {/* <Row className="match-height">
          <Col lg="6" md="12">
            <SalesCard />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
        </Row> */}
        {/* <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row> */}
        <Row className="match-height">
          <Col lg="3">
            <Card>
              <CardBody className="cardBgColor">
                <div className="chart-info d-flex justify-content-between align-items-center">
                  <div className="series-info d-flex">
                    <span className="text-bold-500 txtColor">
                      Total Contacts
                    </span>
                  </div>
                  <div className="series-info d-flex">
                    <span className="text-bold-700 ">
                      <h1 className="titleColor">4</h1>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <CardBody className="p-1 cardBgColor2">
                <div className="chart-info d-flex justify-content-between align-items-center">
                  <div className="series-info d-flex">
                    <span className="text-bold-500 txtColor">
                      Total My Gift
                    </span>
                  </div>
                  <div className="series-info d-flex">
                    <span className="text-bold-700 ">
                      <h1 className="titleColor">7</h1>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <CardBody className="p-1 cardBgColor3">
                <div className="chart-info d-flex justify-content-between align-items-center">
                  <div className="series-info d-flex">
                    <span className="text-bold-500 txtColor">
                      Total Gift Sent
                    </span>
                  </div>
                  <div className="series-info d-flex">
                    <span className="text-bold-700 ">
                      <h1 className="titleColor">1</h1>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <CardBody className="p-1 cardBgColor4">
                <div className="chart-info d-flex justify-content-between align-items-center">
                  <div className="series-info d-flex">
                    <span className="text-bold-500 txtColor">
                      Upcoming Gift
                    </span>
                  </div>
                  <div className="series-info d-flex">
                    <span className="text-bold-700 ">
                      <h1 className="titleColor">6</h1>
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <div className="header"></div>
        </Row>

        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null)(AnalyticsDashboard);
