import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "datetime",
            headerName: "Time",
            flex: 1,
        },
        {
            field: "totalobj",
            headerName: "Total objects",
            flex: 1,
        },
        {
            field: "mostobj",
            headerName: "Most popular object",
            flex: 1,
        },
        {
            field: "totalbrand",
            headerName: "Total brands",
            flex: 1,
        },
        {
            field: "mostbrand",
            headerName: "Most popular brand",
            flex: 1,
        },
    ];

    // const columns = [
    //   { field: "id", headerName: "ID", flex: 0.5 },
    //   { field: "registrarId", headerName: "Registrar ID" },
    //   {
    //     field: "name",
    //     headerName: "Name",
    //     flex: 1,
    //     cellClassName: "name-column--cell",
    //   },
    //   {
    //     field: "age",
    //     headerName: "Age",
    //     type: "number",
    //     headerAlign: "left",
    //     align: "left",
    //   },
    //   {
    //     field: "phone",
    //     headerName: "Phone Number",
    //     flex: 1,
    //   },
    //   {
    //     field: "email",
    //     headerName: "Email",
    //     flex: 1,
    //   },
    //   {
    //     field: "address",
    //     headerName: "Address",
    //     flex: 1,
    //   },
    //   {
    //     field: "city",
    //     headerName: "City",
    //     flex: 1,
    //   },
    //   {
    //     field: "zipCode",
    //     headerName: "Zip Code",
    //     flex: 1,
    //   },
    // ];

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="Extracted Features"
                    subtitle="List of extracted features from uploaded images"
                />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Full Reports
                    </Button>
                </Box>
            </Box>

            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={null || mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
