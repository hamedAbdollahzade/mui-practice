import { Drawer, Fab, Grid2 as Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import { useState } from "react";
import DrawerContent from "./DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const SideBar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Grid
        sx={{
          backgroundColor: grey[900],
        }}
        size={{ xs: 0, sm: 0, md: 3, lg: 2, xl: 2 }}
      >
        <Fab
          onClick={() => setDrawerOpen(true)}
          color="error"
          aria-label="Sidebar"
          size="small"
          sx={{
            m: 2,
            display: {
              md: "none",
            },
          }}
        >
          <MenuRounded />
        </Fab>
        <DrawerContent value={value} handleChange={handleChange} />
        <Drawer
          open={drawerOpen}
          variant="temporary"
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": { width: "40%" },
          }}
        >
          {/* Drawer */}
          <DrawerContent value={value} handleChange={handleChange} />
        </Drawer>
      </Grid>
    </>
  );
};

export default SideBar;

{
  /* <Tab
              label={
                <div>
                  <Typography variant="subtitle2" color="textPrimary">
                    خانه
                    <Home sx={{ verticalAlign: "middle", mx: 2 }} />
                  </Typography>
                </div>
              }
            /> */
}
