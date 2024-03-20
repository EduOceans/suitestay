import React, { useState, useEffect } from 'react'
import { ProductService } from './service/restaurants_list'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { classNames } from 'primereact/utils'

export default function BasicDemo() {
    const [products, setProducts] = useState([])
    const [layout, setLayout] = useState('grid')

    useEffect(() => {
        ProductService.getProducts().then(data => setProducts(data.slice(0, 12)))
    }, [])

    const listItem = (product, index) => {
        return (
            <div className='col-12' key={product.id}>
                <div
                    className={classNames(
                        'flex flex-column xl:flex-row xl:align-items-start p-4 gap-4',
                        { 'border-top-1 surface-border': index !== 0 }
                    )}
                >
                    <img
                        className='w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round'
                        src={`${product.image}`}
                        alt={product.name}
                    />
                    <div className='flex flex-column sm:flex-row justify-content-center align-items-center xl:align-items-start flex-1 gap-4'>
                        <div className='flex flex-column align-items-center sm:align-items-start gap-3'>
                            <div className='text-2xl font-bold text-900'>{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className='flex align-items-center gap-3'>
                                <span className='flex align-items-center gap-2'>
                                    <i className='pi pi-tag'></i>
                                    <span className='font-semibold'>{product.category}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const gridItem = product => {
        return (
            <div className='col-12 sm:col-6 lg:col-12 xl:col-4 p-2' key={product.id}>
                <div className='p-4 border-1 surface-border surface-card border-round'>
                    <div className='flex flex-wrap align-items-center justify-content-between gap-2'>
                        <div className='flex align-items-center gap-2'>
                            <i className='pi pi-tag'></i>
                            <span className='font-semibold'>{product.category}</span>
                        </div>
                    </div>
                    <div className='flex flex-column align-items-center gap-3 py-5'>
                        <img
                            className='w-9 shadow-2 border-round'
                            src={`${product.image}`}
                            alt={product.name}
                        />
                        <div className='text-2xl font-bold'>{product.name}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                </div>
            </div>
        )
    }

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return
        }

        if (layout === 'list') return listItem(product, index)
        else if (layout === 'grid') return gridItem(product)
    }

    const listTemplate = (products, layout) => {
        return (
            <div className='grid grid-nogutter'>
                {products.map((product, index) => itemTemplate(product, layout, index))}
            </div>
        )
    }

    const header = () => {
        return (
            <div className='flex justify-content-end'>
                <DataViewLayoutOptions
                    layout={layout}
                    onChange={e => setLayout(e.value)}
                />
            </div>
        )
    }

    return (
        <div className='card'>
            <DataView
                value={products}
                listTemplate={listTemplate}
                layout={layout}
                header={header()}
            />
        </div>
    )
}
