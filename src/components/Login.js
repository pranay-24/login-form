import React from 'react'
import {useState,useEffect} from 'react'
const Login = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState(false)
    const [errmessage,setErrmessage] = useState('')

    useEffect(() => {
      
     }, [])
    
    const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,password)
    setName('');
    setPassword('')

    }
  return (
    <> (success? (
        <div>
        <h1>form submitted successfully</h1>
        </div>
        
    ) : 
        (<div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text"
                   id="name"
                   required
                   value={name}
                   onChange={e=> setName(e.target.value)}

            />

              <label htmlFor="password"></label>
            <input type="password"
                   id="password"
                   required
                   value={password}
                   onChange={e=> setPassword(e.target.value)}

            />
        </form>

    </div>)
    )
    </>
  )
}

export default Login