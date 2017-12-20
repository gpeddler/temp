import { parseQueryString } from "application/modules/util";
import * as React from "react";
import { RouteComponentProps } from "react-router";

const styles = require("./styles.pcss");

export class ResultRoute extends React.Component<RouteComponentProps<any>> {
    render() {
        const query = parseQueryString(this.props.location.search);
        const count = query.count;

        return (
            <div>
                <h1 className={ styles.title }>{ `Correct Answer: ${count}` }</h1>
            </div>
        )
    }
}
