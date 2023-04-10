import React from 'react'
import {useState,useEffect,useRef} from 'react'
import {authContext} from '../context/AuthContext'
const Login = () => {
    const {auth,setAuth} =useContext(authContext);
    
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState(false)
    const [errmessage,setErrmessage] = useState('')

    const userRef = useRef();
    const errRef = useRef();

    const LOGIN_URL = '/auth'

    useEffect(() => {
      userRef.current.focus();
     }, [])
    
     useEffect(() => {
        
        setErrmessage('')
     }, [name,password])
     

    const handleSubmit = (e)=>{
    e.preventDefault();
   try {
    const response = axios.post(LOGIN_URL, 
       JSON.stringify({name,password})
        ,
        {
            headers:{'Content-Type':'application/json'}
        })
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({name,password,accessToken,roles})
   } catch (err) {
        // if(!err?.response){
        //     setErrmessage('no response received fro server');
        // }elseif( err.response?.status === 400) {

        // setErrmessage("user or password missing");
        // }elseif(err.response?.status===401){
        //     setErrmessage("unauthorized access");
        // }else{
        //     setErrmessage('login failed');

           
        // }
        errRef.current.focus();
   }

    setName('');
    setPassword('')
        setSuccess(true);
    }
  return (
    <>
    { success? (
        <div>
        <h1>form submitted successfully</h1>
        <p><a href="#">Go to home</a></p>
        </div>
        
    ) : 
        (<section>
            <p ref={errRef} className={errmessage? "errmsg": "offscreen"  }>{errmessage}</p>

        <form  onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text"
                ref={userRef}
                   id="name"
                   required
                   value={name}
                   onChange={e=> setName(e.target.value)}
                    autoComplete= 'false'
            />

              <label htmlFor="password"></label>
            <input type="password"
                   id="password"
                   required
                   value={password}
                   onChange={e=> setPassword(e.target.value)}

            />

            <button>Sign in</button>
        </form>

        <p>
            {/* Router link goes here*/}
            <a href="#">Need and accohnt , sign up!</a>
        </p>

    </section>)
    }
    </>
  )
}

export default Login