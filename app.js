new Vue({
    el: '#vue-app',
    data: {
        name: 'Kare'
    },
    methods: {
      greet: function(time){
        console.log(`Method begin ${time}`);
        return "Good Bad Ugly" + time;
      }
    }
});
