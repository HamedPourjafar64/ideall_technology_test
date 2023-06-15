var object = {
    dude: "Where's my car?"
};

var proxy = new Proxy(object, {
  get: function() {
    return "404";
  },
  set: function() {
    return "404";
  }
});

console.log(proxy.dude);
console.log(object.dude);
console.log(proxy.dude === object.dude);
console.log(proxy.something);
proxy.something = "something";
proxy.dude = 'nothing'
console.log(proxy.something);
console.log(proxy.dude);