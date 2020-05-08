import React from 'react'
import MenuContainer from '../menu-container'
import MenuItem from '../menu-container/components/menu-item'
import MenuRightContainer from '../menu-container/components/right-container'
import SearchBox from '../menu-container/components/search-box'
import AuthControl from '../menu-container/components/auth-control'
import LanguageSelector from '../language-selector'
import LanguageContext from '../../context/language-context'

const Header = (props) =>
    <LanguageContext.Consumer>
        {(value) => value.selectedLanguage === 'tr' ?
            <MenuContainer>
                <MenuItem url="/">Gösterge Paneli</MenuItem>
                <MenuItem url="/category">Kategori Yönetimi</MenuItem>
                <MenuItem url="/unit">Birim Yönetimi</MenuItem>
                <MenuItem url="/context">Context Örneği</MenuItem>
                <MenuItem url="/hooks">Hooks Örneği</MenuItem>
                <MenuRightContainer>
                    <SearchBox />
                </MenuRightContainer>
                <AuthControl isAuthenticated={false} />
                <LanguageSelector />
            </MenuContainer> :
            <MenuContainer>
                <MenuItem url="/">Dashboard</MenuItem>
                <MenuItem url="/category">Category Management</MenuItem>
                <MenuItem url="/unit">Unit Management</MenuItem>
                <MenuItem url="/context">Context Sample</MenuItem>
                <MenuItem url="/hooks">Hooks Sample</MenuItem>
                <MenuRightContainer>
                    <SearchBox />
                </MenuRightContainer>
                <AuthControl isAuthenticated={false} />
                <LanguageSelector />
            </MenuContainer>
        }
    </LanguageContext.Consumer>
export default Header;