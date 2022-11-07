import { useState } from 'react'

export const SimpleForm = () => {

    const [form, setForm] = useState({
        userName: '',
        email: ''
    });

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name] : value
        });
    };

    const {userName, email} = form;

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input 
            type="text" 
            name='userName' 
            placeholder='Usuario' 
            className='form-control' 
            onChange={onInputChange} 
            value={userName}   
        />
        <input 
            type="email" 
            name='email' 
            placeholder='eperdomo@gmail.com' 
            className='form-control mt-2' 
            onChange={onInputChange} 
            value={email}  
        />
    </>
  )
}
