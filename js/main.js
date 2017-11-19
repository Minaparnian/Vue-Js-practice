new Vue({
  el: '#exercise',
  data: {
    name: 'Mina',
    age: 30,
    image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
    value: '',
  },
  
  methods: {
    randomNum: function () {
      return Math.floor(Math.random() * (10 - 0)) + 0;
    },
    alert: function(event){
      alert("button clicked")
    }
  }
  
});