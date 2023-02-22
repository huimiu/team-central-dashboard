import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";
import { widgetStyle } from "@microsoft/teamsfx-react/build/cjs/BaseWidget";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import {
  bodyContentStyle,
  dividerStyle,
  itemLayoutStyle,
  itemSubtitleStyle,
  itemTitleStyle,
} from "../styles/ListWidget.styles";

interface IListWidgetState {
  data: ListModel[];
}

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends BaseWidget<IListWidgetState> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  async getData(): Promise<IListWidgetState> {
    return { data: getListData() };
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  headerContent(): JSX.Element | undefined {
    const { headerContent, headerText } = widgetStyle;
    return (
      <div className={headerContent}>
        <List28Filled />
        <Text className={headerText}>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent(): JSX.Element | undefined {
    return (
      <div style={bodyContentStyle()}>
        {this.state.data &&
          this.state.data.map((t: ListModel) => {
            return (
              <div key={`${t.id}-div`} style={itemLayoutStyle()}>
                <div key={`${t.id}-divider`} style={dividerStyle()} />
                <Text key={`${t.id}-title`} style={itemTitleStyle()}>
                  {t.title}
                </Text>
                <Text key={`${t.id}-content`} style={itemSubtitleStyle()}>
                  {t.content}
                </Text>
              </div>
            );
          })}
      </div>
    );
  }

  /**
   * Define the widget footer.
   * @returns The footer content, all ReactNode types are supported.
   */
  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="primary"
        size="medium"
        onClick={() => {}} // navigate to detailed page
      >
        View Details
      </Button>
    );
  }
}
