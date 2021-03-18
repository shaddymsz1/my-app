import React, { Component, Fragment } from 'react';
import Countup from 'react-countup';
import { Doughnut, Bar } from 'react-chartjs-2';
import ChartistGraph from 'react-chartist';
import { taskChartData, taskChartOptions, barChartData, barChartOptions, projectsmall, projectsmall1 } from '../../../charts-data/default';
import { MoreHorizontal } from 'react-feather';
import configDB from '../../../data/customizer/config'

const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;


class HomeComponent extends Component {

    render() {
        return (
            <Fragment>
                <div className="tab-content active default" id="tab-1">
                </div>
            </Fragment>
        );
    }
}

export default HomeComponent;