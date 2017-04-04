import React from 'react';
var List = React.createClass({
    handleClick(){
        this.props.handleClick(this.props.index);
    },
    render(){
        return(
            <li className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}</li>
        )
    }
});
export default List;