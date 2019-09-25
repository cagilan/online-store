<template>
	<div>
    	<b-table striped hover :items="cart" show-empty>
			
				
				<template>	
                <b-button variant="warning">test</b-button>
				</template>

		</b-table>
		<div>
			<!--div class="mt-3">
				<b-button-group>
				<b-button variant="success">Success</b-button>
				<b-button variant="danger">Info</b-button>
				</b-button-group>
			</div-->
			
        <p><b>Total Cost:</b></p>
		</div>
	</div>
</template>

<script>
import {Store} from './store/Store'
export default {
	computed: {
		cart(){
			return Store.$data.cart
		},
		totalCost(){
      return Store.totalCost
    }
	},
	methods: {
		removeFromCart(product){
			Store.removeFromCart(product[0].details)
		},
		addToCart(product){
			Store.addToCart(product);
		}
	}
}
</script>