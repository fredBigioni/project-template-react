import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
    typography: {
        // logo: {
        //     color: 'white',
        //     fontFamily: [
        //     ],
        //     fontSize: '1.2rem'
        // },
        // navLinks: {
        //     color: 'white',
        //     fontFamily: [
        //     ],            
        // },
        // buttonFont: {
        //     color: 'white',
        //     fontFamily: [
        //     ],            
        // },

    },
    palette: {
        mode: 'light',
        primary: {
            light: '#f2f2f2',
            main: '#f2f2f2',
            dark: '#f2f2f2',
        },
        secondary: {
            light: '#808080',
            main: '#808080',
            dark: '#808080',
        },
        error: {
            light: '#d2c2e5',
            main: '#d2c2e5',
            dark: '#d2c2e5',
        },
        warning: {
            light: '#a1b3d9',
            main: '#a1b3d9',
            dark: '#a1b3d9',
        },
        info: {
            light: '#d1eaff',
            main: '#d1eaff',
            dark: '#d1eaff',
        },
        success: {
            light: '#e7f3e7',
            main: '#e7f3e7',
            dark: '#e7f3e7',
        }
        // palette: {
        //     mode: 'light',
        //     primary: {
        //         light: '#f9fafb',
        //         main: '#f9fafb',
        //         dark: '#f9fafb',
        //     },
        //     secondary: {
        //         light: '#f1f3f3',
        //         main: '#f1f3f3',
        //         dark: '#f1f3f3',
        //     },        
        //     error: {
        //         light: '#edebe3',
        //         main: '#edebe3',
        //         dark: '#edebe3',
        //     },
        //     warning: {
        //         light: '#f8f3e3',
        //         main: '#f8f3e3',
        //         dark: '#f8f3e3',
        //     },
        //     info: {
        //         light: '#4fc3f7',
        //         main: '#29b6f6',
        //         dark: '#0288d1',
        //     },
        //     success: {
        //         light: '#e7f3e7',
        //         main: '#e7f3e7',
        //         dark: '#e7f3e7',
        //     }
        // primary: {
        //     light: '#FFFFFF',
        //     main: '#EAEDED',
        //     dark: '#42a5f5',
        // },
        // secondary: {
        //     light: '#000000',
        //     main: '#7F8C8D',
        //     dark: '#FFFFFF',
        // },        
        // error: {
        //     light: '#e57373',
        //     main: '#f44336',
        //     dark: '#d32f2f',
        // },
        // warning: {
        //     light: '#ffb74d',
        //     main: '#ffa726',
        //     dark: '#f57c00',
        // },
        // info: {
        //     light: '#4fc3f7',
        //     main: '#29b6f6',
        //     dark: '#0288d1',
        // },
        // success: {
        //     light: '#81c784',
        //     main: '#66bb6a',
        //     dark: '#388e3c',
        // }
    }
})