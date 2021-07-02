import React from 'react'

function GridHeader() {
    return (
        <div class="mt-5">
            <h4 class="mb-5">MY JOURNEYS</h4>
            <div class="row no-gutters" id="gridHeader">
                <div class="col-md-1 p-0 m-0">
                    <p class="font-weight-bold p-0">#</p>
                </div>
                <div class="col-md-1">
                    <p class="font-weight-bold p-0">Date</p>
                </div>
                <div class="col-md-2">
                    <p class="font-weight-bold p-0">Start</p>
                </div>
                <div class="col-md-2">
                    <p class="font-weight-bold p-0">End</p>
                </div>
                <div class="col-md-1">
                    <p class="font-weight-bold p-0">Travel As</p>
                </div>
                <div class="col-md-1">
                    <p class="font-weight-bold p-0">Seats</p>
                </div>
                <div class="col-md-1">
                    <p class="font-weight-bold p-0">Seats left</p>
                </div>
                <div class="col-md-3">
                    <p class="font-weight-bold p-0">Actions</p>
                </div>
            </div>
        </div>
    )
}

export default GridHeader