import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { userName, email, password, onInputChange, onResetForm } = useForm({
        userName: '',
        email: '',
        password: ''
    });


  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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
        <input 
            type="password" 
            name='password' 
            placeholder='Contraseña' 
            className='form-control mt-2' 
            onChange={onInputChange} 
            value={password}  
        />

        <button onClick={onResetForm} className='btn btn-primary mt-2'>Reset</button>
    </>
  )
}
