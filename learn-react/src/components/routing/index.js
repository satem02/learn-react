import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import LoadingIndicator from '../loading-indicator'
// CORE SPLITTING ROUTING 
// LAZY LOADING
const Dashboard = React.lazy(() => import("../../pages/dashboard"));
const CategoryManagement = React.lazy(() => import("../../pages/category-mgmt"));
const UnitManagement = React.lazy(() => import("../../pages/unit-mgmt"));

// FUNCTIONAL COMPONENT
const Routing = () => (
    <Suspense fallback={<LoadingIndicator />}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/category" component={CategoryManagement} />
        <Route path="/unit" component={UnitManagement} />
    </Suspense>
)

export default Routing;