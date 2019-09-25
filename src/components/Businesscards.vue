<template>
        <div>
            <div v-for="businesscards in businesscardsItems.propertyGroups">
                <div>
                    <div>
                        <b-card-group deck>
                        <b-card no-body border-variant="light" align="left" v-for="businesscardsProperties in businesscards.properties">
                            <p class="card-header">{{businesscardsProperties.title.nl}}</p>
                            <div v-for="businesscardsOptions in businesscardsProperties.options">
                                <div v-for="businesscardsLang in businesscardsOptions.name">
                                    <b-card-text>
                                        <b-list-group>
                                            <b-list-group-item>{{businesscardsLang}}</b-list-group-item>
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
import businesscards from './json/businesscards.json';

    export default {
        name: 'Businesscards',
        data() {
            return {
                businesscardsItems: businesscards
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