import React,{Component} from 'react';
import './main.scss';
class List extends Component{
    constructor() {
        super();
    }
    handleClick(){
        this.props.handleClick(this.props.index);
    }
    render(){
        return(
            <li className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}</li>
        )
    }
}
export default List;
