import React, { useState } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';
import { classNames } from 'primereact/utils';

export default function RestaurantList() {
    const [layout, setLayout] = useState('grid');
    const [restaurants, setRestaurants] = useState(restruants); // Assuming you've defined restruants correctly

    const listItem = (restaurant) => {
        return (
            <div className="col-12" key={restaurant.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4')}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={restaurant.imageThumb} alt={restaurant.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{restaurant.name}</div>
                            <Rating value={parseFloat(restaurant.Rating)} readOnly cancel={false} />
                            <div className="flex align-items-center gap-3">
                                <Tag value={restaurant.Reviews} severity="info" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (restaurant) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={restaurant.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="text-2xl font-bold">{restaurant.name}</div>
                        <Rating value={parseFloat(restaurant.Rating)} readOnly cancel={false} />
                        <Tag value={restaurant.Reviews} severity="info" />
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (restaurant) => {
        if (!restaurant) {
            return;
        }

        if (layout === 'list') return listItem(restaurant);
        else if (layout === 'grid') return gridItem(restaurant);
    };

    const listTemplate = (restaurants) => {
        return <div className="grid grid-nogutter">{restaurants.map((restaurant) => itemTemplate(restaurant))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={restaurants} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    );
}
