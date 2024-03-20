// Code: ProductService.jsx
export const ProductService = {
    getProductsData() {
        return [
            {
                id: '001',
                name: 'The Swimming Pig Gastropub',
                image: 'https://lh3.googleusercontent.com/p/AF1QipOnHc9nC4Y5bkmvjc0O84g63siwIszTfdrDAS2w=s680-w680-h510',
                category: 'Bar',
                rating: 5
            },
            {
                id: '002',
                name: "Curly's Restaurant and Bar",
                image: 'https://lh3.googleusercontent.com/p/AF1QipOgqNPSr4f3wmJqpkgLpUe2APA9OvF8CO10U1kS=s680-w680-h510',
                category: 'Dining & Bar',
                rating: 4.3
            },
            {
                id: '003',
                name: "Bahamian Cookin' Restaurant and Bar",
                image: 'https://lh3.googleusercontent.com/p/AF1QipM3wUzvqepKGOqv9qYYjWoQzy2-WyQxTjAkFcRO=s680-w680-h510',
                category: 'Dining & Bar',
                rating: 4.4
            },
            {
                id: '004',
                name: 'Oh Andros',
                image: 'https://lh3.googleusercontent.com/p/AF1QipPMTMRTU07NhMwUKROzhbTkoiiyeh-q3J24loti=s680-w680-h510',
                category: 'Bar',
                rating: 4.2
            },
            {
                id: '005',
                name: 'Crabs-n-Tings',
                image: 'https://lh3.googleusercontent.com/p/AF1QipO7ckh6111rDuFd-pWkocyreq7V0_tqI65MlN02=s680-w680-h510',
                category: 'Dining & Bar',
                rating: 4.6
            },
            {
                id: '006',
                name: 'Athena Cafe & Bar',
                image: 'https://lh3.googleusercontent.com/p/AF1QipNEbaCFtm7COkS2NlBWrmeAPlP899XtJKd2VtvM=s680-w680-h510',
                category: 'Dining & Bar',
                rating: 4.5
            },
            {
                id: '007',
                name: 'Twin Brothers',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMoKD59kxTt-s9Eqh0ezOzHLsBXvhdOKcP6l74s=s680-w680-h510',
                category: 'Bar',
                rating: 4.2
            },
            {
                id: '008',
                name: "Sonia's Jerk",
                image: 'https://lh3.googleusercontent.com/p/AF1QipOyyHqIiZfJLAo1x24TD_C6a-sBMd6n8g3-Zare=s680-w680-h510',
                category: 'Dining & Bar',
                rating: 4.6
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};

