var chatController = angular.module('chat.controller', []);

chatController.controller('ChatCtrl', ChatCtrl);

function ChatCtrl(ChatService, $cordovaCamera, $ionicScrollDelegate, $ionicModal, $ionicActionSheet, $timeout, $scope) {
  console.log(this);
  var chat = this;
  var _chat = this;
  var isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
  _chat.$scope = $scope;
  chat.data = {};

  chat.posts = ChatService.posts();
  chat.handle = window.localStorage.handle || 'Anonymous';

  function scrollBottom() {
    $ionicScrollDelegate.$getByHandle('chat').scrollBottom();
  }

  function addPost(message, img) {
    console.log(message)
    ChatService.posts().$add({
      message: message ? message : null,
      img: img ? img : null,
      timestamp: new Date().getTime(),
      user: chat.handle
    });
  }

  chat.inputUp = function() {
    window.addEventListener('native.keyboardshow', function() {
      if (isIOS) {
        chat.data.keyboardHeight = 216;
      }
      $timeout(function() {
        $ionicScrollDelegate.scrollBottom(true);
      }, 300);

    });
  };

  chat.inputDown = function() {
    if (isIOS) {
      chat.data.keyboardHeight = 0;
    }
    $ionicScrollDelegate.resize();
  };

  chat.posts.$watch(scrollBottom);

  chat.add = function(message) {
    if(chat.message){
    addPost(message);
    // pretty things up
    chat.message = null;
    }
  };

  chat.takePicture = function() {
    $ionicActionSheet.show({
      buttons: [{
        text: 'Picture'
      }, {
        text: 'Selfie'
      }, {
        text: 'Saved Photo'
      }],
      titleText: 'Take a...',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        ionic.Platform.isWebView() ? takeARealPicture(index) : takeAFakePicture();
        return true;
      }
    });

    function takeARealPicture(cameraIndex) {
      var options = {
        quality: 75,
        sourceType: cameraIndex === 2 ? 2 : 1,
        cameraDirection: cameraIndex,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 600,
        saveToPhotoAlbum: false
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var photo = 'data:image/jpeg;base64,' + imageData;
        addPost(null, photo);
      }, function(err) {
        // error
        console.error(err);
        takeAFakePicture();
      });
    }

    function takeAFakePicture() {
      addPost(null, $cordovaCamera.getPlaceholder());
    }
  };

  chat.save = function(newHandle) {
    console.log(newHandle);
    chat.handle = newHandle;
    localStorage.handle = newHandle;
    chat.hideModal();
  };

  $ionicModal.fromTemplateUrl('templates/account.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    _chat.modal = modal;
  });

  chat.openModal = function() {
    _chat.modal.show();
  };

  chat.hideModal = function() {
    _chat.modal.hide();
  };
}

