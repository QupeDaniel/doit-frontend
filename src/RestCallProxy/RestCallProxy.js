
function RestCallProxy() {

    var fetch = require("isomorphic-fetch");
    RestCallProxy.prototype.post = function (task) {
        return fetch('http://h2806881.stratoserver.net:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
    }

    RestCallProxy.prototype.put = function (task) {
        return fetch('http://h2806881.stratoserver.net:8080/api/tasks/'+task.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
    }

    RestCallProxy.prototype.delete = function (task) {
        return fetch('http://h2806881.stratoserver.net:8080/api/tasks/'+task.id, {
            method: 'DELETE'
        });
    }

    RestCallProxy.prototype.get = function () {
        return new Promise((resolve) => {
            fetch('http://h2806881.stratoserver.net:8080/api/tasks', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(result => {
                result.json().then( json => {
                    resolve(json);
                });
            });
        });
    }
}
module.exports = RestCallProxy;