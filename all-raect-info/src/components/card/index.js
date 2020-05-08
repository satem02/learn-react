import React, { Component } from 'react'
import Approval from '../approval'
class Card extends Component {
    state = { isApproved: false }
    constructor(props) {
        super(props);
        // this.onApprove = this.onApprove.bind(this);
    }
    
    onApprove = () => this.setState({ isApproved: true });
    render() {
        const approval = this.state.isApproved ? null : <Approval onApprove={this.onApprove} />;
        return (<div className="ui card">
            <div className="image">
                <img src={this.props.avatar} alt="" />
            </div>
            <div className="content">
                <a className="header">{this.props.firstName} {this.props.lastName}</a>
                <div className="meta">
                    <span className="date">Joined in {this.props.year}</span>
                </div>
                <div className="description">{this.props.desc}</div>
            </div>
            <div className="extra content">
                <a><i className="user icon"></i>{this.props.friends} Friends</a>
            </div>
            {approval}
        </div>)
    }
}
export default Card;