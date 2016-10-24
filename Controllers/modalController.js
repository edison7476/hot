function modalController ($scope, $modal,  $modalInstance){
    $scope.dismissModal = function (){
      console.log("dismiss");
      $modalInstance.dismiss('cancel');
    };
}
