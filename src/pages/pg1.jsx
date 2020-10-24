import React from 'react';
import '../components/signin.styles.css';
import ax from '../img/img_avatar2.png';
import fire from '../components/fireb';

class Pg1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{},
            email:'',
            password:''
        };
        console.log("pg1 working");
    }

    componentDidMount(){
        console.log("compoDidMount is runningggg!");
        this.myListener22();
        console.log("states after running the compoDidMount:",this.state.user);
        
    }

    myListener22 = ()=>{
        fire.auth().onAuthStateChanged((user)=>{
            console.log("this is auth use from myListener but where's the concole??? :",user);
            if(user){
                this.setState({user});
                console.log("a user exists now!",this.state)
              //   localStorage.setItem('userrr',user.uid);
            }
            else{
                this.setState({user:null});
                console.log("a user doesn't exist!",this.state)
              //   localStorage.removeItem('userrr')
            }
        })
    }
    login = (e) =>{
        e.preventDefault();
        console.log("login started!");
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u)=>console.log("this is the result of SignIn functionality:",u))
        .then(()=>console.log("states after login: ",this.state))
        .catch(err=>console.log("Error oops!:",err))
    }
    signup = (e)=>{
        e.preventDefault();
        console.log("Sign up running!");
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(user=>console.log("this is the elem of a signup promise:",user))
        .then(()=>console.log("statesss after signup: ",this.state))
        .catch(err=>console.log("Errrrror: ",err));

    }
    logout=()=>{
        console.log("Logout triggered");
        fire.auth().signOut();
        console.log("states after logout:",this.state)
    }

    handleChange = (e) =>{
        e.preventDefault();
        console.log(e.target);
        // this.signup();
        
        // console.log("after inputs: ",this.state) 
    };

  inputChange = e =>{
    const {name,value} = e.target;
    console.log(e.target.value);
    this.setState({ [name]: value});
     };

    render(){
        return(
            <div> hi
            {this.state.user ?
            ( <div> 
                <h1>you are logged in</h1> 
                <button onClick={this.logout}>Sign out</button>
            </div> ):
            (<div className="modal"><form onSubmit={this.handleChange}>
            <div className="imgcontainer">
                   {/* <span onclick="document.getElementById('id01').style.display='none'" className="close" 
                   title="Close Modal">&times;</span> */}
                   <img src={ax} style={{width:"15%",height:"20%"}}alt="Avatar" className="avatar"/>
               </div>

               <div className="container">
                   <label for="uname"><b>Username</b></label>
                   <input type="text" placeholder="Enter Username" name="email"
                    onChange={this.inputChange} required/>

                   <label for="psw"><b>Password</b></label>
                   <input type="password" placeholder="Enter Password" name="password" 
                   onChange={this.inputChange} required/>
                       
                   <button type="submit" name="up" onClick={this.signup}>Sign up</button>
                   <button type="submit" name="in" onClick={this.login}>Sign in</button>

                   {/* <label>
                       <input type="checkbox" checked="checked" name="remember"/> Remember me 
                   </label> */}
               </div>

               <div className="container" style={{backgroundColor:"#f1f1f1"}}>

               
                   {/* <button type="button" onclick="document.getElementById('id01').style.display='none'" 
                   className="cancelbtn">Cancel</button> */}
                   {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
               </div>
                </form> </div>)}
           
            </div>
         
            );
        
    }

}
    
    

export default Pg1;