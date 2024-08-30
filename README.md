# Overview

**The IFrame Component** represents a nested browsing context, embedding another HTML page into your page.

![alt text](./public/image.png)

## Properties

| Name            | Type    | Default  | Description                                                                                                                   |
| --------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Name            | string  | 'iframe' | Name of the `iframe`                                                                                                          |
| HTML Content    | string  | ''       | HTML content of the `iframe`                                                                                                  |
| Height          | string  | '100%'   | Height of the `iframe`                                                                                                        |
| Width           | string  | '100%'   | Width of the `iframe`                                                                                                         |
| AllowFullscreen | boolean | false    | Allow fullscreen mode                                                                                                         |
| Allow           | string  | ''       | defines what features are available to the `iframe` (for example, access to the microphone, camera, battery, web-share, etc.) |
| Referrer Policy | string  | ''       | Indicates which referrer to send when fetching the `iframe`'s resource                                                        |
| Sandbox         | string  | ''       | Controls the restrictions applied to the content embedded in the `iframe`                                                     |
| Loading         | string  | 'eager'  | Controls the loading behavior of the `iframe`                                                                                 |

## Datasource

| Name       | Type     | Description                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| Datasource | `String` | A String Datasource that serves as the source (src) for the `IFrame` component |
