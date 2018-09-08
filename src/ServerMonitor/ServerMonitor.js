import React, { Component } from 'react';
import ReactInterval from 'react-interval';
import { ClipLoader } from 'react-spinners';
import { Container } from './Container';
import {Grid, Row, Col} from 'react-bootstrap';
import { ServerService}  from '../services/ServerService';


const serverService = new ServerService();

//const override = css`
//    display: block;
//    margin: 0 auto;
//    border-color: red;
//`;

class ServerMonitor extends Component {

    constructor(props){
        super(props);
		
		this.state = {
            server: {},
            server2: {},
            server3: {},
            server4: {},
            server5: {},
			ready:false,
			ready2:false,
			ready3:false,
			ready4:false,
			ready5:false,
			endpoint1:'https://cognition.dev.stackworx.cloud/api/status',
			endpoint2:'http://localhost:8080/lutheranHymnalsApi/jwtApp/public/test',
			endpoint3:'https://api.durf.dev.stackworx.io/health',
			endpoint4:'https://prima.run/health',
			endpoint5:'https://stackworx.io',
        };
		
//		console.log(serverService.getServerHealth('https://prima.run/health'));
			this.check = this.check.bind(this);
			this.lastServerResponse = this.lastServerResponse.bind(this);
			this.updateInputValue = this.updateInputValue.bind(this);
//        this.handleOnRefresh = this.handleOnRefresh.bind(this);
		
    }
	
	check(){
		this.getServerHealthCheck(this.state.endpoint1,1);
		this.getServerHealthCheck(this.state.endpoint2,2);
		this.getServerHealthCheck(this.state.endpoint3,3);
		this.getServerHealthCheck(this.state.endpoint4,4);
		this.getServerHealthCheck(this.state.endpoint5,5);
	}
	
	getServerHealthCheck(url,server){
		serverService.getServerHealth(url).then(resp => {
			 var date = new Date(resp.headers.date).getTime();
			 var bool = false;
			
			if(localStorage.getItem('responseTime')){
				if((date - parseInt(localStorage.getItem('responseTime'))) >= 5000){
					bool = true;
				}
			}
				
					if (resp){
						
						if(server===1){
							
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData1',JSON.stringify(resp.results));
							}
							
						 	this.setState(() => ({server:resp.results,ready:true}));
						}else if(server===2){
							
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData2',JSON.stringify(resp.results));
							}
							
							this.setState(() => ({server2:resp.results,ready2:true}));
						}else if(server===3){
							
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData3',JSON.stringify(resp.results));
							}
							
							this.setState(() => ({server3:resp.results,ready3:true}));
						}else if(server===4){
							
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData4',JSON.stringify(resp.results));
							}
							
							this.setState(() => ({server4:resp.results,ready4:true}));
						}else if(server===5){
							
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData5',JSON.stringify(resp.results));
							}
							
							this.setState(() => ({server5:resp.results,ready5:true}));
						}
					 }else{
						if(server===1){
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData1',0);
							}
						 	this.setState(() => ({server:0,ready:true}));
						}else if(server===2){
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData2',0);
							}
							this.setState(() => ({server2:0,ready2:true}));
						}else if(server===3){
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData3',0);
							}
							this.setState(() => ({server3:0,ready3:true}));
						}else if(server===4){
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData4',0);
							}
							this.setState(() => ({server4:0,ready4:true}));
						}else if(server===5){
							if(bool){
								localStorage.setItem('responseTime',date);
								localStorage.setItem('lastResponseData5',0);
							}
							this.setState(() => ({server5:0,ready5:true}));
						}
					 }
                })
                .catch(error => {
					  if(server===1){
						  
							localStorage.setItem('responseTime',null);
							localStorage.setItem('lastResponseData1',false);
							
						 	this.setState(() => ({server:false,ready:true}));
						}else if(server===2){
							localStorage.setItem('responseTime',null);
							localStorage.setItem('lastResponseData2',false);
							this.setState(() => ({server2:false,ready2:true}));
						}else if(server===3){
							localStorage.setItem('responseTime',null);
							localStorage.setItem('lastResponseData3',false);
							this.setState(() => ({server3:false,ready3:true}));
						}else if(server===4){
							localStorage.setItem('responseTime',null);
							localStorage.setItem('lastResponseData4',false);
							this.setState(() => ({server4:false,ready4:true}));
						}else if(server===5){
							localStorage.setItem('responseTime',null);
							localStorage.setItem('lastResponseData5',false);
							this.setState(() => ({server5:false,ready5:true}));
						}
				});
	}
	
	lastServerResponse(server){
		var data;
		if(server===1){
			document.getElementById('server1').style.display='block';
			
			if(localStorage.getItem('lastResponseData1')==='false'){
				data = false;
			}else if(localStorage.getItem('lastResponseData1')==='false'){
				data = 0;
			}else{
				data = JSON.stringify(localStorage.getItem('lastResponseData1'));
			}
			
			this.setState(() => ({server:data,ready:true}));
		}else if(server===2){
			document.getElementById('server2').style.display='block';
			
			if(localStorage.getItem('lastResponseData2')==='false'){
				data = false;
			}else if(localStorage.getItem('lastResponseData2')==='false'){
				data = 0;
			}else{
				data = JSON.stringify(localStorage.getItem('lastResponseData2'));
			}
			
			this.setState(() => ({server2:data,ready2:true}));
		}else if(server===3){
			document.getElementById('server3').style.display='block';
			
			if(localStorage.getItem('lastResponseData3')==='false'){
				data = false;
			}else if(localStorage.getItem('lastResponseData3')==='false'){
				data = 0;
			}else{
				data = JSON.stringify(localStorage.getItem('lastResponseData3'));
			}
			
			this.setState(() => ({server3:data,ready3:true}));
		}else if(server===4){
			document.getElementById('server4').style.display='block';
			
			if(localStorage.getItem('lastResponseData4')==='false'){
				data = false;
			}else if(localStorage.getItem('lastResponseData4')==='false'){
				data = 0;
			}else{
				data = JSON.stringify(localStorage.getItem('lastResponseData4'));
			}
			
			this.setState(() => ({server4:data,ready4:true}));
		}else if(server===5){
			document.getElementById('server5').style.display='block';
			
			if(localStorage.getItem('lastResponseData5')==='false'){
				data = false;
			}else if(localStorage.getItem('lastResponseData5')==='false'){
				data = 0;
			}else{
				data = JSON.stringify(localStorage.getItem('lastResponseData5'));
			}
			
			
			this.setState(() => ({server5:data,ready5:true}));
		}
	}
	
	handleSubmit(event){
		
		event.preventDefault();
		
		var server1 = event.target.elements.server1.value;
		var server2 = event.target.elements.server2.value;
		var server3 = event.target.elements.server3.value;
		var server4 = event.target.elements.server4.value;
		var server5 = event.target.elements.server5.value;
		
		if(server1!=='' && server1.includes('http') &&
		  server2!=='' && server2.includes('http') &&
		   server3!=='' && server3.includes('http') &&
		   server4!=='' && server4.includes('http') &&
		   server5!=='' && server5.includes('http')
		  ){
			
			this.setState(() => ({
				endpoint1:server1,
				endpoint2:server2,
				endpoint3:server3,
				endpoint4:server4,
				endpoint5:server5,
				ready:false,
				ready2:false,
				ready3:false,
				ready4:false,
				ready5:false,
			}));
			
			this.check();
			alert('Submited Successfully, Server Health Monitor will change');
			
		}else{
			   
					alert('Please fill all the Inputs');
		}
	}
	
	updateInputValue(evt) {
		var server = evt.target.id;
		var val = evt.target.value;
		if(server==='1'){
			this.setState(() => ({endpoint1:val}));
		}else if(server==='2'){
			this.setState(() => ({endpoint2:val}));
		}else if(server==='3'){
			this.setState(() => ({endpoint3:val}));
		}else if(server==='4'){
			this.setState(() => ({endpoint4:val}));
		}else if(server==='5'){
			this.setState(() => ({endpoint5:val}));
		}

  }
    
    componentDidMount(){
		this.check();
    }


    render() {
		var that = this;
        return (
			
			this.state.ready === false || this.state.ready2 === false || this.state.ready3 === false || this.state.ready4 === false || this.state.ready5 === false ?<div className='sweet-loading' style={{textAlign: 'center'}}>
			<ClipLoader
			  className={''}
			  sizeUnit={"px"}
			  size={150}
			  color={'#123abc'}
			  loading={true}
			/>
		  </div> 
			:
            this.state.ready === true && this.state.ready2 === true && this.state.ready3 === true && this.state.ready4 === true && this.state.ready5 === true &&  <div>
                <ReactInterval timeout={5000} enabled={true}
          callback={this.check} />
                <Container server1={that.state.server} server2={that.state.server2} server3={that.state.server3} server4={that.state.server4} server5={that.state.server5} onServerClicked={this.lastServerResponse}/>
			<hr/>
			<Grid>
			  <Row className="show-grid">
				<h3>List Of Servers Endpoints</h3>
			<form onSubmit={(evt)=>this.handleSubmit(evt)}>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label>Server 1 </label>
							<input type="text" className="form-control" name="server1" onChange={(evt)=> this.updateInputValue(evt)} id={1} value={this.state.endpoint1}/>
						</div>
				</Col>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label>Server 2 </label>
							<input type="text" className="form-control" name="server2"  onChange={(evt)=> this.updateInputValue(evt)} id={2} value={this.state.endpoint2}/>
						</div>
				</Col>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label>Server 3 </label>
							<input type="text" className="form-control" name="server3"  onChange={(evt)=> this.updateInputValue(evt)} id={3} value={this.state.endpoint3}/>
						</div>
				</Col>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label>Server 4 </label>
							<input type="text" className="form-control" name="server4"  onChange={(evt)=> this.updateInputValue(evt)} id={4} value={this.state.endpoint4}/>
						</div>
				</Col>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label>Server 5 </label>
							<input type="text" className="form-control" name="server5"  onChange={(evt)=> this.updateInputValue(evt)} id={5} value={this.state.endpoint5}/>
						</div>
				</Col>
				<Col xs={12} md={4} >
						<div className="form-group">
							<label></label>
							<button type="submit" className="btn btn-primary btn-block">Submit</button>
						</div>
				</Col>
				</form>
			  </Row>
			</Grid>
			
            </div>
        );
    }
}

export { ServerMonitor };