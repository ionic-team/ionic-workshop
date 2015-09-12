var chatService = angular.module('chat.service', [])

chatService.service('ChatService', function($firebaseArray) {
  var APIUrl = 'https://ionic-hack-reactor.firebaseio.com/';
  var ref = new Firebase(APIUrl);
  var postsRef = ref.child('posts');
  return {
    posts: function() {
      return $firebaseArray(postsRef.limitToLast(100));
    }
  };

})
