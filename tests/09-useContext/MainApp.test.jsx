const { render, screen } = require("@testing-library/react");
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";


describe('Pruebas en <MainApp />', () => { 

    test('debe de mostrar el HomePage', () => { 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
        
    });

    test('debe de mostrar el LoginPage', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
        
    });

    test('debe de mostrar el AboutPage', () => { 
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
        
    });

    test('debe de mostrar el AboutPage', () => { 
        render(
            <MemoryRouter initialEntries={['/asdsdg']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
        
    });

});