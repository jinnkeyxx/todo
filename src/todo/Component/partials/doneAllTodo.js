import React from 'react'
import { Button } from 'antd';
class DoneAllTodo extends React.PureComponent {
    render(){
        return(
            <>
                <div style={{paddingTop : "20px"}}>
        <Button type="primary" onClick={this.props.doneAll}>{this.props.children}</Button>
                </div>
            </>
        )

    }
}
export default DoneAllTodo