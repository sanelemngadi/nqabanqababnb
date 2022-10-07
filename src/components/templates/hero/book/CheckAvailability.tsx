import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { projectColors, projectFonts } from "../../../../styles/theme";
import { TextInput, SelectInput, FormGroup } from "../../../../styles/hero";

interface Props {
    sm?: boolean,
}
const CheckAvailability: FC<Props> = ({ sm }) => {
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
        <Stack
            component="form"
            target="_blank"
            action="https://www.nightsbridge.co.za/bridge/book"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: { xs: "column", md: sm ? 'column' : "row" },
                margin: "0.1rem auto",
            }}
        >
            <input type="hidden" name="action" value="2" />
            <input type="hidden" name="bbid" value="32135" />
            <input type="hidden" name="nbid" value="952" />
            <input type="hidden" name="bbrtid" value="0" />
            <input type="hidden" name="rtgroupid" value="0" />
            <FormGroup>
                <label htmlFor="availabilty-select">Region</label>
                <SelectInput
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
                        width: { xs: "100%", md: "203px" },
                        height: { xs: "40px", md: "54px" },
                        // backgroundColor: projectColors.secondary,
                        backgroundColor: '#2E3AA5',
                        // color: projectColors.primary,
                        color: '#EBEBEB',
                        borderRadius: 0,
                        fontFamily: projectFonts.primary,
                        fontWeight: 500
                    }}
                >
                    Check Availability
                </Button>
            </Box>
        </Stack>
    );
}

export default CheckAvailability;