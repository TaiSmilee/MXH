import React from "react";
import {
  Container,
  Typography,
  Tab,
  Tabs,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Grid,
} from "@mui/material";

function StudentDropoutAnalysis() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const predictionData = [
    { department: "Computer Science", totalStudents: 450, atRisk: 67, accuracy: "91%", precision: "88%", recall: "93%" },
    { department: "Engineering", totalStudents: 380, atRisk: 52, accuracy: "89%", precision: "86%", recall: "90%" },
    { department: "Business", totalStudents: 420, atRisk: 58, accuracy: "88%", precision: "85%", recall: "89%" },
    { department: "Arts & Sciences", totalStudents: 350, atRisk: 48, accuracy: "87%", precision: "84%", recall: "88%" },
  ];

  const riskFactors = [
    { label: "Academic Performance", description: "GPA and course completion rates", value: 85 },
    { label: "Attendance", description: "Class participation and engagement", value: 75 },
    { label: "Financial Status", description: "Payment history and financial aid", value: 70 },
    { label: "Course Load", description: "Number of enrolled credits", value: 65 },
    { label: "Social Integration", description: "Participation in campus activities", value: 60 },
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Student Dropout Analysis
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Early prediction of university student dropout using innovative multilevel machine learning
      </Typography>

      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Overview" />
        <Tab label="Predictions" />
        <Tab label="Risk Factors" />
      </Tabs>

      {/* Overview Tab (if needed, you can add content here) */}
      <TabPanel value={tabValue} index={0}>
        <Typography variant="body1" align="center">
          Welcome to the Student Dropout Analysis system. Navigate through the tabs to explore predictions and risk factors.
        </Typography>
      </TabPanel>

      {/* Predictions Tab */}
      <TabPanel value={tabValue} index={1}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Prediction Metrics by Department
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Department</TableCell>
                <TableCell>Total Students</TableCell>
                <TableCell>At Risk</TableCell>
                <TableCell>Accuracy</TableCell>
                <TableCell>Precision</TableCell>
                <TableCell>Recall</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {predictionData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.totalStudents}</TableCell>
                  <TableCell>{row.atRisk}</TableCell>
                  <TableCell>{row.accuracy}</TableCell>
                  <TableCell>{row.precision}</TableCell>
                  <TableCell>{row.recall}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TabPanel>

      {/* Risk Factors Tab */}
      <TabPanel value={tabValue} index={2}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Risk Factors Analysis
          </Typography>
          <Typography variant="body2" gutterBottom>
            Key factors contributing to student dropout probability
          </Typography>
          {riskFactors.map((factor, index) => (
            <Box key={index} mb={2}>
              <Typography variant="subtitle1">{factor.label}</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {factor.description}
              </Typography>
              <Grid container alignItems="center">
                <Grid item xs={10}>
                  <LinearProgress
                    variant="determinate"
                    value={factor.value}
                    style={{ height: "10px", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid item xs={2} style={{ textAlign: "right" }}>
                  <Typography variant="body2">{factor.value}%</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Paper>
      </TabPanel>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default StudentDropoutAnalysis;
