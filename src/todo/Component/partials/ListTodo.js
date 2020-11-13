import React from 'react'
import styled , {keyframes} from 'styled-components'
import { bounce } from 'react-animations'
import { List , Checkbox , Typography } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
const {Text} = Typography
class ListTodo extends React.PureComponent{


    render(){

        return(
            <>
            <List style={{paddingTop : "20px"}}
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => {
                if(!item.show){

                    return <p style={this.props.style} className="deleted">deleted</p>
                }
                else {
                    return(
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Checkbox onChange={() =>this.props.doneTodo(item.id)} checked={item.done}>
                                {item.done ? (<Text delete type="danger">{item.title}</Text>) : (<Text>{item.title}</Text>)}
                            </Checkbox>}
                        />
                            <div>
                                <DeleteOutlined onClick={() => this.props.click(item.id)}/>
                            </div>
                        </List.Item>
                    )
                }


            }


            }
           />
           </>
        )
    }
}
// ListTodo.defaultProps = {
//     style : {
//         color : 'red'
//     }
// }

export default ListTodo