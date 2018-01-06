exports.printMsg = function(){
    console.log("This is Sir BooToo Library");
}

module.exports = {
    findObjectByKey: function(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    },
    parentIndexOfObjKey: function(a,attr){
        for(var i=0;i<a.length;i++){
            var o = a[i];
            var tmp = JSON.stringify(o);
            if(tmp.indexOf(attr)!==-1){
                return i;
            }
        }
    }
}