<template>
        <div>
            <div v-for="poster in posterItems.propertyGroups">
                <div>
                    <div>
                        <b-card-group deck>
                        <b-card no-body border-variant="light" align="left" v-for="posterProperties in poster.properties">
                            <p class="card-header">{{posterProperties.title.nl}}</p>
                            <div v-for="posterOptions in posterProperties.options">
                                <div v-for="posterLang in posterOptions.name">
                                    <b-card-text>
                                        <b-list-group>
                                            <b-list-group-item>{{posterLang}}
                                            <span @click='addToCart(posterLang)'>Add to cart</span>
                                            </b-list-group-item>
                                        </b-list-group>
                                    </b-card-text>
                                </div>                                        
                            </div>
                        </b-card>                        
                        </b-card-group>
                    </div>
                </div>                  
            </div>
        </div>
</template>

<script>
import posters from './json/posters.json';
import {Store} from './store/Store';

    export default {
        name: 'Posters',
        data() {
            return {
                posterItems: posters
            }
        },
        methods: {
            addToCart(posterLang){
                Store.addToCart(posterLang)
            }
        }
    }
</script>

<style>
    .homeText {
        font-size: 35px;
        color: red;
        text-align: center;        
    }
    .card-header {
        font-weight: bold;
    }
</style>