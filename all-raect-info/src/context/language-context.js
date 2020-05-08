import React from 'react'

const LanguageContext = React.createContext({ selectedLanguage: null, onLanguageChanged: null });
//console.log(context);

export class LanguageProvider extends React.Component {
    state = { selectedLanguage: 'tr', onLanguageChanged: null }
    onLanguageChanged = lang => {
        this.setState({ selectedLanguage: lang })
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, onLanguageChanged: this.onLanguageChanged }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export default LanguageContext;
