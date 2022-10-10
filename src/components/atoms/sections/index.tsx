import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { projectFonts } from '../../../styles/theme';
import Box from '../Box';
import Typography from '../Typography';

interface Props {
    head: string,
    subHead: string,
}

const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem 0;
`
const SectionHeading: FC<Props> = ({ head, subHead }) => {
    return (
        <Wrapper>
            <Typography
                variant="h3"
                sx={{
                    padding: "0 1rem",
                    fontWeight: "500",
                    fontFamily: projectFonts.secondary,
                    fontSize: "24px",
                    textAlign: "center"
                }}
                sm={{ fontSize: "36px" }}
            >
                {head}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    padding: "0 1rem",
                    color: "#6A6A6A",
                    fontFamily: projectFonts.secondary,
                    fontSize: "16px",
                    textAlign: "center",
                    marginTop: "8px",
                }}
                sm={{ fontSize: "24px" }}
                md={{ marginTop: "16px" }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default memo(SectionHeading);