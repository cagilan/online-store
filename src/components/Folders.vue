<template>
        <div>
        {{fileredProducts}}
            <div v-for="folder in fileredProducts.propertyGroups">
                <div>
                    <div>
                        <b-card-group deck>
                        <b-card no-body border-variant="light" align="left" v-for="folderProperties in folder.properties">
                            <p class="card-header">{{folderProperties.title.nl}}</p>
                            <div v-for="folderOptions in folderProperties.options">
                                <div v-for="folderLang in folderOptions.name">
                                    <b-card-text>
                                        <b-list-group>
                                            <b-list-group-item>{{folderLang}}</b-list-group-item>
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
import folders from './json/folders.json';

    export default {
        name: 'Folders',
        data() {
            return {
                folderItems: folders
            }
        },
        computed: {
            fileredProducts() {
                    const updatedQueryList = [];
                    const pages = ['400gr_silk_mc'];
                    for (const query of this.folderItems.propertyGroups) {
                        let isMatching = false;
                        for(const query1 of query.properties) {
                            for(const query2 of query1.options) {
                                for (const page of pages) {
                                    if (query2.name && query2.name.nl === page) {
                                        isMatching = true;
                                    }
                                }
                                    if (isMatching) {
                                        updatedQueryList.push(query);
                                    }
                            }
                        }                        
                    }
                    return updatedQueryList;
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