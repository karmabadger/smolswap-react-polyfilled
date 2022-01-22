import { forwardRef, useState, useEffect } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function CustomizedSnackbars({ message, severity, timeout, variant, progressBarActive,
    setShowTimedSnackbar,
}) {
    const [show, setShow] = useState(true);
    // const [progress, setProgress] = useState(0);

    // const progressUnit = 250;
    // const progressNumUnits = timeout / progressUnit;

    // const handleClick = () => {
    //     setShow(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShow(false);
        setShowTimedSnackbar(false);
    };


    useEffect(() => {
        setShow(true);
        setShowTimedSnackbar(true);
        const timeId = setTimeout(() => {
            setShow(false)
            setShowTimedSnackbar(false);
        }, timeout)

        return () => {
            clearTimeout(timeId)
        }
    }, [message, severity, timeout, setShowTimedSnackbar]);


    // useEffect(() => {
    //     setProgress(0);
    //     const timer = setInterval(() => {
    //         setProgress(
    //             (oldProgress) => {
    //                 if (oldProgress >= 100) {
    //                     clearInterval(timer);
    //                     return 0;
    //                 }
    //                 const diff = (100 / progressNumUnits);
    //                 return Math.min(oldProgress + diff, 100);
    //             }
    //         );
    //     }, progressUnit);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [message, severity, timeout, progressUnit, progressNumUnits]);


    return (
        <Snackbar open={show} autoHideDuration={timeout} onClose={handleClose}>
            <Box>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant={variant}

                    sx={{ width: '100%' }}>
                    {message}
                </Alert>
                {/* <Box>
                    {progressBarActive &&
                        <LinearProgress
                            sx={{
                                width: '100%',
                            }}
                            variant="determinate" value={progress}
                            color={severity}
                        />
                    }
                </Box> */}
            </Box>
        </Snackbar>
    );
}