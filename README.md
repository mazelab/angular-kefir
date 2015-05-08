# angular-kefir

Angular module to handle more reactive with streams from Kefir.js

This module is based of the [angular-frp project from xgrommx](https://github.com/xgrommx/angular-frp/blob/gh-pages/app/frp/angular-kefir.js).

##Installation

    bower install --save angular-kefir
    
## Usage

View evens to controller stuff:

    $scope.$fromWatch('searchQuery')
        .debounce(250)
        .map(function(x) {return x.newValue})
        .skipWhile(function(x) {return (typeof x == 'undefined') || x === ''})
        .skipDuplicates()
        .onValue(searchSubscriber)
        
Socket.IO response to the view.

Service file:
            
    .factory('socket', [function() {
        var socket = io.connect('/gui');
        return socket;
      }])
      
    .factory('changedItemsResponse', ['socket', function(socket) {
        var res_ = Kefir.fromEvent(socket, 'history:changedItems');
        return res_;
      }])
      
Controller:

    changedItemsResponse.$assignProperty($scope, 'items');
    
## API

