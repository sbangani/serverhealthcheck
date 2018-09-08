import React from 'react';
import { Card, CardSubtitle } from 'reactstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Container = (props) => (
	<div>
	<Grid>
	  <Row className="show-grid">
		<Col xs={12} md={4} >
		  <Card className="card" style={{backgroundColor: props.server1?'green':(props.server1===0?'red':'grey'),cursor: 'pointer'}} onClick={() => props.onServerClicked(1)} data={1} >
	
			<h2 >Server 1</h2>
			  <CardSubtitle>Status : {props.server1?(props.server1===0?'DOWN':'UP'):'Failed'}</CardSubtitle>
			  <CardSubtitle>Endpoint: Test 1</CardSubtitle>
			  <CardSubtitle className="server" id="server1" style={{display: 'none'}}>Last Response Displayed</CardSubtitle>
			 
		  </Card>
		</Col>
		<Col xs={12} md={4}>
		  <Card className="card" style={{backgroundColor: props.server2?'green':(props.server2===0?'red':'grey'),cursor: 'pointer'}} onClick={() => props.onServerClicked(2)}>
		
			<h2>Server 2</h2>

	
			  <CardSubtitle>Status : {props.server2?(props.server2===0?'DOWN':'UP'):'Failed'}</CardSubtitle>
			  <CardSubtitle>Endpoint: Test 2</CardSubtitle>
			  <CardSubtitle className="server" id="server2" style={{display: 'none'}}>Last Response Displayed</CardSubtitle>
			 
		  </Card>
		</Col>
		<Col xs={12} md={4}>
		  <Card className="card" style={{backgroundColor: props.server3?'green':(props.server3===0?'red':'grey'),cursor: 'pointer'}} onClick={() => props.onServerClicked(3)}>
		
			<h2>Server 3</h2>

	
			  <CardSubtitle>Status : {props.server3?(props.server3===0?'DOWN':'UP'):'Failed'}</CardSubtitle>
			  <CardSubtitle>Endpoint: Test 3</CardSubtitle>
			  <CardSubtitle className="server" id="server3" style={{display: 'none'}}>Last Response Displayed</CardSubtitle>
			 
		  </Card>
		</Col>
	</Row>
	<Row className="show-grid" style={{marginTop: '10px'}}>
		<Col xs={12} md={4}>
		  <Card className="card" style={{backgroundColor: props.server4?'green':(props.server4===0?'red':'grey'),cursor: 'pointer'}} onClick={() => props.onServerClicked(4)}>
		
			<h2>Server 3</h2>

	
			  <CardSubtitle>Status : {props.server4?(props.server4===0?'DOWN':'UP'):'Failed'}</CardSubtitle>
			  <CardSubtitle>Endpoint: Test 4</CardSubtitle>
			  <CardSubtitle className="server" id="server4" style={{display: 'none'}}>Last Response Displayed</CardSubtitle>
			 
		  </Card>
		</Col>
		<Col xs={12} md={4}>
		  <Card className="card" style={{backgroundColor: props.server5?'green':(props.server5===0?'red':'grey'),cursor: 'pointer'}} onClick={() => props.onServerClicked(5)}>
		
			<h2>Server 3</h2>

	
			  <CardSubtitle>Status : {props.server5?(props.server5===0?'DOWN':'UP'):'Failed'}</CardSubtitle>
			  <CardSubtitle>Endpoint: Test 5</CardSubtitle>
			  <CardSubtitle className="server" id="server5" style={{display: 'none'}}>Last Response Displayed</CardSubtitle>
			 
		  </Card>
		</Col>
	  </Row>
	</Grid>
	</div>
);

Container.propTypes = {
    server: PropTypes.object,
	onServerClicked:PropTypes.func
};

export { Container };
