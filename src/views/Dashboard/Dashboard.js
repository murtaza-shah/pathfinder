import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs200, bugs300, bugs400, bugs500, bugs600, bugs700, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      
        
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "200 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs200}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "300 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs300}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "400 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs400}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "500 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs500}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "600 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs600}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Taken:"
            headerColor="primary"
            tabs={[
              {
                tabName: "700 Level",
                // tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs700}
                  />
                )
              }
            ]}
          />
        </GridItem>
        
      </GridContainer>
    </div>
  );
}

