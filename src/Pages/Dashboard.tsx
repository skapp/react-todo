
import Grid from "@material-ui/core/Grid";
import MainLayout from "./Shared/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}></Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}></Grid>
        {/* Recent Orders */}
        <Grid item xs={12}></Grid>
      </Grid>
    </MainLayout>
  );
};
export default Dashboard;
