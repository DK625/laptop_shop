// ** MUI Imports
import Grid from "@mui/material/Grid";
import AdminPannel from "../../Styles/AdminPannelWrapper";
import Achivement from "../Tables/Achivement";
import MonthlyOverview from "../Tables/MonthlyOverView";
import WeeklyOverview from "../Tables/WeeklyOverview";
import TotalEarning from "../Tables/TotalEarning";
import CardStatsVertical from "../../Styles/CardStatsVertical";
import CustomersTable from "../Tables/CustomersTable";
import {ThemeProvider, createTheme} from "@mui/material";
import {customTheme, darkTheme} from "../Theme/CustomTheme";
import "./Dashboard.css";
import RecentlyAddedLaptops from "../Tables/RecentlyAddedLaptops";
import SalesOverTime from "../Tables/SalesOverTime";
import RecentOrders from "../Tables/RecentOrders";
import {BriefcaseVariantOutline, CurrencyUsd, HelpCircleOutline, Poll} from "mdi-material-ui";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import api from "../../Config/api";
import AchivementYear from "../Tables/YearOverview";
import YearOverview from "../Tables/YearOverview";
import PieChart from "../Tables/PieChart";

const darkTheme1 = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#312d4b',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
});

// bg-[#28243d]
const Dashboard = () => {
    const {auth} = useSelector(store => store);
    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async ()=>{
            const res = await api.get(`/api/dashboard/yearly-revenue`)
            const res2 = await api.get(`/api/dashboard/product-revenue-percentages`)
            console.log('cls-linh-repo',res.data,res2.data);
            
        }
        getData()
    },[])

    return (
        <div className="adminContainer ">
            <ThemeProvider theme={customTheme}>
                <AdminPannel>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Achivement/>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <PieChart/>
                        </Grid>
                        {/* <Grid item xs={12} md={8}>
                            <MonthlyOverview/>
                        </Grid> */}
                        <Grid item xs={12} md={6} lg={4}>
                            <WeeklyOverview/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <YearOverview/>
                        </Grid>
                        
                        {/* <Grid item xs={12} md={6} lg={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CardStatsVertical
                                        stats="$25.6k"
                                        icon={<Poll/>}
                                        color="success"
                                        trendNumber="+42%"
                                        title="Total Profit"
                                        subtitle="Weekly Profit"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CardStatsVertical
                                        stats="$78"
                                        title="Refunds"
                                        trend="negative"
                                        color="secondary"
                                        trendNumber="-15%"
                                        subtitle="Past Month"
                                        icon={<CurrencyUsd/>}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CardStatsVertical
                                        stats="862"
                                        trend="negative"
                                        trendNumber="-18%"
                                        title="New Orders"
                                        subtitle="Weekly Orders"
                                        icon={<BriefcaseVariantOutline/>}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CardStatsVertical
                                        stats="15"
                                        color="warning"
                                        trend="negative"
                                        trendNumber="-18%"
                                        subtitle="Last Week"
                                        title="Sales Queries"
                                        icon={<HelpCircleOutline/>}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <CustomersTable/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={8}>
                            <RecentOrders/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={8}>
                            <RecentlyAddedLaptops/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <SalesOverTime/>
                        </Grid>

                        <Grid item xs={12}>
                            <CustomersTable/>
                        </Grid> */}
                    </Grid>
                </AdminPannel>
            </ThemeProvider>
        </div>
    );
};

export default Dashboard;
