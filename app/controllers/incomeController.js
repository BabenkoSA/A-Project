(function(){
    app.controller('IncomeController', ['$uibModal', '$document', '$scope', 'storageFactory', function($uibModal, $document, $scope, storageFactory) {
        
        var incomeCtrl = this;
        this.storageFactory = storageFactory;
        
        //datapicker
        this.dt = new Date();
        this.today = function() {
            incomeCtrl.dt = new Date();
        };
        this.today();

        this.dateOptions = {
            format: 'yy',
            maxDate: new Date(2020, 5, 22)
        };

        this.open = function() {
            incomeCtrl.popup.opened = true;
        };

        this.popup = {
            opened: false
        };
        //end
        
        //big mfn input
        this.inputFormModel = {
            who: '',
            sum: null,
            from: '',
            to: '',
            date: '',
            comment: ''
        };
        this.tmpIncome = angular.extend({}, this.inputFormModel);
        
        this.addIncomeForm = function (date) {
//            console.log(date.toLocaleDateString());
            incomeCtrl.tmpIncome.date = date.toLocaleDateString();
            incomeCtrl.storageFactory.history.push(incomeCtrl.tmpIncome);
            incomeCtrl.tmpIncome = angular.extend({}, incomeCtrl.inputFormModel);
            incomeCtrl.today();
        }
        //input end
        //modals
        this.categoryModel = {title: ''};
        
        this.openSourceModal = function (parentSelector, eventType, category, index) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-target ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
              templateUrl: 'app/modals/modalAddEditIncome.html',
              controller: 'ModalSourceController',
              controllerAs: 'modalSourceCtrl',
              size: 'md',
              appendTo: parentElem,
              resolve: {
                data: function () {
                  return {
                    item: angular.extend({}, category),
                    eventType: eventType,
                    index: index
                    };
                }
              }
            });
            
            modalInstance.result.then(function () {
                //success
            }, function () {
                //error
            });
        };
        
        this.countModel = {
                    title: '',
                    amount: 0,
                    regularRefill: false,
                    regularRefillSum: 0,
                    frequencyOfPayment: 0,
                    dateOfRefill: '',
                    incomeCategory: ''
                };
        
        this.openCountModal = function (parentSelector, eventType, count, index) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-target ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
              templateUrl: 'app/modals/modalAddEditCount.html',
              controller: 'ModalCountController',
              controllerAs: 'modalCountCtrl',
              size: 'md',
              appendTo: parentElem,
              resolve: {
                data: function () {
                  return {
                    item: angular.extend({}, count),
                    eventType: eventType,
                    index: index
                  };
                }
              }
            });
            
            modalInstance.result.then(function () {
//                success
            }, function () {
//              on error
            });
        };
        
        this.openRemoveModal = function (parentSelector, deleteSource, title, index) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-target ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
              templateUrl: 'app/modals/modalRemove.html',
              controller: 'ModalRemoveController',
              controllerAs: 'modalRemoveCtrl',
              size: 'sm',
              appendTo: parentElem,
              resolve: {
                data: function () {
                  return {
                    source: deleteSource,
                    title: title,
                    index: index
                  };
                }
              }
            });
            
            modalInstance.result.then(function () {
//                success
            }, function () {
//              error
            });
        };
        //modals end
        
    }]);
})();