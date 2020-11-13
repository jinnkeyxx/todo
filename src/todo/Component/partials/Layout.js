import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import ListTodo from './ListTodo'
import AddTodo from './addTodo'
import DeleteAllTodo from './deleteAllTodo'
import DeleteTodo from './deleteTodo'
import DoneAllTodo from './doneAllTodo'
import ShowAll from './showAll'
import {Layout , Row , Col} from 'antd'
const {Content} = Layout

class LayoutComponent extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            idTodo : 1,
            data : [

            ],
            name : "",
            style : {
                id : 1,
                display : 'block',
            },
        }
    }
    onSearch = (value) =>{
        console.log(value);
        this.setState({ data: [...this.state.data,{id: this.state.idTodo++, title : value , done : false , show : true}] , name : "" })
    }
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    onChangeName = (e) => {
        this.setState({name : e.target.value})
    }
    deleteTodo = (id) => {
        const newTodo = this.state.data.filter(item =>
            item.id !== id
        )
        this.setState({...this.state , data : newTodo})
    }
    doneTodo = (id) => {
        const newTodo = this.state.data.map(item => {
            return item.id === id ? {...item , done : !item.done} : item
        })
        this.setState({...this.state, data : newTodo})
    }
    doneAll = () => {
        const newTodo = this.state.data.map(item => {
            console.log(item.done);
           return item.done = {...item , done : true}
        })
        this.setState({...this.state , data : newTodo})
    }
    deleteAll = () => {
        const newTodo = []
        this.setState({...this.state , data : newTodo})
    }
    deleteTodo = () => {
        const newTodo =this.state.data.map(item => {
          return item.done ? {...item , show : false} : item
        })

        let a=  document.getElementsByClassName('delete')
        console.log(a);
        this.setState({...this.state , data : newTodo})

    }
    showAll = () => {
        const newTodo =this.state.data.map(item => {
            return !item.show ? {...item , show : true} : item
          })

          this.setState({...this.state , data : newTodo})
    }
    render(){
        return (
            <>
            <Layout className="layout">
                <HeaderComponent/>
                    <Content>
                        <Row>
                            <Col span={8} offset={8} style={{paddingTop : "20px"}}>
                                <AddTodo Search={this.onSearch} value={this.state.name} change={this.onChangeName}></AddTodo>
                                <Row>
                                    <Col>
                                        <DeleteAllTodo deleteAll={this.deleteAll}></DeleteAllTodo>
                                    </Col>
                                    <Col>
                                        <DoneAllTodo doneAll={this.doneAll}>Done All</DoneAllTodo>
                                    </Col>
                                    <Col>
                                        <DeleteTodo delete={this.deleteTodo}></DeleteTodo>
                                    </Col>
                                    <Col>
                                    <ShowAll showAll={this.showAll}></ShowAll>
                                    </Col>

                                </Row>

                                <ListTodo  data={this.state.data}  click={this.deleteTodo} doneTodo={this.doneTodo}/>

                            </Col>
                        </Row>
                    </Content>

                <FooterComponent/>
            </Layout>
            </>
        )
    }
}
export default LayoutComponent