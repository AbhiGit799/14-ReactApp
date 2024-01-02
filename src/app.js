import React, { Component } from 'react'

// export class App extends Component {

//   constructor()
//   {
//     super();
//     console.log("App Constructor Called!!");
//     this.state={
//         name:"Ajeet"
//     }
//   }  

//   changeName=()=>{
//     this.setState({
//         name:"Chandan"
//     })
//     //this.state.name="Pawan";
//   }

//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("App getDerivedStateFromProps() called.");
//     console.log(state);
//      return null;
//   }

//   render() {
//     console.log("App Render called");
//     return (
//       <div>
//         <h1>App Component</h1>
//         <hr />
//         <h2>Hi, {this.state.name}</h2>
//         <button type='button' onClick={this.changeName}> Change Name </button>
//       </div>
//     )
//   }
// }

// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           //name:this.props.name
//           name:"Ajeet Singh"
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Chandan Kumar"
//       })
//       //this.state.name="Pawan";
//     }
  
//     static getDerivedStateFromProps(props,state)
//     {
//         //before rendering we can get props + state here inside getDerivedStateFromProps
//       console.log("App getDerivedStateFromProps() called.");
//       console.log("Props from getDerivedStateFromProps() = " + props.name);
//       console.log("state from getDerivedStateFromProps() = "+state.name);
//      //  return null;
    
//      return {
//         name:props.name
//      }
    
//     }
  
//     render() {
//       console.log("App Render called");
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }


//recommended

// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           name:""
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Chandan Kumar"
//       })
//     }
  
//     static getDerivedStateFromProps(props,state)
//     {
      
//      //getDerivedStateFromProps called before render()
//      // getDerivedStateFromProps called in updating state.

//      console.log("App getDerivedStateFromProps() called.");
//      console.log("Props from getDerivedStateFromProps() = " + props.name);
//     console.log("state from getDerivedStateFromProps() = "+state.name);

        
//      return {
//         name:props.name
//      }
    
//     }
  
//     render() {
//       console.log("App Render called");
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }




// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           name:""
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Chandan Kumar"
//       })
//     }
  
//     static getDerivedStateFromProps(props,state)
//     {
      
//      //getDerivedStateFromProps called before render()
//      // getDerivedStateFromProps called in updating state.

//      console.log("App getDerivedStateFromProps() called.");      
//      return {
//         name:props.name
//      }
    
//     }

//     componentDidMount()
//     {
//         //after render()
//         //data binding in table
//         //called one time
//         // part of mounting phase
//         console.log("componentDidMount() called.");
//     }
  
//     render() {
//       console.log("App Render called");
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }




// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           name:""
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Chandan Kumar"
//       })
//     }
  
//     static getDerivedStateFromProps(props,state)
//     {
      
//      //getDerivedStateFromProps called before render()
//      // getDerivedStateFromProps called in updating state.

//      console.log("App getDerivedStateFromProps() called.");      
//      return {
//         name:props.name
//      }
    
//     }

//     componentDidMount()
//     {
//         //after render()
//         //data binding in table
//         //called one time
//         // part of mounting phase
//         console.log("componentDidMount() called.");
//     }

//     shouldComponentUpdate(props,state)
//     {
//         console.log("From App Component shouldComponentUpdate()");
//         return true;
//     }
  
//     render() {
//       console.log("App Render called");
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }





// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           name:"Ajeet"
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Raman Kumar"
//       })
//     }
  

//     shouldComponentUpdate(props,state)
//     {
//         console.log("From App Component shouldComponentUpdate()");
//         //return true;
//         return false; //render () not called again
//     }
  
//     render() {
//       console.log("App Render called");
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }




// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       console.log("App Constructor Called!!");
//       this.state={
//           name:"Ajeet"
//       }
//     }  
  
//     changeName=()=>{
//       this.setState({
//           name:"Raman Kumar"
//       })
//     }
  

//     shouldComponentUpdate(props,state)
//     {
//         console.log("From App Component shouldComponentUpdate()");
//         return true;
//        // return false; //render () not called again
//     }

//     getSnapshotBeforeUpdate(prevProps,prevState)
//     {
//       console.log("App getSnapshotBeforeUpdate()");
//       console.log(prevProps);
//       console.log(prevState);
//       return null;
//     }
  
//     componentDidUpdate = (prevProps,prevState)=>{
//         console.log("App componentDidUpdate()");
//         console.log(prevProps);
//         console.log(prevState);
//         console.log(this.state);
        
//         //Most frequent error.
//         //Give error. due to infinite loop
//         // this.setState({
//         //     name:"Mohan Kumar"
//         // })

//     }

//     render() {
//       console.log("App Render called");
//       console.log(this.state.name);
//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           <h2>Hi, {this.state.name}</h2>
//           <button type='button' onClick={this.changeName}> Change Name </button>
//         </div>
//       )
//     }
//   }


// class Home extends Component{
//     componentWillUnmount=()=>{
//         console.log("Unmounting Home Comp");
//     }
//     render()
//     {
//         return(<>
        
//         <h1>Home Component</h1>
        
//         </>)
//     }
// }

// class About extends Component{
//     componentWillUnmount=()=>{
//         console.log("Unmounting About Comp");
//     }
//     render()
//     {
//         return(<>
        
//         <h1>About Component</h1>
        
//         </>)
//     }
// }

// export class App extends Component {

//     constructor(props)
//     {
//       super(props);
//       this.state={
//         isShow:true 
//       }
//     }  
  
//     handlePage=()=>{
//      this.setState(state=>({
//         isShow:!state.isShow
//      }))
//     }

//     render() {
//       console.log("App Render called");
//       const {isShow} = this.state;

//       return (
//         <div>
//           <h1>App Component</h1>
//           <hr />
//           {
//             isShow?<Home/>:<About/>
//           }
//           <button type='button' onClick={this.handlePage}> {isShow?"Go To About":"Go To Home"} </button>
//         </div>
//       )
//     }
//   }



// export class App extends Component
// {
//     constructor()
//     {
//         super();
//         this.age=20;
//     }
 
//     changeAge = () =>{
//      this.age=19;
//      console.log(this.age);
//      this.forceUpdate();

//     }

//     render()
//     {
//         return(<>
//          <h2>My age is {this.age}</h2>
//          <button type='button' onClick={this.changeAge}>Change Age</button>
//         </>)
//     }
// }

import reactDOM from "react-dom";

export class App extends Component
{
    constructor()
    {
        super();

    }
 
    redHandler=()=>{
        reactDOM.findDOMNode(document.getElementById("red1")).style.color="red";
    }

    greenHandler=()=>{
        // we use this also in place of document.getElementById("green1") to color both elements.
         reactDOM.findDOMNode(document.getElementById("green1")).style.color="green";
    }

    render()
    {
        return(<>
         <h2 id="red1">Hello TechWorld!!</h2>
         <h3 id="green1">Hello John!!</h3>
         <br/>
         <button type='button' onClick={this.redHandler}>Set Red Color</button>
         &nbsp; &nbsp;
         <button type='button' onClick={this.greenHandler}>Set Green Color</button>
        
        </>)
    }
}




