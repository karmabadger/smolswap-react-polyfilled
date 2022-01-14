import { useState, useEffect } from 'react';

export default function useMatchMediaQuery(mediaQuery) {
    const mql = window.matchMedia(mediaQuery);
    const [mediaMatch, setMediaMatch] = useState(mql.matches);

    useEffect(() => {
        const mql = window.matchMedia(mediaQuery);
        console.log("mediaQuery", mediaQuery);
        function screenTest(e) {
            if (e.matches) {
                // match
                setMediaMatch(true);
            } else {
                // no match
                setMediaMatch(false);
            }
        }
        mql.addEventListener('change', screenTest);
        return () => mql.removeEventListener('change', screenTest);
    }, [mediaQuery]);

    return mediaMatch;
}
