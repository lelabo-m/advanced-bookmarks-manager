/**
 * Created by lelabo on 18/02/17.
 */
var Debug = function () {};

Debug.inspect_object = function (object) {
    console.log(" === START DEBUG === ");
    console.log(object);
    for (var name in object) {
        console.log(name + " = " + object[name]);
    }
    console.log(" ===  END  DEBUG === ");
};
