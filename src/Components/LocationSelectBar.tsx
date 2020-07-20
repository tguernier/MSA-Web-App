import React, {useState} from 'react';
import { Grid, TextField, Menu, MenuItem, Button } from '@material-ui/core';
import './LocationSelectBar.css';
import { IUserInput } from '../Common/Interfaces'

const regions = [
    'Africa',
    'America',
    'Asia',
    'Australia',
    'Europe',
    'Pacific'
]

interface ILocationSelectBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function LocationSelectBar(props: ILocationSelectBarProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const [SearchRegion, setSearchRegion] = useState<string | null>("");
    const handleSearchRegionChange = (s: string | null) =>{
        setSearchRegion(s);
        setAnchorEl(null);
    }

    const [SearchCity, setSearchCity] = useState<string | null>("");
    const handleSearchCityChange = (s: string | null) =>{
        setSearchCity(s);          
    }

    const handleSubmit = () => {
        console.log(SearchRegion);
        console.log(SearchCity);
        
        if (SearchCity?.length !== 0 && SearchCity !== null && SearchCity !== "") {
            let UserInput: IUserInput = {
                SearchCity: SearchCity,
                SearchRegion: SearchRegion,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    
                    {regions.map((region) => (
                    <MenuItem key={region} selected={region === 'Pacific'} onClick={() => handleSearchRegionChange(region)}>
                        {region}
                    </MenuItem>
                    ))}
                </Menu>
            </Grid>
            
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchCity === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchCity}
                    onChange={e => handleSearchCityChange(e.target.value)}
                />
            </Grid>

            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Location
                </Button>
            </Grid>
        </Grid>
    </div>
}

export default LocationSelectBar;