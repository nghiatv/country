import React, { useState, useEffect } from "react";

import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { SuggestionList } from "../components/SuggestionList";
import axios from "axios";
import { useDebounce } from "../customHook/debouce";
import { RouteComponentProps } from "react-router";

interface IHomeProps {}

type THomeProps = RouteComponentProps<any> & IHomeProps;

export const Home: React.FC<THomeProps> = ({ history }) => {
  const [keyword, setKeyword] = useState<string>("viet nam");
  const [data, setData] = useState<any[]>([]);
  const [isSearch, setIsSearching] = useState<boolean>(false);

  const deBounceSearch = useDebounce(keyword, 500);

  useEffect(() => {
    if (deBounceSearch) {
      setIsSearching(true);

      const fetchData = async () => {
        try {
          const result = await axios.get(
            `https://restcountries.eu/rest/v2/name/${keyword}`
          );

          console.log("result: ", result.data);

          setIsSearching(false);
          setData(result.data);
        } catch (error) {
          setIsSearching(false);
          console.log("error: ", error);
          setData([]);
        }
      };

      if (keyword) fetchData();
    } else {
      setData([]);
    }
  }, [deBounceSearch]);
  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        <Col>
          <h1 className="text-center" style={{ fontSize: 72 }}>
            Country
          </h1>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100 }}>
        <Col>
          <form className="example" onSubmit={event => event.preventDefault()}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              value={keyword}
              onChange={(event: any) => {
                setKeyword(event.target.value);
                if (event.target.value === "") {
                  setData([]);
                }
              }}
            />
            <button type="submit">
              {isSearch ? (
                <i className="fa fa-spin fa-spinner" />
              ) : (
                <span>{data.length} result(s)</span>
              )}
            </button>
          </form>
          <SuggestionList
            onPressItem={history.push}
            data={data}
          />
        </Col>
      </Row>
    </Container>
  );
};
