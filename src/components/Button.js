import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.class}>
                {this.props.btnText}
            </button>
        )
    }
}

export default Button