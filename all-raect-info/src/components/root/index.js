import React, { Suspense } from 'react'
import Header from '../header'
import { Route } from 'react-router-dom'
import LoadingIndicator from '../loading-indicator'
import MyComponent from '../../pages/context'
import Hooks from '../../pages/hook'
import { LanguageProvider } from '../../context/language-context'

// CORE SPLITTING ROUTING 
// LAZY LOADING
const Dashboard = React.lazy(() => import("../../pages/dashboard"));
const CategoryManagement = React.lazy(() => import("../../pages/category-mgmt"));
const UnitManagement = React.lazy(() => import("../../pages/unit-mgmt"));

// FUNCTIONAL COMPONENT
export default class Root extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LanguageProvider>
                    <Header />
                    <Suspense fallback={<LoadingIndicator />}>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/category" component={CategoryManagement} />
                        <Route path="/unit" component={UnitManagement} />
                        <Route path="/context" component={MyComponent} />
                        <Route path="/hooks" component={Hooks} />
                    </Suspense>
                </LanguageProvider>
            </div>
        )
    }
}