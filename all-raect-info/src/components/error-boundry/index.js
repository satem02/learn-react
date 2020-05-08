import React from 'react'
// Event Handler Function
// setTimeout & requestAnimationFrame?
// SSR
// Kendi Hatalarini yakalayamaz children
export default class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(err, errInfo) {
        console.log(err);
        console.log(errInfo);
    }

    render() {
        return this.state.hasError ?
            <div>It is not yours.It is us :(</div> :
            this.props.children;
    }

}