import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(2),
    width: "290px",
    color: "#727e91",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  title: {
    marginLeft: "80px",
  },
  close: {
    marginLeft: "50px",
  },
  paragraph: {
    marginTop: "15px",
    color: "#727e91",
  },
  button: {
    backgroundColor: "#5aac44",
    color: "#fff",
    marginTop: "15px",
    border: "none",
    borderRadius: "4px",
    height: "30px",
    fontSize: "14px",
    letterSpacing: "0.2px",
    cursor: "pointer",
  },
}));

export default useStyles;
