import React, {useState} from 'react';
import { Grid, TextField, Select, Button, InputLabel, FormControl } from '@material-ui/core';
import './LocationSelectBar.css';
import { IUserInput } from '../Common/Interfaces'

const regions = [
    {label: 'Africa', value: 'Africa'},
    {label: 'America', value: 'America'},
    {label: 'Asia', value: 'Asia'},
    {label: 'Australia', value: 'Australia'},
    {label: 'Europe', value: 'Europe'},
    {label: 'Pacific', value: 'Pacific'}
]

interface ILocationSelectBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function LocationSelectBar(props: ILocationSelectBarProps) {   
    const [SearchRegion, setSearchRegion] = useState<string | null>("Pacific");
    const handleSearchRegionChange = (s: string | null) =>{
        setSearchRegion(s);
    }

    const [SearchCity, setSearchCity] = useState<string | null>("Auckland");
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
            <FormControl>
                <InputLabel htmlFor="region-select-label">Region</InputLabel>
                <Select
                    labelId="region-select-label"
                    id="region-select"
                    value={SearchRegion}
                    onChange={e => handleSearchRegionChange(String(e.target.value))}>

                    {regions.map(region =>
                        <option key={region.value} value={region.value}>
                            {region.label}
                        </option>
                    )}
                </Select>
            </FormControl>
            
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="City"
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