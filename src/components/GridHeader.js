import React from 'react'

function GridHeader() {
    return (
        <div className="mt-5">
            <h4 className="mb-5">MY JOURNEYS</h4>
            <div className="row no-gutters" id="gridHeader">
                <div className="col-md-1 p-0 m-0">
                    <p className="font-weight-bold p-0">#</p>
                </div>
                <div className="col-md-1">
                    <p className="font-weight-bold p-0">Date</p>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold p-0">Start</p>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold p-0">End</p>
                </div>
                <div className="col-md-1">
                    <p className="font-weight-bold p-0">Travel As</p>
                </div>
                <div className="col-md-1">
                    <p className="font-weight-bold p-0">Seats</p>
                </div>
                <div className="col-md-1">
                    <p className="font-weight-bold p-0">Seats left</p>
                </div>
                <div className="col-md-3">
                    <p className="font-weight-bold p-0">Actions</p>
                </div>
            </div>
        </div>
    )
}

export default GridHeader