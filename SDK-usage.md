# SDK Usage

## BaseWidget

This class is the base class provides basic functionality to create a widget. The following table lists the methods that you can override to customize your widget.

| Methods     | Function                                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `getData()` | This method is used to get the data for the widget. You can implement it to get data from the backend service or from the Microsoft Graph API |
| `header()`  | Customize the content of the widget header                                                                                                    |
| `body()`    | Customize the content of the widget body                                                                                                      |
| `footer()`  | Customize the content of the widget footer                                                                                                    |
| `loading()` | Define the content to display while the widget is loading                                                                                     |
| `styling()` | Customize the widget style                                                                                                                    |

### getData()

The method returns a `Promise` object that contains the data. The data can be any type but it should be same as the state type statemented in the class definition.

Here's a sample widget implementation:

```tsx
import { Button, Text } from "@fluentui/react-components";
import { BaseWidget } from "@microsoft/teamsfx-react";
import { SampleModel } from "../models/sampleModel";
import { getSampleData } from "../services/sampleService";

interface SampleWidgetState {
  data?: SampleModel;
}

export class SampleWidget extends BaseWidget<any, SampleWidgetState> {
  async getData(): Promise<SampleWidgetState> {
    return { data: getSampleData() };
  }

  header(): JSX.Element | undefined {
    return <Text>Sample Widget</Text>;
  }

  body(): JSX.Element | undefined {
    return <div>{this.state.data?.content}</div>;
  }

  footer(): JSX.Element | undefined {
    return <Button>View Details</Button>;
  }
}
```

<p align="right"><a href="#table-of-contents">back to top</a></p>

## BaseDashboard

Create a file with the extension `.tsx` for your dashboard in the `src/dashboards` directory, for example, `YourDashboard.tsx`. Then, define a class that inherits the `BaseDashboard` class from [@microsoft/teamsfx-react](https://www.npmjs.com/package/@microsoft/teamsfx-react/v/3.0.1-alpha.ru6q1vrv0.0).

```tsx
export default class YourDashboard extends BaseDashboard<any, any> {}
```

The `BaseDashboard` class provides some methods that you can override to customize the dashboard layout. The following table lists the methods that you can override.

| Methods     | Function                             |
| ----------- | ------------------------------------ |
| `styling()` | Customize the style of the dashboard |
| `layout()`  | Define widgets layout                |

Here is an example to customize the dashboard layout.

```tsx
import { mergeStyles } from "@fluentui/react";
import { BaseDashboard } from "@microsoft/teamsfx-react";
import ListWidget from "../widgets/ListWidget";
import ChartWidget from "../widgets/ChartWidget";

export default class YourDashboard extends BaseDashboard<any, any> {
  protected styling(): string {
    return mergeStyles({
      gridTemplateColumns: "4fr 6fr",
    });
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
```

> Note: All methods are optional. If you do not override any method, the default dashboard layout will be used.

<p align="right"><a href="#table-of-contents">back to top</a></p>

# How to Override the Default Style

The Teams Toolkit provides some default styles for the dashboard and widget. You can customize the default style by overriding the `styling()` method in your dashboard or widget class.

## Override the default style for the widget

The `styling()` method in `BaseWidget` returns a `IWidgetClassNames` object that contains the following properties:

<table>
<tr>
<td> Property </td> <td> Meaning </td> <td> Default value </td>
</tr>
<tr>
<td> root </td> <td> The style of the dashboard or widget container. </td> <td>

```ts
{
  display: "grid",
  padding: "1.25rem 2rem 1.25rem 2rem",
  backgroundColor: tokens.colorNeutralBackground1,
  border: "1px solid var(--colorTransparentStroke)",
  boxShadow: tokens.shadow4,
  borderRadius: tokens.borderRadiusMedium,
  gap: tokens.spacingHorizontalL,
  gridTemplateRows: "max-content 1fr max-content"
}
```

</td>
</tr>
<tr>
<td> header </td> <td> The style of the header. </td> <td>

```ts
{
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
  }
}
```

</td>
</tr>
<tr>
<td> body </td> <td> The style of the body. </td> <td> none </td>
</tr>
<tr>
<td> footer </td> <td> The style of the footer. </td> <td>

```ts
  "& button": {
    width: "fit-content",
  }
```

</td>

</table>

> Note: You can refer the [design tokens](https://react.fluentui.dev/?path=/docs/concepts-migration-getting-started--page#design-tokens) document from Fluent UI to learn more about `tokens`.

Each property can receive a string which is a css class name. You can use the [mergeStyles()](https://github.com/microsoft/fluentui/blob/master/packages/merge-styles/README.md) method from the `@fluentui/react` package to generate css classes. Here is an example:

```tsx
  styling(): IWidgetClassNames {
    return {
      footer: mergeStyles({
        "& button": {
          color: tokens.colorBrandForeground1,
        },
      }),
    };
  }
```

## Override the default style for the dashboard

The Teams Toolkit provides a default style for the dashboard. The default style is as follows:

```ts
  display: "grid",
  gap: "20px",
  padding: "20px",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "4fr 6fr",
  ...(isMobile === true ? { gridTemplateColumns: "1fr", gridTemplateRows: "1fr" } : {}),
```

> Note: The `isMobile` variable is a boolean value that indicates whether the dashboard is displayed on a mobile device. You can use this value like `this.state.isMobile` in your dashboard class to customize the style for mobile devices. We assume that the dashboard is displayed on a mobile device if the screen width is less than 600px.

The `styling()` method in `BaseDashboard` returns a string which is also a css class name. Here is an example:

```tsx
  styling(): string {
    return mergeStyles({
      gridTemplateColumns: "6fr 4fr",
    });
  }
```

<p align="right"><a href="#table-of-contents">back to top</a></p>
