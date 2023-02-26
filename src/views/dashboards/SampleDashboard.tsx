import { BaseDashboard } from "@microsoft/teamsfx-react";
import { CSSProperties } from "react";
import { sampleDashboardStyle } from "../styles/SampleDashboard.style";

import ChartWidget from "../widgets/ChartWidget";
import { ListWidget } from "../widgets/ListWidget";

export default class SampleDashboard extends BaseDashboard<any, any> {
  protected styling(): CSSProperties | string {
    return sampleDashboardStyle;
  }

  protected layout(): JSX.Element | undefined {
    return (
      <>
        <ListWidget />
        <ChartWidget />
      </>
    );
  }
}
