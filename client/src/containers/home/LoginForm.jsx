import React  from 'react';
import {useHistory} from 'react-router-dom'


function LoginForm(){

    const history = useHistory();

  const onSubmit = async (data) => {
      // call api to login
        const response = await fetch('http://localhost:3001/api/login', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.username,
                password: data.password,
            })
        }).then((res) => {
            

            
            history.push('/wall');
        }).catch(() => {
            // not authenticated


        })

        console.log({response});

        // localhost/login
        // localhost/api/v1/login
        // localhost/api/users
        // localhost/api/posts
  };


 return (
     <section>

     </section>
     
 );

}

export default LoginForm;