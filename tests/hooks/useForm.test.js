import { renderHook, act } from "@testing-library/react";
import { useForm } from '../../src/hooks';

describe('pruebas en el useForm', () => { 
    
    const initialForm = {
        name: 'Edward Perdomo',
        email: 'eperdomo@ripley.com'
    }
    
    test('debe de retornar los valores por defecto', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function),
            onResetForm: expect.any( Function)
          })
    });

    test('debe de cambiar el nombre de la propiedad del form', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;
        const newValue = 'Juan';
        act(() => {
            onInputChange({target: {
                name: 'name',
                value: newValue
            }});
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de hacer el reset del formulario', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        const newValue = 'Juan';
        act(() => {
            onInputChange({target: {
                name: 'name',
                value: newValue
            }});
            onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});