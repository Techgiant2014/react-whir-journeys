import React from 'react'
import { Button } from 'react-bootstrap'

class Journey extends React.Component {
    render() {
        return (
            <div className="row mt-2 border-top" id="Journey">
                <div className="col-md-1 p-0 m-0">
                    <p class="counter mt-2">
                        {this.props.counter}
                    </p>
                </div>
                <div className="col-md-1">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Journey date:
                        </span> 
                        {this.props.journey.date}</p>
                </div>
                <div className="col-md-2">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Start from:
                        </span>
                        {this.props.journey.start}
                    </p>
                </div>
                <div className="col-md-2">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Destination:
                        </span>    
                        {this.props.journey.end}
                    </p>
                </div>
                <div className="col-md-1">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Travel As:
                        </span>
                        {this.props.journey.travel_as}
                    </p>
                </div>
                <div className="col-md-1">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Seats needed: 
                        </span>
                        {this.props.journey.seats}
                    </p>
                </div>
                <div className="col-md-1">
                    <p class="mt-2">
                        <span className="hidden-title font-weight-bold mr-2">
                            Seats left:
                        </span>
                        {this.props.journey.seats_left}
                    </p>
                </div>
                <div className="col-md-3 p-0 m-0">
                    <div class="mt-2">
                        <Button variant="primary" className="m-0 rounded-0 mr-2">Find match</Button>
                    
                        <Button variant="info" className="m-0 rounded-0 mr-2">View</Button>
                    
                        <Button variant="warning" className=" m-0 rounded-0 mr-2">Edit</Button>
                    
                        <Button variant="danger" className="m-0 rounded-0">Delete</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Journey