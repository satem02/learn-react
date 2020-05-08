import React from 'react'
const List = React.lazy(() => import('./components/list'))

const CategoryManagement = () => <List/>

export default CategoryManagement;