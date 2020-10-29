import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect,
} from "shards-react";
import { Dispatcher, Constants, Store } from "../flux";
import { PageTitle } from "../components/Common/PageTitle";
import ChartCard from "../components/FlowChart/ChartCard";

class FlowChartsView extends React.Component {
  constructor() {
    super();
    this.state = {
      flows: Store.getFlows(),
      sortType: "suggested",
      category: "all",
      searchQuery: "",
    };

    Store.on("update-flowchart", this.getFlows);
  }

  componentWillUnmount = () => {
    Store.removeListener("update-flowchart", this.getFlows);
  };

  getFlows = () => {
    const flows = Store.getFlows();
    this.setState({ flows });
  };

  sortBy = (sortType) => {
    this.setState({ sortType }, this.search);
  };

  setCategory = (category) => {
    this.setState({ category }, this.search);
  };

  updateSearch = (searchQuery) => {
    this.setState({ searchQuery }, this.search);
  };

  search = () => {
    const { category, searchQuery, sortType } = this.state;
    Dispatcher.dispatch({
      actionType: Constants.SEARCH_HUB,
      payload: { category, q: searchQuery, sort: sortType },
    });
  };

  render = () => {
    const { flows, sortType, category, searchQuery } = this.state;
    return (
      <Container fluid className="main-content-container px-0">
        <div className="px-4">
          <Row className="page-header py-4">
            <PageTitle
              title="FlowCharts List"
              subtitle="Community"
              className="text-sm-left mb-3"
            />
            <Col md="3" className="py-sm-2">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  <InputGroupText>Categories</InputGroupText>
                </InputGroupAddon>
                <FormSelect
                  onChange={(e) => this.setCategory(e.target.value)}
                  value={category}
                >
                  <option value="all">All Categories</option>
                  <option value="highestRated">Search</option>
                  <option value="newest">Configurations</option>
                </FormSelect>
              </InputGroup>
            </Col>

            <Col md="3" className="py-sm-2">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  <InputGroupText>Sort By</InputGroupText>
                </InputGroupAddon>
                <FormSelect
                  onChange={(e) => this.sortBy(e.target.value)}
                  value={sortType}
                >
                  <option value="suggested">Suggested</option>
                  <option value="highestRated">Highest Rated</option>
                  <option value="newest">Newest</option>
                </FormSelect>
              </InputGroup>
            </Col>

            <Col md="3" className="py-sm-2">
              <FormInput
                placeholder="search flows..."
                className="mb-3 mb-sm-0 ml-auto py-2"
                value={searchQuery}
                onChange={(e) => this.updateSearch(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            {Object.keys(flows).map((flowId) => (
              <Col key={flowId} md="3" className="mb-4">
                <ChartCard flow={flows[flowId]} flowId={flowId} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  };
}

export default FlowChartsView;
