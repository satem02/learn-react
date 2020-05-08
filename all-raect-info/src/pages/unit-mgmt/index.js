import React from 'react'
const List = React.lazy(() => import('./components/list'))

const UnitManagement = () => <List />

export default UnitManagement;