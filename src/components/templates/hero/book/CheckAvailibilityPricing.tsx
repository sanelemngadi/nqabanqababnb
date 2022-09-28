import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { projectColors } from "../../../../styles/theme";
import { TextInput, SelectInput, FormGroup } from "../../../../styles/hero";

interface Props {
    sm?: boolean,
}
const CheckAvailabilityPricing: FC<Props> = ({ sm }) => {
    const [formData, setFormData] = useState({
        startdate: new Date().toISOString().split('T')[0],
        enddate: new Date().toISOString().split('T')[0]
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    }

    return (
        <Paper
            component="form"
            target="_blank"
            action="https://www.nightsbridge.co.za/bridge/book"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                margin: "0.1rem auto",
                padding: '1rem',
            }}
        >
            <input type="hidden" name="action" value="2" />
            <input type="hidden" name="bbid" value="32135" />
            <input type="hidden" name="nbid" value="952" />
            <input type="hidden" name="bbrtid" value="0" />
            <input type="hidden" name="rtgroupid" value="0" />
            <FormGroup>
                <Typography
                    variant='h5' component='h3'
                    sx={{
                        textTransform: 'uppercase',
                        color: projectColors.primary,
                        margin: "1rem 0"
                    }}
                >Nqabanqaba bnb</Typography>
                <Typography
                    variant='body1' component='h6'
                    sx={{
                        color: projectColors.secondary,
                        margin: "1rem 0",
                        fontSize: '12px'
                    }}
                >Please note that this page does&apos;t imply that this room is currently available, you have to check its availibility below</Typography>
                <Divider />
                <label htmlFor="availabilty-select">Region</label>
                <SelectInput pricing={1}
                    id="availabilty-select"
                // value={10}
                >
                    <option >Richards Bay</option>
                </SelectInput>
            </FormGroup>
            <FormGroup>
                <label htmlFor="check-in">Check in</label>
                <TextInput
                    id="check-in"
                    type='date'
                    name="startdate"
                    required
                    value={formData.startdate}
                    onChange={(e) => handleChange(e)}

                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="check-out">Check out</label>
                <TextInput
                    id="check-out"
                    placeholder="Check out"
                    type='date'
                    name="enddate"
                    required
                    value={formData.enddate}
                    onChange={(e) => handleChange(e)}
                />
            </FormGroup>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Button variant="contained"
                    color="secondary"
                    type='submit'
                    disableElevation
                    sx={{
                        display: "flex",
                        alignItems: "cente",
                        width: '100%',
                        height: '40px',
                        backgroundColor: projectColors.secondary,
                        color: projectColors.primary,
                        borderRadius: '8px',
                        marginTop: '1rem'
                    }}
                >
                    Check Availability
                </Button>
            </Box>
        </Paper>
    );
}

export default CheckAvailabilityPricing;