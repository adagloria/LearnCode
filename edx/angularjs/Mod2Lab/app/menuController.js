app.controller('menuController', [
    '$scope',
    function($scope){
    	$scope.model = {title: 'Our Menu'};
    	$scope.changeMainDish = function (item) {
            $scope.model.mainDish = {
                name : item,
                price : '$13:50'
            }
            };
		$scope.$watch('model.mainDish', function (newValue, oldValue) {
    		if (newValue === 'BBQ Chicken Pizza') {
        		alert('You have selected the BBQ Chicken Pizza!');
    }
});
        $scope.people = [
{'name': 'Mickey Mouse', 'type':'mouse', 'gender':'male'},
{'name': 'Donald Duck', 'type':'duck', 'gender':'male'},
{'name': 'Minnie Mouse', 'type':'mouse', 'gender':'female'},
{'name': 'Daisy Duck', 'type':'duck', 'gender':'female'},
{'name': 'Goofy', 'type':'dog?', 'gender':'male'}
]
    }
]);



//former before I made changes
// app.controller('menuController', [
//     '$scope',
//     function($scope){
//         $scope.model = {title: 'Our Menu'};
//         $scope.changeMainDish = function (item) {
//             $scope.model.mainDish = item;
//             };
//         $scope.$watch('model.mainDish', function (newValue, oldValue) {
//             if (newValue === 'BBQ Chicken Pizza') {
//                 alert('You have selected the BBQ Chicken Pizza!');
//     }
// });
//     }
// ]);