import { createTheme } from '@mui/material/styles';
import { orange, common } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700],
            contrastText: common.white,
        },
    },
});
