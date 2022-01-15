import { createTheme } from '@mui/material/styles';

const theme = (themeType) => {
    if (themeType === 'dark') {
        return createTheme({
            palette: {
                mode: 'dark',
                background: {
                    paperDark: '#303030',
                },
            },
            typography: {
                smh1: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: '600',
                    fontSize: '0.72rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.00938em',
                },
                smbody: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: '500',
                    fontSize: '0.65rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.00938em',
                }
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
                text: { hint: 'rgba(0, 0, 0, 0.38)' },
                background: {
                    paper: '#FFF',
                    default: '#FFF',
                    paperDark: '#FAFAFA',
                },
            },
            typography: {
                smh1: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: '600',
                    fontSize: '0.72rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.00938em',
                },
                smbody: {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: '500',
                    fontSize: '0.65rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.00938em',
                }
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
            components: {
                MuiButton: {
                    variants: [
                        {
                            props: { variant: "sm" },
                            style: {
                                fontSize: "0.6rem",
                            }
                        }
                    ]
                }
            },
        });
    }
}
export default theme;