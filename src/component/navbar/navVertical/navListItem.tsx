import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ThemeContext from "../../../theme/themeBackground";
// icon
import InboxIcon from "@mui/icons-material/MoveToInbox";

type Props = {};

const NavListItem: React.FC<any> = (props: Props) => {
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon sx={{ color: theme.color_Text }} />
            </ListItemIcon>
            <ListItemText primary="index" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default NavListItem;
