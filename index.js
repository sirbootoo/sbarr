exports.printMsg = function(){
    console.log("This is Sir BooToo Library");
}

module.exports = {
    findObjectByKey: (array, key, value) => {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    },
    parentIndexOfObjKey: (a,attr) => {
        for(var i=0;i<a.length;i++){
            var o = a[i];
            var tmp = JSON.stringify(o);
            if(tmp.indexOf(attr)!==-1){
                return i;
            }
        }
    },
    // Sort function
    // Properties example: ["name", "-date"] => Sort in 
    sortByProperties: (array, properties) => {
        return array.sort((a, b) => {
            for (let i = 0; i < properties.length; i++) {
                let prop = properties[i];
                let direction = prop[0] === '-' ? -1 : 1;
                prop = prop[0] === '-' ? prop.slice(1) : prop;
                if (a[prop] < b[prop]) return -1 * direction;
                if (a[prop] > b[prop]) return 1 * direction;
            }
            return 0;
        });
    }
}