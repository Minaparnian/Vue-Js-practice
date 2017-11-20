new Vue({
  el: '#exercise',
  data: {
    name: 'Mina',
    age: 30,
    image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
    // value: '',
    value: 0,
    
  },
  
  computed: {
    result: function() {
      return this.value ==37 ? 'Done' : 'not there yet';
    }
  },
    
  
  watch: {
    result: function () {
      var vm = this;
      setTimeout(function(){
        vm.value = 0;
      }, 5000);
  }
},
    
  
  
  methods: {
    randomNum: function () {
      return Math.floor(Math.random() * (10 - 0)) + 0;
    },
    alert: function(event){
      alert("button clicked")
    },
    
  }
  
});