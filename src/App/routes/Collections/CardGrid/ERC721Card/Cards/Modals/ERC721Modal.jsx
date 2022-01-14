import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import Popper from "@mui/material/Popper";

import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import ClickAwayListener from '@mui/base/ClickAwayListener';


// import useWindowScroll from "@/hooks/useWindowScroll";
// import useWindowDimensions from "@/hooks/useWindowDimentions";

import smol from "../../../../../../../__mock_data__/img/smol.png";

// const StyledModal = styled(ModalUnstyled)`
//   position: fixed;
//   z-index: 1300;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;

// `;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ERC721Modal = ({ open, handleClose, id, anchorEl }) => {

    // const { height, width } = useWindowDimensions();

    // const scrollState = -(document.body.scrollTop || document.documentElement.scrollTop)

    // const height =
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight
    // console.log("scrollState", scrollState);
    return (
        <Popper id={id} open={open}

            sx={{
                width: "100%",
                height: "100%",
            }}
            anchorEl={anchorEl}

            placement="top"
            disablePortal={false}
            modifiers={[
                {
                    name: "offset",
                    enabled: true,
                    options: {
                        // offset: [0, 2 * scrollState],
                        offset: [0, -1400],
                    },
                },
                {
                    name: 'flip',
                    enabled: false,
                    options: {
                        altBoundary: true,
                        rootBoundary: 'viewport',
                        padding: 8,
                    },
                },
                {
                    name: 'preventOverflow',
                    enabled: false,
                    options: {
                        altAxis: true,
                        altBoundary: true,
                        tether: true,
                        rootBoundary: 'document',
                        padding: 8,
                    },
                },
            ]}>

            <List
                sx={{
                }}>
                <ListItem>

                    <Card sx={{ width: "500px" }}>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={smol}
                        />
                        <CardContent
                            style={{ paddingBottom: "21px" }}
                            sx={{
                                px: "16px",
                            }}
                        >

                            <Typography variant="h4">
                                Smol Brain #4324
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Owned by: 0x0000000000000000000000000000000000
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                4314 $MAGIC
                            </Typography>
                            <Typography variant="h6">
                                Properties:
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                background: gray (13.88% have this trait)
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                background: gray (13.88% have this trait)
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                background: gray (13.88% have this trait)
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                background: gray (13.88% have this trait)
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                background: gray (13.88% have this trait)
                            </Typography>
                        </CardContent>

                        <Button variant="contained">Buy Now</Button>
                        <Button variant="contained">Link</Button>
                    </Card>
                </ListItem>
            </List>
        </Popper >
    );
}

export default ERC721Modal;