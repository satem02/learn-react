import React from 'react'
import DataTable from '../../../../components/data-components/data-table'
import { connect } from 'react-redux'
import { loadDataActionCreator,ACTION_TYPE_CATEGORY } from '../../../../actions'
class CategoryList extends React.Component {
    loadData = () => {
        this.props.loadDataActionCreator(ACTION_TYPE_CATEGORY);
    }
    render() {
        // throw("My exception"); TESTING FOR ERRORBOUNDRY
        const table = this.props.kategoriler.length > 0 ? <DataTable data={this.props.kategoriler} /> : null;
        return (
            <div className="ui container">
                <div className="ui animated button" tabIndex="0" onClick={this.loadData}>
                    <div className="visible content">Load Data</div>
                    <div className="hidden content">
                        <i className="play icon"></i>
                    </div>
                </div>
                {table}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { kategoriler: state.categories ?? []}
}

export default connect(mapStateToProps,{loadDataActionCreator})(CategoryList)
// export default connect(mapStateToProps,{setDataActionCreator})(List)