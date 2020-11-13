import React from 'react'
import { Button } from 'antd';
class DeleteTodo extends React.PureComponent {
    render(){
        return(
            <>
                <div style={{paddingTop : "20px"}}>
                    <Button type="danger" onClick={this.props.delete}>Hidden</Button>
                </div>
            </>
        )

    }
}
export default DeleteTodo