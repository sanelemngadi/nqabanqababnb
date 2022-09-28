import React, { FC } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { projectColors } from "../../../../styles/theme";
import { TextInput, SelectInput, FormGroup } from "../../../../styles/hero";

const CheckAvailability: FC = () => {


    return (
        <Stack
            component="form"
            target="_blank"
            action="https://www.nightsbridge.co.za/bridge/book"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: { xs: "column", md: "row" },
                margin: "0.1rem auto"
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
                        backgroundColor: projectColors.secondary,
                        color: projectColors.primary,
                        borderRadius: { xs: "8px", md: "100px" }
                    }}
                >
                    Check Availability
                </Button>
            </Box>
        </Stack>
    );
}

export default CheckAvailability;