<div class="container col-lg-4 col-lg-offset-4">
	<div class="form-group" ng-app="myShoppingList" ng-controller="myCtrl">
	    
        <ul class="list-group">
		   <li ng-if="error != '0'" class="list-group-item list-group-item-danger text-center error">
				Product {{error}} already present in cart.
		   </li>
		</ul>
 		
	    <ul class="list-group">
		    
			  <li ng-repeat="x in products" class="list-group-item d-flex justify-content-between align-items-center">
				{{x}}
				<span ng-click="removeItem($index)" class="glyphicon glyphicon-remove pull-right"></span>
			  </li>
		</ul>
	 
      <div class="row">	 
		  <input class="form-control int-text" placeholder="Enter Product name to add" ng-model="addMe">
		  <button ng-click="addItem()" class="btn btn-success">Add</button>
		  
		  
		  <button ng-click="saveItem()" class="btn btn-success pull-right">Save List</button>
	  </div>
	  
	</div>
</div>