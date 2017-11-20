new Vue({
  el: '#exercise',
  data: {
  	effectClasses: {
    	highlight: false,
      shrink: true
    },
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'red'
      
    }
    
 		
  },
  methods: {
    startEffect: function() {
    	var vm = this;
      setInterval(function() {
      	vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },

    
  }
});
