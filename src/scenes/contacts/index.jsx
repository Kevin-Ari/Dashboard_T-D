import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        {   field: "id", headerName: "ID", flex: 0.5 },
        {   field: "registrarId", headerName: "Registrar ID" },
        {   
            field: "name",
            headerNme: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerNme: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerNme: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerNme: "Email",
            flex: 1,
        },
        {   field: "address",
            headerNme: "Address",
            flex: 1, 
        },
        {   field: "city",
            headerNme: "City",
            flex: 1,
        },
        {   field: "zipCode",
            headerNme: "ZipCode",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle="Lista de contactos" />
            <Box
                m="40px 0 0 0" height="75vh" sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom:"none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none", 
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;