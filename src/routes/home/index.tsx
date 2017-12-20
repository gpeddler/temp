import { SITEMAP } from "application/modules/sitemap";
import * as React from "react";
import { Link } from "react-router-dom";

const styles = require("./styles.pcss");

export const HomeRoute = () => (
    <div className={ styles.wrap }>
        <div className={ styles.guide }>
            <h1 className={ styles.title }>Image Survey</h1>
            <p className={ styles.desc }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis quam ut libero porta, at tempor erat pellentesque. Cras sagittis nisl eu accumsan vehicula. Maecenas ultrices elit vestibulum, maximus ex a, suscipit lectus. Quisque interdum justo est, gravida pulvinar libero viverra at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at lorem vel lectus pellentesque pulvinar.
            </p>
            <Link to={ SITEMAP.QUESTIONS } className={ styles.button }>Getting Start</Link>
        </div>
    </div>
);
