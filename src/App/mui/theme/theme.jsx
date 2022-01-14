import { createTheme } from '@mui/material/styles';

const theme = (themeType) => {
    if (themeType === 'dark') {
        return createTheme({
            palette: {
                mode: 'dark',
            },
        });
    } else {
        return createTheme({
            palette: {
                primary: {
                    main: '#651FFF',
                    contrastText: '#fff',
                },
                secondary: {
                    main: '#EF6C00',
                    dark: '#B53D00',
                    contrastText: '#fff',
                },
                text: { hint: 'rgba(0, 0, 0, 0.38)' }
            },
            typography: {
                // h3: {
                //     fontWeight: "normal",
                //     fontSize: "48px",
                //     lineHeight: "116.7%",
                // },
                // h6: {
                //     fontSize: "20px",
                //     fontWeight: "500",
                //     lineHeight: "160%",
                //     letterSpacing: "0.15px",
                // },
                // body1: {
                //     fontWeight: "normal",
                //     fontSize: "12px",
                //     lineHeight: "150%",
                //     letterSpacing: "0.15px",
                // },
            },
        });
    }
}
export default theme;