import { CounterApp } from "../CounterApp";
import { render , screen, fireEvent} from "@testing-library/react"

describe('Pruebas sobre el componente CounterApp', () => {

    const value = 10;

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render( 
            <CounterApp/>
        );
        expect ( container ).toMatchSnapshot();
     })

     test('debe de mostrar el valor inicial de 100', () => {

        const {container} = render( 
            <CounterApp value = {value}/>
        );

        expect( screen.getByText(value) ).toBeTruthy();

     })

     test('Debe de incrementar con el boton +1', () => {

        render ( <CounterApp value = {value}/>);
        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByText('11') ).toBeTruthy();

     })

     test('Debe de decrementar con el boton -1', () => {

        render ( <CounterApp value = {value}/>);
        fireEvent.click( screen.getByText('-1') )
        
        expect( screen.getByText('9') ).toBeTruthy();

     })

     test('Debe de funcionar el boton de reset', () => {
        
        render ( <CounterApp value = {value}/>);
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) );
        //fireEvent.click( screen.getByText('reset') );
        
        expect( screen.getByText(value) ).toBeTruthy();
     })

})