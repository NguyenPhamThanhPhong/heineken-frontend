import { Box, useTheme } from "@mui/material";
import React, { Component } from "react";
import { tokens } from "../../theme.js";
import StatBox from "../../components/StatBox";

export const SumUpCell = ({ params }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  var { title, subtitle, progress, increase, IconElem } = params;
  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={
          <IconElem sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
        }
      />
    </Box>
  );
};
