import * as d3 from "d3-format";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { Button, Text, ToggleButton } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  DataPie24Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";

import { DayRange, TimeModel } from "../../models/chartModel";
import {
  chart1Points_30D,
  chart1Points_60D,
  chart1Points_7D,
  chart2Points_30D,
  chart2Points_60D,
  chart2Points_7D,
  getTimeRange,
} from "../../services/chartService";
import { bodyStyle } from "../styles/ChartWidget.style";

interface IChartWidgetState {
  selectedRange: DayRange;
  chartProps: IChartProps;
  timeRange: TimeModel[];
}

export default class ChartWidget extends BaseWidget<any, IChartWidgetState> {
  async getData(): Promise<IChartWidgetState> {
    const chartPoints = [
      {
        legend: "Line 1",
        data: chart1Points_7D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data: chart2Points_7D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return { selectedRange: DayRange.Seven, chartProps: chartData, timeRange: getTimeRange() };
  }

  header(): JSX.Element | undefined {
    return (
      <div>
        <DataPie24Regular />
        <Text>Your chart</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  body(): JSX.Element | undefined {
    let { selector, chart } = bodyStyle;
    return (
      <div>
        <div className={selector}>
          {this.state.timeRange &&
            this.state.timeRange.map((t: TimeModel, i) => {
              return (
                <ToggleButton
                  appearance="transparent"
                  checked={this.state.selectedRange === t.range}
                  onClick={() =>
                    this.setState({
                      chartProps: this.retriveChartsData(t.range),
                      selectedRange: t.range,
                    })
                  }
                >
                  {t.name}
                </ToggleButton>
              );
            })}
        </div>

        <div className={chart}>
          {this.state.chartProps && (
            <AreaChart
              data={this.state.chartProps}
              legendsOverflowText={"Overflow Items"}
              yAxisTickFormat={d3.format(".1s")}
              wrapXAxisLables={false}
              legendProps={{
                allowFocusOnLegends: true,
              }}
            />
          )}
        </div>
      </div>
    );
  }

  footer(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
      >
        View details
      </Button>
    );
  }

  private retriveChartsData(r: DayRange): IChartProps {
    const chartPoints = [
      {
        legend: "Line 1",
        data:
          r === DayRange.Seven
            ? chart1Points_7D
            : r === DayRange.Thirty
            ? chart1Points_30D
            : chart1Points_60D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data:
          r === DayRange.Seven
            ? chart2Points_7D
            : r === DayRange.Thirty
            ? chart2Points_30D
            : chart2Points_60D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return chartData;
  }
}
