import React from "react";
import { RouteComponentProps } from "react-router";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

interface ICountryProps {}

type TParams = { alias: string };

type TCountryProps = RouteComponentProps<TParams> & ICountryProps;

export const Country: React.FC<TCountryProps> = ({ history, location }) => {
  const item = location.state && location.state.item;
  if (!item) return null;

  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Row>
        <Col />
        <Col xs={6}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={item.flag} />
            <Card.Body>
              <Card.Title>
                {item.name} - {item.nativeName}
              </Card.Title>
            </Card.Body>
          </Card>
          <ListGroup>
            <ListGroup.Item>
              Capital:{" "}
              <strong>
                {item.subregion} - {item.region}
              </strong>
              <a
                style={{ float: "right" }}
                href={`https://www.latlong.net/c/?lat=${item.latlng[0]}&long=${
                  item.latlng[1]
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View on maps</span>
              </a>
            </ListGroup.Item>

            <ListGroup.Item>
              Region: <strong>{item.capital}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Languare:{" "}
              <strong>
                {item.languages.map((item: any) => `${item.name}`).join(", ")}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Curency: <strong> {item.currencies[0].code}</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              Calling Code:
              <strong>
                {" "}
                [
                {item.callingCodes.map((item: number) => `+${item}`).join(", ")}
                ]
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              TimeZone:{" "}
              <strong>
                [{item.timezones.map((item: number) => `${item}`).join(", ")}]
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Domain:{" "}
              <strong>
                {" "}
                [
                {item.topLevelDomain.map((item: number) => `${item}`).join(" ")}
                ]
              </strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};
