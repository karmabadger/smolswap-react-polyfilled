
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

import LinearProgress from '@mui/material/LinearProgress';


const TimedAlert = ({
    message, severity, timeout, variant, progressBarActive,
    setShowTimedAlert,
}) => {

    const [show, setShow] = useState(true);
    const [progress, setProgress] = useState(0);

    const progressUnit = 250;
    const progressNumUnits = timeout / progressUnit;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShow(false);
        setShowTimedAlert(false);
    };

    useEffect(() => {
        setShow(true);
        const timeId = setTimeout(() => {
            setShow(false)
        }, timeout)

        return () => {
            clearTimeout(timeId)
        }
    }, [message, severity, timeout]);


    useEffect(() => {
        setProgress(0);
        const timer = setInterval(() => {
            setProgress(
                (oldProgress) => {
                    if (oldProgress >= 100) {
                        clearInterval(timer);
                        return 0;
                    }
                    const diff = (100 / progressNumUnits);
                    return Math.min(oldProgress + diff, 100);
                }
            );
        }, progressUnit);

        return () => {
            clearInterval(timer);
        };
    }, [message, severity, timeout, progressUnit, progressNumUnits]);


    if (show) {

        return (
            <Box

                sx={{
                    position: 'fixed',
                }}>
                <Alert
                    variant={variant}
                    onClose={handleClose}
                    severity={severity}

                    // PaperProps={{
                    //     sx: {
                    //         position: "fixed",
                    //     }
                    // }}

                    sx={{
                        position: 'fixed',
                        width: 1
                    }}
                >
                    <Box
                        sx={{
                            width: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                        }}

                    >

                        <Box
                            sx={{
                                width: '100%',
                            }}>
                            <Typography variant="body1"
                            >
                                {message}
                            </Typography>
                        </Box>

                    </Box>
                </Alert>
                <Box>
                    {progressBarActive &&
                        <LinearProgress
                            sx={{
                                width: '100%',
                                position: 'fixed',
                            }}
                            variant="determinate" value={progress}
                            color={severity}
                        />
                    }
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>

            </Box>
        )
    }

}

export default TimedAlert;