import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'config/route/Route';

function ContentApp() {
    return (
        <Switch>
            {
                routes.map((route, index) =>
                    <Route key={index} path={route.path} exact={route.exact}>
                        {route.main}
                    </Route>
                )
            }
        </Switch>
    );
}

export default ContentApp;