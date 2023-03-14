import { mergeStyles } from "@fluentui/react";
import { Button, Spinner, Text, tokens } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";

import { ListModel } from "../models/listModel";
import { getListData } from "../services/listService";

const bodyStyle = mergeStyles({
  display: "grid",
  gap: "0.5rem",
  alignContent: "start",
  minWidth: "13.5rem",
  "& div": {
    display: "grid",
  },
  "& .divider": {
    margin: "0 -2rem 0.5rem",
    height: "1px",
    background: tokens.colorNeutralStroke2,
  },
  "& .title": {
    fontWeight: tokens.fontWeightSemibold,
  },
  "& .content": {
    fontSize: tokens.fontSizeBase200,
  },
});

const loadingStyle = mergeStyles({
  display: "grid",
  justifyContent: "center",
  height: "100%",
});

interface IListWidgetState {
  data: ListModel[];
}

export default class ListWidget extends BaseWidget<any, IListWidgetState> {
  async getData(): Promise<IListWidgetState> {
    await new Promise((f) => setTimeout(f, 1500));
    return { data: getListData() };
  }

  header(): JSX.Element | undefined {
    return (
      <div>
        <List28Filled />
        <Text>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  body(): JSX.Element | undefined {
    return (
      <div className={bodyStyle}>
        {this.state.data.map((t: ListModel) => {
          return (
            <div key={`${t.id}-div`}>
              <div className="divider" />
              <Text className="title">{t.title}</Text>
              <Text className="content">{t.content}</Text>
            </div>
          );
        })}
      </div>
    );
  }

  footer(): JSX.Element | undefined {
    return <Button appearance="primary">View Details</Button>;
  }

  protected loading(): JSX.Element | undefined {
    return (
      <div className={loadingStyle}>
        <Spinner label="Loading..." labelPosition="below" />
      </div>
    );
  }
}
