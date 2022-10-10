import React, { FC, useState } from "react";
import { projectColors } from "../../../../styles/theme";
import { TextInput, SelectInput, FormGroup } from "../../../../styles/hero";
import Typography from "../../../atoms/Typography";
import Box from "../../../atoms/Box";
import Button from "../../../atoms/Button";
import Divider from "../../../atoms/Divider";
import Form from "../../../atoms/Form";

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
                padding: '1rem',
                border: `1px solid ${projectColors.secondary}`
            }}
        >
            <>
                <input type="hidden" name="action" value="2" />
                <input type="hidden" name="bbid" value="32135" />
                <input type="hidden" name="nbid" value="952" />
                <input type="hidden" name="bbrtid" value="0" />
                <input type="hidden" name="rtgroupid" value="0" />
                <FormGroup>
                    <Typography
                        variant='h5'
                        sx={{
                            textTransform: 'uppercase',
                            margin: "1rem 0",
                            fontSize: '24px'
                        }}
                    >Nqabanqaba bnb</Typography>
                    <Typography
                        variant='p'
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
                            width: '100%',
                            height: '40px',
                            backgroundColor: projectColors.secondary,
                            color: projectColors.primary,
                            borderRadius: '8px',
                            marginTop: '1rem',
                            border: 0
                        }}
                    >
                        Check Availability
                    </Button>
                </Box>
            </>
        </Form>
    );
}

export default CheckAvailabilityPricing;