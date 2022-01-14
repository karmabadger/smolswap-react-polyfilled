import { useState, useEffect } from 'react';

function getWindowScroll() {
    const { scrollX, scrollY } = window;
    return { scrollX, scrollY };
}

export default function useWindowScroll() {
    const [windowScroll, setWindowScroll] = useState(getWindowScroll());

    useEffect(() => {
        function handleScroll() {
            setWindowScroll(getWindowScroll());
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return windowScroll;
}
