/**
 * Created by lelabo on 17/02/17.
 */

// var Bookmark = function (obj) {
//     obj = obj || null;
//     if (obj) {
//         this.id = obj.id;
//         this.dateAdded = obj.dateAdded;
//         this.parentId = obj.parentId;
//         this.index = obj.index;
//         this.title = obj.title;
//     }
// };
//
// Bookmark.prototype = {
//     id: null,
//     dateAdded: null,
//     parentId: null,
//     index: null,
//     title: null
// };

angular.module('advbookmarks-bg').factory('User', function() {

    /**
     * Constructor, with class name
     */
    function User(firstName, lastName, role, organisation) {
        // Public properties, assigned to the instance ('this')
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.organisation = organisation;
    }

    /**
     * Public method, assigned to prototype
     */
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };

    /**
     * Private property
     */
    var possibleRoles = ['admin', 'editor', 'guest'];

    /**
     * Private function
     */
    function checkRole(role) {
        return possibleRoles.indexOf(role) !== -1;
    }

    /**
     * Static property
     * Using copy to prevent modifications to private property
     */
    User.possibleRoles = angular.copy(possibleRoles);

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    User.build = function (data) {
        if (!checkRole(data.role)) {
            return;
        }
        return new User(
            data.first_name,
            data.last_name,
            data.role,
            Organisation.build(data.organisation) // another model
        );
    };

    /**
     * Return the constructor function
     */
    return User;
});