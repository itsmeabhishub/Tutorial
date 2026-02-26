import  { Component } from 'react'
type stateType ={
    count:number
}

export class ClassComponent extends Component< {}, stateType> {

    constructor(props:{}){
        super(props)
        this.state = {
             count:1
        }
        }
        increase = () =>{
            this.setState(
                prev=>({
                    count: prev.count + 1
                })
            )
        }
        decrease = () =>{
            this.setState( 
                prev =>{
                if(prev.count <= 1){
                    return prev
                }
                return {
                    count: prev.count - 1
                }   
            })      
        }
    
  render(){
  const {count} = this.state
    return (
        <div className='welcome'>
      <div>Class Component</div>
      <div><h1>{count}</h1></div>
      <button onClick={this.increase} className='button'>Increase</button>
      <button onClick={this.decrease} className='button' disabled={count <= 1}>Decrease</button>
      </div>
    )
  }
}

export default ClassComponent