import App from "./App";
import { createHashRouter } from "react-router-dom";
import * as Component from "@components";
import { AppRoutingPaths } from "@constants";

export const AppRouting = createHashRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Component.Home,
            },
            {
                path: AppRoutingPaths.PREPA,
                Component: Component.Prepa
            },
        ]
    }
])