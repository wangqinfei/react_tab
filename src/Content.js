import React,{Component} from 'react';
import './main.scss';
class Content extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div className={this.props.contentClass(this.props.index)} >{ this.props.val  }</div>
        )
    }
}
export default Content;
