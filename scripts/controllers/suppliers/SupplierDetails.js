'use strict';



function SupplierDetailCtrl($scope, Supplier, $routeParams, $location, SupplierContact, Notification){
    
    $scope.supplier =  Supplier.get({'id':$routeParams.id});
    
    //addS  contact to the supplier
    $scope.addContact = function(){
        
        $scope.supplier.contacts = $scope.supplier.contacts || [];
        
        $scope.supplier.contacts.push(angular.copy($scope.contact));
        
        $scope.contact = {};
        
        $scope.showAddContact = false;
        
        //Save changes
        $scope.supplier.$save();
        
    };
    
    //Remove a supplier contact
    $scope.deleteContact = function($index){
        
        var contact = SupplierContact.get({'id':$scope.supplier.contacts[$index].id}, function(){
           
            $scope.supplier.contacts.splice($index, 1);
            contact.$delete();
            
            $scope.supplier.$save();
            $scope.$apply();
        });
        
    
    };
    
    
    $scope.update = function(){
        //Notify
        Notification.display('Updating Supplier...', false); 
        $scope.map.getPosition($scope.supplier.address, function(position){
            //if
            //angular.extend($scope.supplier.address, position);
            $scope.supplier.$save(function(data){
                Notification.display('Supplier Updated');
            });
        }, function(){
            $scope.supplier.$save(function(){
                Notification.display('Updated');  
            });
        });
        
    };
    
    $scope.remove = function(){
        $scope.supplier.$remove(function(){
            
            $location.path('/suppliers');
        });
        
    }
}

SupplierDetailCtrl.$inject = ['$scope', 'Supplier', '$routeParams', '$location', 'SupplierContact', 'Notification'];


