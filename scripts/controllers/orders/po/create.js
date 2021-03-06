function CreatePOCtrl($scope, Supply, Supplier, PurchaseOrder, Notification){
    $scope.supplyList;
    $scope.supplierList = Supplier.query();
    $scope.po = new PurchaseOrder();
    //Methods
    
    //View Supplies
    $scope.supplies = function(){
        console.log($scope.supplier);
        if($scope.supplier){
            $scope.showSupplies = !$scope.showSupplies;
            $scope.showSuppliers = false;
        }
        
    };
    
    $scope.addSupplier = function(index){
        Notification.display('Woohoo this shiz works', 1000);
        $scope.po.supplier = $scope.supplierList[index];
        $scope.showSuppliers=false;
        $scope.supplyList = Supply.query({supplier_id:$scope.po.supplier.id});
    };
    
    $scope.addSupply = function(index){
        
        $scope.po.supplies = $scope.po.supplies || [];
        $scope.po.supplies.push($scope.supplyList[index]);
        $scope.showSupplies = false;
        $scope.showQuantity = true;
        
        
        
    };
    //Add Supplier
    $scope.add = function(supplier){
        $scope.sourceType = "supply";
        console.log('ok');
        if($scope.data.type == "supplier"){
            
            $scope.supplier = $scope.supplierList[$scope.data.index];
            $scope.query = null;
            $scope.showSuppliers = false;
            $scope.$apply();
        }else if($scope.data.type == "supply"){
            $scope.$apply(function(){
                angular.forEach($scope.supplyList, function(item){
                    if(item.id == $scope.data.index){
                        $scope.orderedSupplies.push(item);
                    }
                });
                
            });
            //$scope.orderedSupplies.push($scope.supplyList[$scope.data.index]);
        }
        
        
    };
    
    $scope.create = function(){
        
        //Verifies that the form is valid
        if($scope.form.$valid){
            
            
            $scope.po.$save(function(response){
                console.log(response);
                window.open(response.url, replace=false);
            });
        }
        
    };
    
    $scope.reset = function(){
        $scope.$apply(function(){
            $scope.supplier = null;
            $scope.orderedSupplies.length = 0;
        });
    };
    
    $scope.removeSupply = function(index){
        $scope.po.supplies.splice(index, 1);
        $scope.$apply();
    };
    
    
    //Validation functions
    $scope.hasOrderedSupplies = function(){
        return $scope.orderedSupplies.length === 0;
    };
    
    //shippign status
    $scope.orderedShipping = function(){
        return $scope.po.shipping ? ($scope.po.shipping.type == "none") ? false : true : false;
    };
    
}

CreatePOCtrl.$inject = ['$scope', 'Supply', 'Supplier', 'PurchaseOrder', 'Notification'];

