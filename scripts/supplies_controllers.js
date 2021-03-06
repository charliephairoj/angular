//Controllers for supplies


/*
 * Lumber Area
 */

//controller to add lumber

function AddLumberCtrl($scope, Lumber, Supplier , $location, Poller){
    
    Polling.poll($scope, function(){
        $scope.supplierList = Supplier.query();
    }); 
    
    //Methods
    
    //Add Lumber
    $scope.save = function(){
        //declare vars
        var lumber = new Lumber();
        //copy properties
        angular.copy($scope.lumber, lumber);
        
        lumber.supplierID = $scope.lumber.supplier.id
        
        lumber.$save(function(data){
           $location.path('/lumber');
        })
    };
    
}

AddLumberCtrl.$inject = ['$scope', 'Lumber', 'Supplier', '$location', 'Poller'];

//update lumber

function ViewLumberCtrl($scope, Lumber){
    
    Poller.poll($scope, function(){
        $scope.lumberList = Lumber.query();
    });
    
    
}
ViewLumberCtrl.$inject = ['$scope', 'Lumber']


function LumberDetailsCtrl($scope, Lumber, $routeParams, $location, Poller){
    
    $scope.lumber = Lumber.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.lumber.$delete(function(){
            $location.path('/lumber');
        });
    };
    
    $scope.update = function(){
        $scope.lumber.$save()
    };
}

LumberDetailsCtrl.$inject = ['$scope', 'Lumber', '$routeParams', '$lumber', 'Poller']










/*
 * Legs
 */


//controller to add foam

function AddLegCtrl($scope){
    
    //Methods
    
    //Add Lumber
    $scope.addLeg = function(){
       
    };
    
    
    
}

AddLegCtrl.$inject = ['$scope'];


//controller to add foam

function AddWoolCtrl($scope, Supplier, Wool, $location, Poller){
    $scope.supplierList = Supplier.query();
    console.log(Supplier.query());
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var wool = new Wool();
       angular.copy($scope.wool, wool);
       wool.supplierID = $scope.wool.supplier.id;
       
        wool.$save(function(){
            $location.path('/wool')
       });
    };
    
    
    
}

AddWoolCtrl.$inject = ['$scope', 'Supplier', 'Wool', '$location', 'Poller'];


//controller to add foam

function ViewWoolCtrl($scope, Wool, Poller){
    
    Poller.poll($scope, function(){
        $scope.woolList = Wool.query();
    });
    
    //Methods
    
    
    
    
}

ViewWoolCtrl.$inject = ['$scope', 'Wool', 'Poller'];


function WoolDetailsCtrl($scope, Wool, $routeParams, $location, Poller){
    
    $scope.wool = Wool.get({'id':$routeParams.id})
    console.log($scope.wool);
    $scope.remove = function(){
        $scope.wool.$delete(function(){
            $location.path('/wool')
        });
        
    };
    
    $scope.update = function(){
        $scope.wool.$save()
    };
}

WoolDetailsCtrl.$inject = ['$scope', 'Wool', '$routeParams', '$location', 'Poller']

/*
 * Screw Controllers
 */

//controller to add foam

function AddScrewCtrl($scope, Supplier, Screw, $location, Poller){
    $scope.supplierList = Supplier.query();
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var screw = new Screw();
       angular.copy($scope.screw, screw);
       screw.supplierID = $scope.screw.supplier.id;
       
       screw.$save(function(){
            $location.path('/screws');
        });
    };
    
    
    
}

AddScrewCtrl.$inject = ['$scope', 'Supplier', 'Screw', '$location', 'Poller'];


//controller to add foam

function ViewScrewsCtrl($scope, Screw, Poller){
    
    Poller.poll($scope, function(){
        $scope.screwList = Screw.query();
    });
    
    //Methods
    
    
    
    
}

ViewScrewsCtrl.$inject = ['$scope', 'Screw', 'Poller'];


function ScrewDetailsCtrl($scope, Screw, $routeParams, $location, Poller){
    
    $scope.screw = Screw.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.screw.$delete(function(){
            $location.path('/screws');
        });
        
    };
    
    $scope.update = function(){
        $scope.screw.$save()
    };
}

ScrewDetailsCtrl.$inject = ['$scope', 'Screw', '$routeParams', '$location', 'Poller'];







/*
 * Staple Controllers
 */

//controller to add foam

function AddStapleCtrl($scope, Supplier, Staple, $location, Poller){
    $scope.supplierList = Supplier.query();
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var staple = new Staple();
       angular.copy($scope.staple, staple);
       staple.supplierID = $scope.staple.supplier.id;
       
       staple.$save(function(){
           $location.path('/staple');
       });
    };
    
    
    
}

AddStapleCtrl.$inject = ['$scope', 'Supplier', 'Staple', '$location', 'Poller'];


//controller to add foam

function ViewStaplesCtrl($scope, Staple, Poller){
    
    Poller.poll($scope, function(){
        $scope.stapleList = Staple.query();
    });
    
    //Methods
    
    
    
    
}

ViewStaplesCtrl.$inject = ['$scope', 'Staple', 'Poller'];


function StapleDetailsCtrl($scope, Staple, $routeParams, $location, Poller){
    
    $scope.staple = Staple.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.staple.$delete(function(){
            $location.path('/staples');
        });
        
    };
    
    $scope.update = function(){
        $scope.staple.$save()
    };
}

StapleDetailsCtrl.$inject = ['$scope', 'Staple', '$routeParams', '$location', 'Poller'];


/*
 * Webbing Controllers
 */

//controller to add foam

function AddWebbingCtrl($scope, Supplier, Webbing, $location, Poller){
    $scope.supplierList = Supplier.query();
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var webbing = new Webbing();
       angular.copy($scope.webbing, webbing);
       webbing.supplierID = $scope.webbing.supplier.id;
       
       webbing.$save(function(){
           $location.path('/webbing');
       });
    };
    
    
    
}

AddWebbingCtrl.$inject = ['$scope', 'Supplier', 'Webbing', '$location', 'Poller'];


//controller to add foam

function ViewWebbingsCtrl($scope, Webbing, Poller){
    
    Poller.poll($scope, function(){
        $scope.webbingList = Webbing.query();
    });
    
    //Methods
    
    
    
    
}

ViewWebbingsCtrl.$inject = ['$scope', 'Webbing', 'Poller'];


function WebbingDetailsCtrl($scope, Webbing, $routeParams, $location, Poller){
    
    $scope.webbing = Webbing.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.webbing.$delete(function(){
           $location.path('/webbing');
        });
        
    };
    
    $scope.update = function(){
        $scope.webbing.$save()
    };
}

WebbingDetailsCtrl.$inject = ['$scope', 'Webbing', '$routeParams', '$location', 'Poller'];


/*
 * Thread Controllers
 */

//controller to add foam

function AddThreadCtrl($scope, Supplier, Thread, $location, Poller){
    $scope.supplierList = Supplier.query();
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var thread = new Thread();
       angular.copy($scope.thread, thread);
       thread.supplierID = $scope.thread.supplier.id;
       
       thread.$save(function(){
           $location.path('/threads');
       });
    };
    
    
    
}

AddThreadCtrl.$inject = ['$scope', 'Supplier', 'Thread', '$location', 'Poller'];


//controller to add foam

function ViewThreadsCtrl($scope, Thread, Poller){
    
    Poller.poll($scope, function(){
        $scope.threadList = Thread.query();
    });
    
    //Methods
    
    
    
    
}

ViewThreadsCtrl.$inject = ['$scope', 'Thread', 'Poller'];


function ThreadDetailsCtrl($scope, Thread, $routeParams, $location, Poller){
    
    $scope.thread = Thread.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.thread.$delete(function(){
            $location.path('/threads');
        });
        
    };
    
    $scope.update = function(){
        $scope.thread.$save()
    };
}

ThreadDetailsCtrl.$inject = ['$scope', 'Thread', '$routeParams', '$location', 'Poller'];




/*
 * Thread Controllers
 */

//controller to add foam

function AddZipperCtrl($scope, Supplier, Zipper, $location, Poller){
    $scope.supplierList = Supplier.query();
    //Methods
    
    //Add Lumber
    $scope.save = function(){
       var zipper = new Zipper();
       angular.copy($scope.zipper, zipper);
       zipper.supplierID = $scope.zipper.supplier.id;
       
       zipper.$save(function(){
           $location.path('/zipper');
       });
    };
    
    
    
}

AddZipperCtrl.$inject = ['$scope', 'Supplier', 'Zipper', '$location', 'Poller'];


//controller to add foam

function ViewZipperCtrl($scope, Zipper, Poller){
    
    Poller.poll($scope, function(){
        $scope.zipperList = Zipper.query();
    });
    
    //Methods
    
    
    
    
}

ViewZipperCtrl.$inject = ['$scope', 'Zipper', 'Poller'];


function ZipperDetailsCtrl($scope, Zipper, $routeParams, $location, Poller){
    
    $scope.zipper = Zipper.get({'id':$routeParams.id});
    
    $scope.remove = function(){
        $scope.zipper.$delete(function(){
            $location.path('/zipper');
        });
        
    };
    
    $scope.update = function(){
        $scope.zipper.$save()
    };
}

ZipperDetailsCtrl.$inject = ['$scope', 'Zipper', '$routeParams', '$location', 'Poller'];
