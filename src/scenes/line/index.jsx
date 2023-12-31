import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line chart" subtitle="Use the line chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )
}
export default Line;
