'use strict';


// Declare app level module which depends on filters, and services
var EmployeeCenter = angular.module('EmployeeCenter', ['EmployeeCenter.filters','EmployeeCenter.services', 'EmployeeCenter.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    //Model routes
    when('/models', {templateUrl: 'partials/pages/view_models.html', controller: ViewModelsCtrl}).
    when('/models/:modelID/:index', {templateUrl:'partials/pages/model_details.html', controller: ViewModelsCtrl}).
    when('/models/add_model', {templateUrl:'partials/pages/add_model.html', controller: AddModelCtrl}).
    //configuration routes
    when('/configurations', {templateUrl: 'partials/pages/view_configurations.html', controller: ViewConfigsCtrl}).
    when('/configurations/add_configuration', {templateUrl:'partials/pages/add_configuration.html', controller:AddConfigCtrl}).     
    //upholstery routes
   // when('/upholstery', {templateUrl: 'partials/pages/view_upholsteries.html', controller: UpholCtrl}).
    when('/upholstery/add_upholstery', {templateUrl:'partials/pages/add_upholstery.html', controller:AddUpholCtrl}).
    //customer routes
    when('/customers/add_customer', {templateUrl:'partials/pages/add_customer.html', controller:AddCustomerCtrl}).
    //supplier routes
    when('/suppliers/add_supplier', {templateUrl:'partials/pages/supplier/add_supplier.html', controller:AddSupplierCtrl}).
    when('/suppliers', {templateUrl:'partials/pages/supplier/view_suppliers.html', controller:ViewSuppliersCtrl}).
    when('/suppliers/:id', {templateUrl:'partials/pages/supplier/supplier_details.html', controller:SupplierDetailCtrl}).
    //lumber routes
    when('/lumber', {templateUrl:'partials/pages/lumber/view_lumber.html', controller:ViewLumberCtrl}).
    when('/lumber/add_lumber', {templateUrl:'partials/pages/lumber/add_lumber.html', controller:AddLumberCtrl}).
    when('/lumber/:id', {templateUrl:'partials/pages/lumber/lumber_details.html', controller:LumberDetailsCtrl}).
    //foam routes
    when('/foam', {templateUrl:'partials/pages/foam/view_foam.html', controller:ViewFoamCtrl}).
    when('/foam/add_foam', {templateUrl:'partials/pages/foam/add_foam.html', controller:AddFoamCtrl}).
    when('/foam/:id', {templateUrl:'partials/pages/foam/foam_details.html', controller:FoamDetailsCtrl}).

    //leg routes
    when('/legs/add_leg', {templateUrl:'partials/pages/legs/add_leg.html', controller:AddLegCtrl}).
    //screw routes
    when('/screws/add_screw', {templateUrl:'partials/pages/screws/add_screw.html', controller: AddScrewCtrl}).
    when('/screws', {templateUrl:'partials/pages/screws/view_screws.html', controller: ViewScrewsCtrl}).

    //wool routes
    when('/wool/add_wool', {templateUrl:'partials/pages/wool/add_wool.html', controller: AddWoolCtrl}).
    when('/wool', {templateUrl:'partials/pages/wool/view_wool.html', controller: ViewWoolCtrl}).
    when('/wool/:id', {templateUrl:'partials/pages/wool/wool_details.html', controller: WoolDetailsCtrl}).
    //fabric routes
    when('/fabric/add_fabric', {templateUrl:'partials/pages/fabric/add_fabric.html', controller: AddFabricCtrl}).
    when('/fabric', {templateUrl:'partials/pages/fabric/view_fabrics.html', controller: ViewFabricsCtrl}).
    when('/fabric/:id/:index', {templateUrl:'partials/pages/fabric/fabric_details.html', controller: WoolDetailsCtrl}).
    /*
     * This section deals with orders
     */
    //purhcase order routes
    when('/purchase_orders/create_purchase_order', {templateUrl:'partials/pages/create_purchase_order.html', controller:CreatePOCtrl}).
    
    /*
     * this area deals with all the urls for the admin section of thes site
     */
    //Permissions
    when('/permissions', {templateUrl:'partials/pages/permissions/view_permissions.html', controller:ViewPermissionsCtrl}).
    //Groups
    when('/groups', {templateUrl:'partials/pages/groups/view_groups.html', controller:ViewGroupsCtrl}).
    when('/groups/add_group', {templateUrl:'partials/pages/groups/add_group.html', controller:AddGroupCtrl}).
    when('/groups/:id/:index', {templateUrl:'partials/pages/groups/group_details.html', controller:GroupDetailsCtrl}).
    //Users
    when('/users', {templateUrl:'partials/pages/users/view_users.html', controller:ViewUsersCtrl}).
    when('/users/add_user', {templateUrl:'partials/pages/users/add_user.html', controller:AddUserCtrl}).
    when('/users/:id/', {templateUrl:'partials/pages/users/user_details.html', controller:UserDetailsCtrl})
    
    
  }]);

