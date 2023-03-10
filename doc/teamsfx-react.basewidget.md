<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx-react](./teamsfx-react.md) &gt; [BaseWidget](./teamsfx-react.basewidget.md)

## BaseWidget class

The base component that provides basic functionality to create a widget.

**Signature:**

```typescript
export declare class BaseWidget<P, S> extends Component<P, S & BaseWidgetState> 
```
**Extends:** Component&lt;P, S &amp; BaseWidgetState&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./teamsfx-react.basewidget._constructor_.md) |  | Constructor of BaseWidget. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [body()](./teamsfx-react.basewidget.body.md) | <code>protected</code> | The purpose of this method is to provide a way for you to add custom body content to the widget. By overriding this method, you can add additional functionality or styling to the widget's body. If the method is not overridden, the widget will return undefined as the default value for the body, indicating that no custom body content has been defined. |
|  [componentDidMount()](./teamsfx-react.basewidget.componentdidmount.md) |  | Called after the component is mounted. You can do initialization that requires DOM nodes here. You can also make network requests here if you need to load data from a remote endpoint. |
|  [footer()](./teamsfx-react.basewidget.footer.md) | <code>protected</code> | The purpose of this method is to provide a way for you to add custom footer content to the widget. By overriding this method, you can add additional functionality or styling to the widget's footer. If the method is not overridden, the widget will return undefined as the default value for the footer, indicating that no custom footer content has been defined. |
|  [getData()](./teamsfx-react.basewidget.getdata.md) | <code>protected</code> | Get data required by the widget |
|  [header()](./teamsfx-react.basewidget.header.md) | <code>protected</code> | The purpose of this method is to provide a way for you to add custom header content to the widget. By overriding this method, you can add additional functionality or styling to the widget's header. If the method is not overridden, the widget will return undefined as the default value for the header, indicating that no custom header content has been defined. |
|  [loading()](./teamsfx-react.basewidget.loading.md) | <code>protected</code> | This method is typically called when the widget is in the process of fetching data. The <code>undefined</code> return value is used to indicate that no loading indicator is required. If a loading indicator is required, the method can return a <code>JSX.Element</code> containing the necessary components to render the loading indicator. |
|  [render()](./teamsfx-react.basewidget.render.md) |  | Defines the default layout for the widget. |
|  [styling()](./teamsfx-react.basewidget.styling.md) | <code>protected</code> | Override this method to returns an object that defines the class names for the different parts of the widget. The returned object conforms to the [IWidgetClassNames](./teamsfx-react.iwidgetclassnames.md) interface which defines the possible keys and values for the class names. |

