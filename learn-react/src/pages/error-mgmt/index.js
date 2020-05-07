import React from 'react'
import ErrorPage from './error-page';
import ErrorBoundary from '../../shared/error-boundary';


class ErrorManagement extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <ErrorPage></ErrorPage>
            </ErrorBoundary>
        );
    }
}


export default ErrorManagement;