let array = [];

module.exports = {
    putInList: function(number){
        array.push(number);
        return array;
    },
    sortIt: function(){
        array.sort(function(a, b){
            return a - b;
        });
    }
}