import React from 'react'
import { List, Avatar , Checkbox } from 'antd';

class ListTodo extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                },
            ]
        }
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    render(){
        return(
            <>
            <List style={{paddingTop : "20px"}}
            itemLayout="horizontal"
            dataSource={this.state.data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Checkbox onChange={this.onChange}></Checkbox>}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>
                    <Checkbox></Checkbox>
                </div>
            </List.Item>
            )}
           />
           </>
        )
    }
}
export default ListTodo