import { Button, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import { bodyStyle } from "../styles/ListWidget.style";

interface IListWidgetState {
  data: ListModel[];
}

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends BaseWidget<any, IListWidgetState> {
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
  header(): JSX.Element | undefined {
    return (
      <div>
        <List28Filled />
        <Text>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  body(): JSX.Element | undefined {
    return (
      <div className={bodyStyle}>
        {this.state.data &&
          this.state.data.map((t: ListModel) => {
            return (
              <div key={`${t.id}-div`}>
                <div key={`${t.id}-divider`} className="divider" />
                <Text key={`${t.id}-title`} className="title">
                  {t.title}
                </Text>
                <Text key={`${t.id}-content`} className="content">
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
  footer(): JSX.Element | undefined {
    return (
      <Button appearance="primary" size="medium">
        View Details
      </Button>
    );
  }
}
