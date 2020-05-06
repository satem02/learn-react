import React from 'react'
import MenuContainer from '../menu-container'
import MenuItem from '../menu-container/components/menu-item'
import MenuRightContainer from '../menu-container/components/right-container'
import SearchBox from '../menu-container/components/search-box'
import AuthControl from '../menu-container/components/auth-control'

// Functional Component orneği.Birde class componentler var.
const Header = () => (
    <MenuContainer>
        <MenuItem url="/">Dashboard</MenuItem>
        <MenuItem url="/category">Category Management</MenuItem>
        <MenuItem url="/unit">Unit Management</MenuItem>
        <MenuRightContainer>
            <SearchBox/>
        </MenuRightContainer>
        <AuthControl isAuthenticated={false}/>
    </MenuContainer>)

export default Header;