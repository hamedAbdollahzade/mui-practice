import {
  ConnectWithoutContact,
  CopyrightRounded,
  Drafts,
  ExpandLess,
  ExpandMore,
  Face,
  FavoriteRounded,
  Home,
  Inbox,
  InboxRounded,
  MessageRounded,
  Send,
  StarBorder,
  TextSnippet,
} from "@mui/icons-material";
import avatar from "../assets/avatar.jpg";

import {
  Avatar,
  Box,
  Typography,
  Divider,
  Tabs,
  Tab,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Collapse,
  ListSubheader,
} from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { useState } from "react";

const DrawerContent = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <Avatar
        sx={{
          height: "100px",
          width: "100px",
          margin: "0 auto",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
        variant="rounded"
        src={avatar}
      >
        {" "}
        AB
      </Avatar>
      <Typography variant="caption" color={pink[500]}>
        Hamed AB
      </Typography>
      <Divider variant="middle" color="grey[800]" />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label={"صفحه اصلی"}
          icon={<Home />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": { minHeight: 50, m: 0.5 },
            backgroundColor: grey[800],
            borderRadius: 2,
          }}
          {...tabProps(0)}
        />

        <Tab
          label={"درباره من"}
          icon={<Face />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": { minHeight: 50, m: 0.5 },
            backgroundColor: grey[800],
            borderRadius: 2,
          }}
          {...tabProps(1)}
        />
        <Tab
          label={"رزومه من"}
          icon={<TextSnippet />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": { minHeight: 50, m: 0.5 },
            backgroundColor: grey[800],
            borderRadius: 2,
          }}
          {...tabProps(2)}
        />
        <Tab
          label={"ارتباط با من"}
          icon={<ConnectWithoutContact />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": { minHeight: 50, m: 0.5 },
            backgroundColor: grey[800],
            borderRadius: 2,
          }}
          {...tabProps(3)}
        />
        <Tab
          label={"نظرات دانشجویان"}
          icon={<MessageRounded />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": { minHeight: 50, m: 0.5 },
            backgroundColor: grey[800],
            borderRadius: 2,
          }}
          {...tabProps(4)}
        />
      </Tabs>
      <Divider />
      {/* List  */}
      <List
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          "&.MuiList-root": { backgroundColor: grey[900], color: "whitesmoke" },
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="primary">
          طراحی شده با
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 16 }}
          />
          <Typography variant="caption">
            کپی رایت 1401
            <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
