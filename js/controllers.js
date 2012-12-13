'use strict';

/* Controllers */


function MainMenuCtrl($scope) {
    
    
   
   
}
MainMenuCtrl.$inject = ['$scope'];


/*
 * Controller for the Model Page
 */

function ViewModelsCtrl($scope, Model){
    
    //Function to delete a model
    $scope.remove = function(model){
        
        //Delete model from server
        model.$delete(function(){
            /*
             * Deletes the model from the local list
             * by searching for the index then splicing
             */
            var modelIndex = $scope.models.indexOf(model);
            $scope.models.splice(modelIndex, 1);
        });
    };
    
}

ViewModelsCtrl.$inject = ['$scope', 'Model'];



function AddModelCtrl($scope, Model){
  
    
    
    //Adds a new models
    $scope.addNewModel = function(model){
        console.log(Model);
        //Create Vars
        var fd = new FormData(), newModel = new Model();
        
        //loop through files and add to fd
        jQuery.each($scope.filesToUpload, function(index, file){
            fd.append(index, file);
        });
        
        //Get Model data
        //Create New Model 
        newModel.name = $scope.model.name;
        newModel.model = $scope.model.number;
        newModel.collection = $scope.model.collection;
        
        //Add Model information
        fd.append("modelData", JSON.stringify({'name':newModel.name, 'model':newModel.model, 'collection':newModel.collection}));
        
        //Make ajax call
        jQuery.ajax('/model', {
            type:'POST',
            processData:false,
            contentType:false,
            data:fd,
            success: function(responseData, status){
                if(status==='success'){
                    //Assign id and image urls
                    newModel.modelID = responseData.model.modelID;
                    newModel.images = responseData.model.images;
                    //Add model to collection
                    $scope.models.push(newModel);
                    //Empty input fields
                    $scope.model={};
                    //Call directive function to clear upload files
                    $scope.clearFiles();
                }else{
                    
                }
                
            }
        });
      
    };
   
}

AddModelCtrl.$inject = ['$scope', 'Model'];



function ViewConfigsCtrl($scope, Configuration){
    
    
    
}

ViewConfigsCtrl.$inject = ['$scope', 'Configuration'];


function AddConfigCtrl($scope, Configuration){
     
    //Adds a new models
    $scope.addNewConfig = function(config){
        console.log('test');
        //close the modal
        $scope.showAddItemModal = false;
        //Initialize the configuration
        var newConfig = new Configuration();
        //Assign the properties
        newConfig.configuration = config.configuration;
        //save
        newConfig.$save(function(responseData, status){
            if(status === 'success'){
                console.log(responseData);
                //Assign the new id
                //newConfig.configID = responseData
            }
        });
      
    };
    
    
}

AddConfigCtrl.$inject = ['$scope', 'Configuration'];




function AddUpholCtrl($scope){
    $scope.modelConfigs = [];
    $scope.listConfigs = function(val){
        
        console.log($scope.uphol.model.configurations);
        console.log($scope.modelConfigs);
        $scope.modelConfigs = $scope.uphol.model.configurations;
    };
    
    //Adds a new models
    $scope.addNewModel = function(model){
        //Create Vars
        var fd = new FormData(), newModel = {};//new Model();
        //close the modal
        $scope.showAddItemModal = false;
        
        //loop through files and add to fd
        jQuery.each($scope.filesToUpload, function(index, file){
            fd.append(index, file);
        });
        
        //Get Model data
        //Create New Model 
        newModel.name = $scope.model.name;
        newModel.model = $scope.model.number;
        newModel.collection = $scope.model.collection;
        
        //Add Model information
        fd.append("modelData", JSON.stringify({'name':newModel.name, 'model':newModel.model, 'collection':newModel.collection}));
        
        //Make ajax call
        jQuery.ajax('/model', {
            type:'POST',
            processData:false,
            contentType:false,
            data:fd,
            success: function(responseData, status){
                if(status==='success'){
                    //Assign id and image urls
                    newModel.modelID = responseData.model.modelID;
                    newModel.images = responseData.model.images;
                    //Add model to collection
                    $scope.models.push(newModel);
                    //Empty input fields
                    $scope.model={};
                    //Call directive function to clear upload files
                    $scope.clearFiles();
                }else{
                    
                }
                
            }
        });
      
    };
    
    
    
}

AddUpholCtrl.$inject = ['$scope'];



function AddCustomerCtrl($scope, Customer){
    
    
    //Mehtods
    $scope.saveCustomer = function(){
        //New customer  
        var newCustomer = new Customer();
        //Apply the customer details first
        newCustomer.name = $scope.contact.name;
        newCustomer.email = $scope.contact.email;
        newCustomer.telephone = $scope.contact.email;
        newCustomer.fax = $scope.contact.email;
        
    };
}

AddCustomerCtrl.$inject = ['$scope', 'Customer'];

function AddSupplierCtrl($scope, Supplier, $location){
    
    
    //Mehtods
    
    
    //Method to save the supplier to the database
    $scope.save = function(){
        //New customer  and address objects
        var supplier = new Supplier(), address = {};
        //Apply the customer details first
        supplier.name = $scope.supplier.name;
        supplier.email = $scope.supplier.email;
        supplier.telephone = $scope.supplier.telephone;
        supplier.fax = $scope.supplier.fax;
        //Set the address        
        supplier.address1 = $scope.supplier.address1;
        supplier.address2 = $scope.supplier.address2;
        supplier.city = $scope.supplier.city;
        supplier.territory = $scope.supplier.territory;
        supplier.country = $scope.supplier.country;
        
        //terms and discount
        supplier.discount = $scope.supplier.discount;
        supplier.terms = $scope.supplier.terms;
        //Save the supplier
        
        supplier.$save(function(){
            $location.path("/suppliers");
        });
        
        
        
    };
}

AddSupplierCtrl.$inject = ['$scope', 'Supplier', '$location'];

//View supplierList controller
function ViewSuppliersCtrl($scope, Supplier, Poller){
    
    Poller.poll($scope, function(){
        $scope.supplierList = Supplier.query();
    });
    
    
}

ViewSuppliersCtrl.$inject = ['$scope', 'Supplier', 'Poller'];

function SupplierDetailCtrl($scope, Supplier, $routeParams, $location, Poller){
    
    Poller.poll($scope, function(){
        $scope.supplier =  Supplier.get({'id':$routeParams.id});
    })
    
    
    $scope.update = function(){
        console.log($scope.supplier);
        
        $scope.supplier.$save(function(data){
           
        });
    };
    
    $scope.remove = function(){
        $scope.supplier.$delete(function(){
            $location.path('/suppliers');
        })
        
    }
}

SupplierDetailCtrl.$inject = ['$scope', 'Supplier', '$routeParams', '$location', 'Poller'];


