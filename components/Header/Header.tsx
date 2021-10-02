import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './Header.module.css';


const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}> 
            <AppBar position="static">
                <Toolbar>
                    <Box m="0px 1% 0px 0px" >
                        <Image src='/images/LogoShark.png' className={styles.headerLogo} width='50%' height='50%' />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FinFriends
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;