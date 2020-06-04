import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import React from "react";
import "./style.css";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>Suicide Prevention</h1>
                </div>
            )
        }
        else if (this.activeTab === 1) {
            return (
                <div>
                    <h1>Mood Disorders and Depression</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>Addiction and Substance Abuse</h1>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onchange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Suicide Prevention</Tab>
                    <Tab>Mood Disorders and Depression</Tab>
                    <Tab>Addiction and Substance Abuse</Tab>
                </Tabs>

                <Grid className="cats-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Categories;