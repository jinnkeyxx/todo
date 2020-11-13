import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
class AddTodo extends React.PureComponent{

    render(){
        return(
            <Search placeholder="input search text" onSearch={this.props.Search} enterButton value={this.props.value} onChange={this.props.change}/>
        )
    }
}
export default AddTodo