import { Grid2 as Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const ContentContainer = ({ children }) => {
  return (
    <>
      <Grid
        size={{ xs: 12, sm: 12, md: 9, lg: 10, xl: 10 }}
        sx={{ backgroundColor: green[800] }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Main Content ⚡
        </Typography>
        {children}
      </Grid>
    </>
  );
};

export default ContentContainer;
