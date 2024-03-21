import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import Restaurants from '../restaurants/restaurants';

export default function Explore() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Restaurants NearBy">
                    <Restaurants />
                </TabPanel>
            </TabView>
        </div>
    )
}
        