import { SITEMAP } from "application/modules/sitemap";
import { HomeRoute } from "application/routes/home";
import { QuestionsRoute } from "application/routes/questions";
import { ResultRoute } from "application/routes/result";
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../normalize.pcss";

export const EntryRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path={ SITEMAP.QUESTIONS } component={ QuestionsRoute } />
            <Route path={ SITEMAP.RESULT } component={ ResultRoute } />
            <Route path={ SITEMAP.HOME } component={ HomeRoute }/>
        </Switch>
    </BrowserRouter>
);
