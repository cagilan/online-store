import Vue from 'vue';
import products from '../json/products.json';

export const Store = new Vue({
    data() {
        return {
            products, 
            cart: []
        };
    },

    computed: {
        totalcost() {
            return this.cart.reduce((accum, product) => {
                return accum + product.details.price * product.quantity
            }, 0)
        }
    },

    methods: {
        addToCart(product) {
            const locationInCart = this.cart.findIndex(p => {
                return p.details === product;
            })

            if( locationInCart === -1 ) {
                this.cart.push({
                    details: product,
                    quantity: 1,
                    status: 'add'
                })
            } else {
                this.cart[locationInCart].quantity++;
            }
        },

        removeFromCart(product) {
            const locationInCart = this.cart.findIndex(p => {
                return p.details = product;
            })

            if( this.cart[locationInCart].quantity <= 1 ) {
                this.cart.splice(locationInCart, 1)
            } else {
                this.cart[locationInCart].quantity--;
            }
        }
    }
});