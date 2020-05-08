import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from '../../components/data-components/data-table'
// class Hook extends React.Component {
// state = { bisey: 'bisey' }
// componentDidMount(){
//axios.get(......).then(res=>this.setState({data:res.data});
//}
// render() 
const Hook = () => {
    const [myState, setMyState] = useState({ resource: 'users', data: [] });
    const getData = async (resource) => {
        let url = (resource === 'users' ?
            'https://jsonplaceholder.typicode.com/users' :
            'https://jsonplaceholder.typicode.com/users/1/comments');
        const response = await axios.get(url);
        // console.log(response.data);
        setMyState({resource:resource, data: response.data });
    }
    //componentDidUpdate
    //componentDidMount
    useEffect(() => {
        getData(myState.resource);
    }, [myState.resource]);
    return (<div>
        <button onClick={() => setMyState({ resource: 'comments' })}>Comments</button>
        <button onClick={() => setMyState({ resource: 'users' })}>Users</button>
        {/* {myState.resource} : {myState.data.length} */}
        {/* <ul>
            {
                myState.data.map((item, index) => <li key={index}>{item[myState.resource === 'users' ? 'name' : 'title']}</li>)
            }
        </ul> */}
        {/* <br /> */}
        {/* <button className="ui button" onClick={() => setDegisken({ bisey: 'Olay' })}>Olaylar</button> */}
    </div >)
}
// }

export default Hook;