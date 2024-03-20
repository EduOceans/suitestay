import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

import Restaurants from '../restaurants/restaurants';

export default function BasicDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Places To See NearBy">
                    // Add the content to display map and places to see

                </TabPanel>
                <TabPanel header="Restruants NearBy">
                    <Restaurants />
                </TabPanel>
            </TabView>
        </div>
    )
}
        