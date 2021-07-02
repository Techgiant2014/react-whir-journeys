import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow">
                    <h3 class="navbar-brand text-dark btn" href="#">Whir.link</h3>
                </header>
            </div>
        )
    }
}

export default Header