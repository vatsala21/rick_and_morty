import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import './index.css';

const EpisodesList = (props) => {
    const [episodes, setAllEpisode] = useState([]);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    const fetchAllEpisodes = (query) => {
        axios.get(`https://rickandmortyapi.com/api/episode/${query}`)
            .then((response) => {
                setAllEpisode(response.data.results)
                setPrevPage(response.data.info.prev);
                setNextPage(response.data.info.next);
            });
    }

    const fetchPage = (pageUrl) => {
        axios.get(`${pageUrl}`)
            .then((response) => {
                setAllEpisode(response.data.results)
                setPrevPage(response.data.info.prev);
                setNextPage(response.data.info.next);
            });
    }

    useEffect(() => {
        const query = `?name=${props.episodeToSearch}`;
        fetchAllEpisodes(query);
    }, [props.episodeToSearch]);

    return (
        <div className='episodeListContnainer'>
            <Container fluid>
                <Row style={{ textAlign: "right"}}>
                    <Col>
                        <Button 
                            onClick={() => fetchPage(prevPage)} 
                            disabled={_.isNil(prevPage)} 
                            variant="link"
                        >Prev
                        </Button>
                    </Col>
                    <Col sm={2}>
                        <Button 
                            onClick={() => fetchPage(nextPage)} 
                            disabled={_.isNil(nextPage)} 
                            variant="link"
                        >Next</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table borderless hover responsive variant="dark">
                            <thead>
                                <tr>
                                <th>Episode Name</th>
                                <th>Air Data</th>
                                <th>Episode Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    episodes.map(episodeObject => {
                                        return (
                                            <tr>
                                                <td>{episodeObject.name}</td>
                                                <td>{episodeObject.air_date}</td>
                                                <td>{episodeObject.episode}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>  
    );
}

export default EpisodesList;