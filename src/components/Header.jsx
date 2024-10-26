import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { cloneElement } from "react";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;

    //  NOTE :   options (object [optional]):
    // options.disableHysteresis (bool [optional]): Defaults to false. Disable the hysteresis. Ignore the scroll direction when determining the trigger value.
    // options.target (Node [optional]): Defaults to window.
    // options.threshold (number [optional]): Defaults to 100. Change the trigger value when the vertical scroll strictly crosses this threshold (exclusive).

    const trigger = useScrollTrigger({
      // disableHysteresis این یک مقدار تاخیر ایجاد میکنه بین شناور شدنش یا نشدن
      disableHysteresis: true,
      threshold: 0,
    });

    return children
      ? cloneElement(children, {
          elevation: trigger ? 4 : 0,
        })
      : null;
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="sticky">
          {/* disableGutters for off Default padding Toolbar */}
          <Toolbar disableGutters sx={{gap:"20px"}}>
            <Typography variant="h6" sx={{ marginInline: 5 }}>
              به وبسایت خوش آمدید
            </Typography>
            <Button variant="contained" color="primary">
              رنگ Primary
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "costumeColor.one" }}
            >
              رنگ سفارشی
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
