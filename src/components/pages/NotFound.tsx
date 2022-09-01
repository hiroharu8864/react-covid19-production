import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { FcSupport } from "react-icons/fc";

const useStyles = makeStyles({
  btnStyle: {
    background: "glay",
    padding: "3px 50px",
    marginBottom: "10px",
    marginRight: "10px"
  }
});

export const NotFound: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom noWrap>
        <FcSupport />
        404 Not Found
      </Typography>
      <Button
        onClick={onClickHome}
        className={classes.btnStyle}
        variant="contained"
      >
        top page
      </Button>
    </>
  );
});
