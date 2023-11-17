import { Button, Stack, IconButton, ButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return (
        <Stack spacing = {5}>
            <Stack spacing = {3} direction = 'row'>
                <Button variant = 'text' href = "https://www.google.com">Text</Button>
                <Button variant = 'contained'>Contained</Button>
                <Button variant = 'outlined'>Outlined</Button>
            </Stack>

            <Stack spacing = {3} direction = 'row'>
                <Button variant = 'contained' color = 'primary'>Text Primary</Button>
                <Button variant = 'contained' color = 'secondary'>Text Secondary</Button>
                <Button variant = 'contained' color = 'error'>Text Error</Button>
                <Button variant = 'contained' color = 'warning'>Text Warning</Button>
                <Button variant = 'contained' color = 'info'>Text Info</Button>
                <Button variant = 'contained' color = 'success'>Text Success</Button>
            </Stack>

            <Stack spacing = {3} direction='row' display = 'block'>
                <Button variant = 'contained' size = 'small'>Small</Button>
                <Button variant = 'contained' size = 'medium'>Medium</Button>
                <Button variant = 'contained' size = 'large'>Large</Button>
            </Stack>

            <Stack spacing = {3} direction='row'>
                <Button variant = 'contained' startIcon = {<SendIcon />} disableElevation>Start Icon</Button>
                <Button variant = 'contained' endIcon = {<SendIcon />} disableRipple> End Icon</Button>
            </Stack>

            <Stack spacing = {3} direction= 'row'>
                <IconButton color = 'success'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction = 'row'>
                <ButtonGroup variant = 'contained' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction = 'row'>
                <ButtonGroup variant = 'text' color = 'warning'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction = 'row'>
                <ButtonGroup variant = 'outlined' size = 'small' aria-label = 'alignment button group'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
        
    );
}

export default MuiButton;