<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
      <b-col>
        <h1>Shopping Cart</h1>  
        <ShoppingCart/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import {Store} from './components/store/Store';
import Navbar from '@/components/Navbar';
import ShoppingCart from '@/components/ShoppingCart';


export default {
  name: 'App',
  components: {
    Navbar,
    ShoppingCart
  }
}
</script>
