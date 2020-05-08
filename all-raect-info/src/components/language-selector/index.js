import React from 'react'
import LanguageContext from '../../context/language-context'
class LanguageSelector extends React.Component {

    static contextType = LanguageContext;
    render() {
        // console.log(this.context)
        return (
            <div className="item">
                <i className="flag us" onClick={() => this.context.onLanguageChanged('en')}></i>
                <i className="flag tr" onClick={() => this.context.onLanguageChanged('tr')}></i>
            </div>)
    }
}

export default LanguageSelector;