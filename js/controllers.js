'use strict';

/* Controllers */


function MainMenuCtrl($scope) {
    $scope.menuActions =[];
    $scope.subMenuItems =[];
    $scope.menuSections = [
        {
            section:'Products',
            categories: [
                {
                    'category':'Models',
                    'actions':['Add Model', 'View Models']
                
                },
                {
                    'category':'Configurations',
                    'actions':['Add Configuration', 'View Configurations']
                },
                {
                    'category':'Upholstery',
                    'actions':['Add Upholstery', 'View Upholsteries']
                },
                {'category':'Cabinets'},
                {'category':'Tables'},
                {'category':'Area Rugs'}
                
            ] 
        
        },
        {
            section:'Supplies',
            categories: [
                {
                    'category':'Fabric',
                    'actions':['Add Fabric']
                },
                {
                    'category':'Foam',
                    'actions':['Add Foam']
                    
                },
                {
                    'category':'Lumber',
                    'actions':['Add Lumber']
                },
                {
                    'category':'Legs',
                    'actions':['Add Leg']
                },
                {
                    'category':'Metal'
                },
                {
                    'category':'Paint'
                },
                {
                    'category':'Wool',
                    'actions':['Add Wool']
                }
                
            ] 
        
        },  
        {
            section:'Contacts',
            categories:[
                {
                    'category':'Customers',
                    'actions':['Add Customer']
                },
                {
                    'category':'Suppliers',
                    'actions':['Add Supplier']
                }
            ]
        },
        {
            section:'Orders',
            categories:[
                {'category':'Acknowledgements'},
                {'category':'Pending Orders'},
                {'category':'Shipping'},
                {
                    'category':'Purchase Orders',
                    'actions':['Create New Purchase Order']
                }
            ]
        },
        {
            section:'Administrator',
            categories: [
                {
                    'category':'Users',
                    'actions':['Add User', 'View Models']
                
                },
                {
                    'category':'Groups',
                    'actions':['Add Group', 'Add Permissions to Group']
                },
                {
                    'category':'Permissions',
                    'actions':['Add Permission']
                },
               
                
            ] 
        
        },
    ];
    
    $scope.changeSideMenu = function(index,target){
        $scope.showActionMenu=false;
            console.log(index);
            console.log(target);
            $scope.section = target.toUpperCase();
            $scope.categories = $scope.menuSections[index].categories;
    };
    
    $scope.listActions = function(index, target){
        $scope.showActionMenu = true;
        console.log($scope.showActionMenu);
        $scope.category = target;
        $scope.menuActions = $scope.categories[index].actions;
    };
    
   
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

function AddSupplierCtrl($scope, Supplier){
    
    
    //Mehtods
    
    //Method to save the supplier to the database
    $scope.saveSupplier = function(){
        //New customer  and address objects
        var newSupplier = new Supplier(), address = {};
        //Apply the customer details first
        newSupplier.name = $scope.contact.name;
        newSupplier.email = $scope.contact.email;
        newSupplier.telephone = $scope.contact.telephone;
        newSupplier.fax = $scope.contact.fax;
        //Set the address        
        newSupplier.address1 = $scope.contact.address1;
        newSupplier.address2 = $scope.contact.address2;
        newSupplier.city = $scope.contact.city;
        newSupplier.territory = $scope.contact.territory;
        newSupplier.country = $scope.contact.country;
        
        //Save the supplier
        
        newSupplier.$save(function(data){
            //Add supplier to 
            $scope.supplierList.push(newSupplier);
            console.log(newSupplier);
        });
        
    };
}

AddSupplierCtrl.$inject = ['$scope', 'Supplier'];

//View supplierList controller
function ViewSuppliersCtrl($scope, Supplier){
    console.log($scope.supplierList);
}

ViewSuppliersCtrl.$inject = ['$scope', 'Supplier'];

function SupplierDetailCtrl($scope, Supplier, $routeParams){
    
    $scope.supplier =  $scope.supplierList[$routeParams.index];
    
    $scope.updateSupplier = function(){
        console.log($scope.supplier);
        
        $scope.supplier.$save(function(data){
           
        });
    };
    
    $scope.deleteSupplier = function(){
        $scope.supplier.$delete()
        $scope.supplierList.splice($routeParams.index, 1);
        window.location = 'index.html#/supplier';
    }
}

SupplierDetailCtrl.$inject = ['$scope', 'Supplier', '$routeParams'];


