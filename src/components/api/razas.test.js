import { render, screen } from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import Razas from './razas';
import React from 'react';

describe('Razas component', () => {
    test('renders component without errors', async () => {
        render(<Razas />);
        const razaTitle = screen.getByText(/RAZAS/i);
        expect(razaTitle).toBeInTheDocument();
        expect(razaTitle.tagName).toBe('H2');
    });

    test('fetches and displays data correctly', async () => {
        const fakeData = [
            {
                id: 1,
                name: 'Fake Breed 1',
                image: {
                    url: 'http://fake-image-1.com',
                },
                bred_for: 'Fake Bred For 1',
                origin: 'Fake Origin 1',
                temperament: 'Fake Temperament 1',
                life_span: 'Fake Life Span 1',
            },
            {
                id: 2,
                name: 'Fake Breed 2',
                image: {
                    url: 'http://fake-image-2.com',
                },
                bred_for: 'Fake Bred For 2',
                origin: 'Fake Origin 2',
                temperament: 'Fake Temperament 2',
                life_span: 'Fake Life Span 2',
            },
        ];
        const mockFetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeData),
            })
        );
        global.fetch = mockFetch;

        render(<Razas />);

        // Esperar a que se carguen los datos y se vuelva a renderizar el componente
        await screen.findByAltText('Fake Breed 1');

        expect(mockFetch).toHaveBeenCalledTimes(1);

        // Comprobar que los datos se han mostrado correctamente en la interfaz de usuario
        expect(screen.getByText(/Fake Breed 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Bred For 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Origin 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Temperament 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Life Span 1/i)).toBeInTheDocument();

        expect(screen.getByText(/Fake Breed 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Bred For 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Origin 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Temperament 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Fake Life Span 2/i)).toBeInTheDocument();
    });
});
