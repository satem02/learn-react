import React from 'react'
import LanguageContext from '../../context/language-context'

class MyComponent extends React.Component{

    static contextType = LanguageContext;

    render(){
        ///console.log(this.context);
        let buttonText = this.context==='tr'?'Gonder':'Send';
    return <button className="ui button primary">{buttonText}</button> 
    }
}

//MyComponent.contextType=languageContext;

export default MyComponent;