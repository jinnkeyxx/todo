import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
class AddTodo extends React.Component{
   onSearch = value => console.log(value);
    render(){
        return(
            <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
        )
    }
}
export default AddTodo