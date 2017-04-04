import React from 'react';

var Content = React.createClass({
    render(){
        return(
            <div className={this.props.contentClass(this.props.index)} >{ this.props.val  }</div>
        )
    }
});
export default Content;
