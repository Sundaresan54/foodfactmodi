module.exports = (str) => {
    if(str === '') {
      return 'please enter a string';
    }
      return str.replace(/\W+(.)/g, function(x, chr) {
            return chr.toUpperCase();
        });
    };
