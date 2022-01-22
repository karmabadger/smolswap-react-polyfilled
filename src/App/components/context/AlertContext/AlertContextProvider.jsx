import AlertContext from "./AlertContext";

const AlertContextProvider = ({
    showTimedAlert,
    timedAlertVariant,
    timedAlertMessage,
    timedAlertSeverity,
    timedAlertTimeout,
    timedAlertProgressBarActive,
    setShowTimedAlert,
    setTimedAlertVariant,
    setTimedAlertMessage,
    setTimedAlertSeverity,
    setTimedAlertTimeout,
    setTimedAlertProgressBarActive,
    showTimedSnackbar,
    timedSnackbarVariant,
    timedSnackbarMessage,
    timedSnackbarSeverity,
    timedSnackbarTimeout,
    timedSnackbarProgressBarActive,
    setShowTimedSnackbar,
    setTimedSnackbarVariant,
    setTimedSnackbarMessage,
    setTimedSnackbarSeverity,
    setTimedSnackbarTimeout,
    setTimedSnackbarProgressBarActive,
    childrenEl }) => {
    return (
        <AlertContext.Provider value={{
            showTimedAlert,
            timedAlertVariant,
            timedAlertMessage,
            timedAlertSeverity,
            timedAlertTimeout,
            timedAlertProgressBarActive,
            setShowTimedAlert,
            setTimedAlertVariant,
            setTimedAlertMessage,
            setTimedAlertSeverity,
            setTimedAlertTimeout,
            setTimedAlertProgressBarActive,
            showTimedSnackbar,
            timedSnackbarVariant,
            timedSnackbarMessage,
            timedSnackbarSeverity,
            timedSnackbarTimeout,
            timedSnackbarProgressBarActive,
            setShowTimedSnackbar,
            setTimedSnackbarVariant,
            setTimedSnackbarMessage,
            setTimedSnackbarSeverity,
            setTimedSnackbarTimeout,
            setTimedSnackbarProgressBarActive,

            addTimedAlert: function (variant, message, severity, timeout, progressBarActive) {
                this.setShowTimedAlert(true);
                this.setTimedAlertVariant(variant);
                this.setTimedAlertMessage(message);
                this.setTimedAlertSeverity(severity);
                this.setTimedAlertTimeout(timeout);
                this.setTimedAlertProgressBarActive(progressBarActive);
            },

            addTimedSnackbar: function (variant, message, severity, timeout, progressBarActive) {
                this.setShowTimedSnackbar(true);
                this.setTimedSnackbarVariant(variant);
                this.setTimedSnackbarMessage(message);
                this.setTimedSnackbarSeverity(severity);
                this.setTimedSnackbarTimeout(timeout);
                this.setTimedSnackbarProgressBarActive(progressBarActive);
            },



        }} children={childrenEl}></AlertContext.Provider>
    );
};

export default AlertContextProvider;