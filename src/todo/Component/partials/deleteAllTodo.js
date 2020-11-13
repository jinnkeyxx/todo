import React from 'react'
import { Button } from 'antd';
class DeleteAllTodo extends React.PureComponent {
    render(){
        return(
            <>
                <div style={{paddingTop : "20px"}}>
                    <Button type="danger" onClick={this.props.deleteAll}>Delete All</Button>
                </div>
            </>
        )

    }
}
export default DeleteAllTodo