new Vue({
  el: '#vue-app',
  data: {
    name: 'Kare'
  },
  methods: {
    greet: function(time) {
      return "Good Bad Ugly" + time;
    }
  }
});
