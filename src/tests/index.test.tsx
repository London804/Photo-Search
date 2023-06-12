import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index';
import { endpoints } from '../pages/api/photos';
import { mockPhotos } from '../constants/photos.constant';


describe('fetchData', () => {
    afterEach(() => {
        jest.resetAllMocks(); // reset all mocked functions
    });

    test('It will render search and home on load', async () => {
        const mockCuratedPhotos = jest.spyOn(endpoints, 'getCuratedPhotos');
        // @ts-ignore
        mockCuratedPhotos.mockResolvedValue(mockPhotos);
        await render(<Home />)

        let element = screen.getByText('Home');
        let search = screen.getByTestId('search')
        expect(element).toBeInTheDocument();
        expect(search).toBeInTheDocument();
    })  

});




