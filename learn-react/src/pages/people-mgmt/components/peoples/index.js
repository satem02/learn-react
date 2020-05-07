import React from 'react'
import Card from '../card'
import faker from 'faker'
//PROPS
class Peoples extends React.Component { // CLASS COMPONENT
    state = { isShowing: true, buttonText: 'Show' };
    
    constructor(props) {
        console.log('Constructor has been called');
        super(props);
        //this.state = { isShowing: true, buttonText: 'Show' };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        // this.state.isShowing=true; YAPMIYORUM
        // this.setState({ nbr: 'Olaylar olaylar'});
        this.setState({ isShowing: false,buttonText: 'Showing'});
    }

    componentWillMount(){
        console.log('componentWillMount has been called');
    }

    componentDidMount(){
        console.log('componentDidMount has been called');// Angular AfterViewInit
    }

    componentDidUpdate(){
        console.log('componentDidUpdate has been called');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount has been called');
    }

    render() {
        const cards = [];
        if (this.state.isShowing) {
            for (let i = 1; i <= this.props.cardCount; i++) {
                cards.push(<Card
                    key={i}
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    year={faker.date.past().getFullYear()}
                    desc={faker.name.jobTitle()}
                    friends={faker.random.number(300)}
                />)
            }
        }
        return (
            <div className='ui four column doubling stackable grid container link cards'>
                <div className="ui container"><button onClick={this.onButtonClick}>{this.state.buttonText}</button></div>
                {cards}
            </div>)
    }
}
export default Peoples;