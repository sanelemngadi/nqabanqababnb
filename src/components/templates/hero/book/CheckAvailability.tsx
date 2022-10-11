import React, { FC, useState } from "react";
import { projectColors, projectFonts } from "../../../../styles/theme";
import { TextInput, SelectInput, FormGroup } from "../../../../styles/hero";

import Box from "@mmasco-atoms/Box";
import Button from "@mmasco-atoms/Button";
import Form from "@mmasco-atoms/Form";

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
        <Form
            component="form"
            target="_blank"
            action="https://www.nightsbridge.co.za/bridge/book"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                margin: "0.1rem auto",
            }}

            md={{ flexDirection: sm ? 'column' : "row" }}
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
                <Button
                    variant="contained"
                    color="secondary"
                    type='submit'
                    sx={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: '#2E3AA5',
                        color: '#EBEBEB',
                        borderRadius: 0,
                        fontFamily: projectFonts.primary,
                        fontWeight: 500,
                        border: "none",

                        ['&:hover']: {
                            border: "none",
                            color: projectColors.light
                        }
                    }}

                    md={{ width: '203px', height: "54px" }}
                >
                    Check Availability
                </Button>
            </Box>
        </Form>
    );
}

export default CheckAvailability;