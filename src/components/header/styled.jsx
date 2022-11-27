import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

export const HeaderLink = styled(NavLink)({
    color: 'white',
    textDecoration: 'none'
});
export const HeaderInner = styled(Toolbar)({
    display: 'grid'
});