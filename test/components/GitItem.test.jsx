import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('pruebas en <GifItem />', () => {
    const title = 'Messi';
    const url = 'https://localhost/messi.jpg';
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL indicado y el ALT indicado', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        // screen.debug();
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
        // console.log(screen.getByRole('img').src);
    });
});
