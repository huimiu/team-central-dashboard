import React from "react";

import { mergeStyleSets } from "@fluentui/react";
import { Button, Spinner, Text, tokens } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";

import { ListModel } from "../models/listModel";
import { getListData } from "../services/listService";

const classNames = mergeStyleSets({
  root: {
    display: "grid",
    padding: "1.25rem 2rem 1.25rem 2rem",
    backgroundColor: tokens.colorNeutralBackground1,
    border: "1px solid var(--colorTransparentStroke)",
    boxShadow: tokens.shadow4,
    borderRadius: tokens.borderRadiusMedium,
    gap: tokens.spacingHorizontalL,
    gridTemplateRows: "max-content 1fr max-content",
  },
  header: {
    display: "grid",
    height: "max-content",
    "& div": {
      display: "grid",
      gap: tokens.spacingHorizontalS,
      alignItems: "center",
      gridTemplateColumns: "min-content 1fr min-content",
    },
    "& svg": {
      height: "1.5rem",
      width: "1.5rem",
    },
    "& span": {
      fontWeight: tokens.fontWeightSemibold,
      lineHeight: tokens.lineHeightBase200,
      fontSize: tokens.fontSizeBase200,
    },
  },
  body: {
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
  },
  footer: {
    "& button": {
      width: "fit-content",
    },
  },
  loading: {
    display: "grid",
    justifyContent: "center",
    height: "100%",
  },
});

interface IListWidgetState {
  data: ListModel[];
  loading?: boolean;
}

export default class ListWidgetNonSDK extends React.Component<any, IListWidgetState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await new Promise((f) => setTimeout(f, 1500));
    this.setState({ data: getListData(), loading: false });
  }

  render() {
    const { root, header, body, footer, loading } = classNames;
    const showLoading = this.state.loading !== false;
    return (
      <div className={root}>
        <div className={header}>
          <div>
            <List28Filled />
            <Text>Your List</Text>
            <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
          </div>
        </div>
        {showLoading ? (
          <div className={loading}>
            <Spinner label="Loading..." labelPosition="below" />
          </div>
        ) : (
          <>
            <div className={body}>
              {this.state.data &&
                this.state.data.map((t: ListModel) => {
                  return (
                    <div key={`${t.id}-div`}>
                      <div className="divider" />
                      <Text className="title">{t.title}</Text>
                      <Text className="content">{t.content}</Text>
                    </div>
                  );
                })}
            </div>
            <div className={footer}>
              <Button appearance="primary" size="medium">
                View Details
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
}
