import React, { useState, useContext } from 'react'
import {
    IconButton,
    makeStyles,
    List,
    ListItem,
    ListItemText,
    Drawer,
    Link,
    Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { AuthContext } from '../AuthService'

const UseStyles = makeStyles({
    list: {
        width: 250,
    }
});

const Menu = () => {
    const classes = UseStyles();
    const [state, setState] = useState(false)

    const user = useContext(AuthContext)

    return (
        <>
            {
                user &&
                <>
                    <IconButton
                        style={{ color: "#ffb74d" }}
                        aria-label='menu'
                        onClick={() => { setState(true) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={state} onClose={() => { setState(false) }} anchor="left">
                        <div className={classes.list}>
                            <List>
                                <Link href="/update">
                                    <ListItem button>
                                        <ListItemText primary='プロフィール' />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link href="/Room">
                                    <ListItem button>
                                        <ListItemText primary='トーク' />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link href="/todo">
                                    <ListItem button>
                                        <ListItemText primary='Todo' />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link href="/Recommended">
                                    <ListItem button>
                                        <ListItemText primary='おすすめ' />
                                    </ListItem>
                                </Link>
                                <Divider />
                                <Link href="/album">
                                    <ListItem button>
                                        <ListItemText primary='卒業アルバム' />
                                    </ListItem>
                                </Link>
                                <Divider />
                            </List>
                        </div>
                    </Drawer>
                </>
            }
        </>
    )
}

export default Menu