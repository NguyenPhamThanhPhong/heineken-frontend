import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';

const Invoices = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // ID	Priority 	Uploaded at	Uploaded by	No. images

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "datetime",
            headerName: "Priority",
            flex: 1,
        },
        {
            field: "totalobj",
            headerName: "Uploaded at",
            flex: 1,
        },
        {
            field: "mostobj",
            headerName: "Uploaded by",
            flex: 1,
        },
        {
            field: "totalbrand",
            headerName: "No. images",
            flex: 1,
        }
    ];

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="Upload via Google Drive"
                    subtitle="Link your Google Drive to synchronize your image database"
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
                        <AddLinkOutlinedIcon sx={{ mr: "10px" }} />
                        Link your Drive
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

export default Invoices;
