/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.config={enter:false};//控制“进入”按钮是否出现
    $scope.onSlideChanged=function(){
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1 ){
            //说明到了最后一个引导页。这hi时候要显示进入按钮
            $scope.config.enter=true
        }else {
            $scope.config.enter=false
        }
    }

});