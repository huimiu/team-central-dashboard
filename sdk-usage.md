# SDK Usage

## Table of Contents

- [BaseWidget](#basewidget)
  - [getData()](#getdata)
  - [header()](#header)
  - [body()](#body)
  - [footer()](#footer)
  - [loading()](#loading)
  - [styling()](#styling)
- [BaseDashboard](#basedashboard)
  - [layout()](#layout)
  - [styling()](#styling)

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

The detailed definition of this method is as follows:

```tsx
protected async getData(): Promise<S> {
    return undefined;
}
```

This method is used to retrieve the data that the widget needs to display its content. It returns a Promise of type S, where S is a generic type that can be defined when inheriting from the BaseWidget class. By default, it returns undefined, but it can be overridden by developers to retrieve data from an API, database, or any other source.

The method is asynchronous, which means that it returns a Promise. Promises are used to handle asynchronous operations in JavaScript, such as network requests or database queries. When the Promise is resolved, it returns the data that the widget needs to display its content.

For example, suppose you have a widget that displays the weather for a specific location. In that case, you can override the getData method to retrieve the weather data from an API based on the location provided by the user.

Here is an example of overriding the getData method to retrieve data from an API:

```tsx
interface WeatherData {
  temperature: number;
  weatherCondition: string;
}

interface WeatherProps {
  location: string;
}

class WeatherWidget extends BaseWidget<WeatherProps, WeatherData> {
  protected async getData(): Promise<WeatherData> {
    const location = this.props.location;
    const apiKey = "your-api-key";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
```

### header()

The detailed definition of this method is as follows:

```tsx
protected header(): JSX.Element | undefined {
    return undefined;
}
```

The header method is a protected method provided to developers to define the header of a widget, which can include a title, subtitle, and other elements. By default, it returns undefined which means that the widget will not have a header.

The method returns a JSX element, which is a way to describe the UI of a component in a declarative way. JSX elements can include HTML-like tags, as well as references to other components and JavaScript expressions. When the element is rendered, it will be converted to HTML.

For example, you can override the header method to include a title and a subtitle in the header of the widget.

```tsx
protected header(): JSX.Element | undefined {
    return (
        <div className="header">
            <h2>Example Widget</h2>
            <p>This is an example widget.</p>
        </div>
    );
}
```

This is just a simple example, but the header method can be used to define more complex headers with any combination of HTML tags and components.

<p align="right"><a href="#table-of-contents">back to top</a></p>

### body()

The body method is a protected method provided to developers to override and define the content of the widget. It returns a JSX element or undefined. The detailed definition of this method is as follows:

```tsx
protected body(): JSX.Element | undefined {
    return undefined;
}
```

This method is used to define the content of a widget, which can include any UI elements such as text, images, charts, and tables. By default, it returns undefined which means that the widget will not have a body.

The method returns a JSX element, which is a way to describe the UI of a component in a declarative way. JSX elements can include HTML-like tags, as well as references to other components and JavaScript expressions. When the element is rendered, it will be converted to HTML.

For example, suppose you have a widget that displays a list of items. In that case, you can override the body method to display the list of items in a table or a list view.

Here is an example of overriding the body method to define a custom body:

```tsx
protected body(): JSX.Element | undefined {
    return (
        <div className="body">
              <table>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Description</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items.map((item) => (
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.description}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
    );
}
```

In conclusion, the body method is a useful method that allows developers to define the content of their widget. It can be overridden to include any elements that the developer wants to display in the body, such as charts, tables, lists, or any other UI elements.

<p align="right"><a href="#table-of-contents">back to top</a></p>

### footer()

The footer method is a protected method provided to developers to override and define the footer content of the widget. It returns a JSX element or undefined. The detailed definition of this method is as follows:

```tsx
protected footer(): JSX.Element | undefined {
    return undefined;
}
```

This method is used to define the footer content of a widget, which can include any UI elements such as text, links, or buttons. By default, it returns `undefined` which means that the widget will not have a footer.

The method returns a JSX element, which is a way to describe the UI of a component in a declarative way. JSX elements can include HTML-like tags, as well as references to other components and JavaScript expressions. When the element is rendered, it will be converted to HTML.

Here's an example of overriding the footer method to include a "View More" button:

```tsx
  protected footer(): JSX.Element {
  return (
    <div className="footer">
      <button className="view-more-button" onClick={this.onViewMoreClick}>
        View More
      </button>
    </div>
  );
}
```

In this example, the footer method is overridden to display a button with the text "View More". The onClick event is attached to the button, and a callback function named `onViewMoreClick` is defined to handle the event.

When the user clicks the "View More" button, the `onViewMoreClick` method will be called, and the developer can handle the event accordingly. This could involve opening a new page, displaying more data in the widget, or any other action that the developer wants to take.

Note that the view-more-button class is used to style the button. Developers can customize the style of the button by defining CSS rules for this class.

In conclusion, the footer method is a useful method that allows developers to define the footer content of their widget. By overriding this method, developers can include any elements that they want to display in the footer, including buttons like the "View More" button in this example.

<p align="right"><a href="#table-of-contents">back to top</a></p>

### loading()

The loading method is a method provided for developers to override and define the widget's appearance when data is being loaded. It returns a JSX.Element or undefined. If the user does not override this method, nothing will be displayed when data is being loaded.

In general, the loading method is useful when the widget is fetching data asynchronously and the UI needs to indicate to the user that the widget is in a loading state. The developer can use this method to display a loading spinner, progress bar or any other visual elements that can communicate to the user that data is being fetched.

Here's an example of overriding the loading method to display a spinner:

```tsx
protected loading(): JSX.Element | undefined {
  return (
    <div className={classNames.loader}>
      <Spinner label="Loading..." />
    </div>
  );
}
```

This example uses the Spinner component from the Microsoft Fluent UI library to display a loading indicator while data is being fetched. The classNames variable contains a set of CSS class names used to style the loading indicator.

<p align="right"><a href="#table-of-contents">back to top</a></p>

### styling()

The styling method is provided for developers to override and define the style classes of the widget elements. It returns an object of type `IWidgetClassNames`, which defines the class names for the root, header, body, and footer parts of the widget.

By default, if the styling method is not overridden, the widget will use the default style classes provided by the teamsfx library.

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

To customize the widget style, developers also can override the styling method and return an object with the desired class names. For example:

```tsx
class MyWidget extends BaseWidget<MyWidgetData> {
  protected styling(): IWidgetClassNames {
    return {
      header: "my-custom-header-class",
    };
  }
}
```

In this example, the styling method is overridden to set the header class to "my-custom-header-class". This class can then be used to apply a custom background color to the header element in CSS.

It's important to note that the class names returned by the styling method will be added to the existing default class names for the widget elements. Therefore, developers should ensure that their custom class names do not conflict with the default class names to avoid unintended effects on the widget style.

<p align="right"><a href="#table-of-contents">back to top</a></p>

## BaseDashboard

This class is the base class provides basic functionality to create a dashboard. The following table lists the methods that you can override to customize your dashboard.

| Methods     | Function                             |
| ----------- | ------------------------------------ |
| `layout()`  | Define widgets layout                |
| `styling()` | Customize the style of the dashboard |

### layout()

The `layout` method is a protected method provided by the `TeamsFx` SDK that allows developers to define the layout of the widget in the Teams app dashboard. This method returns a JSX.Element or undefined, which specifies the layout of the widget.

To override the layout method, developers need to implement their own layout logic and return a JSX.Element that represents the widget layout. Developers can use any valid JSX syntax to define the layout. For example, they can use Flexbox, Grid, or any other layout library to define the widget layout.

Here's an example of how to override the layout method to define a simple layout for a dashboard:

```tsx
protected layout(): JSX.Element | undefined {
  return (
    <div className="dashboard">
        <MyWidget1 />
        <MyWidget2 />
    </div>
  );
}
```

By overriding the `layout` method, developers have full control over the layout of the widget in the Teams app dashboard, and they can create custom layouts that best suit their needs.

<p align="right"><a href="#table-of-contents">back to top</a></p>

### styling()

The `styling()` method is provided to developers to customize the styling of the dashboard in their Teams app. By default, TeamsFX provides a set of pre-defined styles for the dashboard, but developers can override this method to provide a custom className for styling the dashboard. They can use CSS rules to customize the style of the dashboard, such as changing the background color or font size.

The method returns a string that represents the custom class name that will be used to apply the custom styles to the dashboard. If the method returns null, then the default styles will be used. The default style is as follows:

```ts
  display: "grid",
  gap: "20px",
  padding: "20px",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "4fr 6fr",
  ...(isMobile === true ? { gridTemplateColumns: "1fr", gridTemplateRows: "1fr" } : {}),
```

> Note: The `isMobile` variable is a boolean value that indicates whether the dashboard is displayed on a mobile device. You can use this value like `this.state.isMobile` in your dashboard class to customize the style for mobile devices. We assume that the dashboard is displayed on a mobile device if the screen width is less than 600px.

Here's an example of how to override the `styling()` method to apply custom styles to the dashboard:

```tsx
protected styling(): string {
  return mergeStyles({
    backgroundColor: "#f5f5f5",
    fontSize: "16px",
  });
}
```

This CSS rule sets the background color of the dashboard to #f5f5f5 and the font size to 16px.

Overall, the styling() method provides a flexible way for developers to customize the style of the dashboard according to their own preferences and requirements.

<p align="right"><a href="#table-of-contents">back to top</a></p>
