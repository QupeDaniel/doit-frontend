describe('RestCallProxy', () => {
    var TaskModel = require("../src/TaskModel");

    var RestCallProxy = require('../src/RestCallProxy/RestCallProxy');

    var restCallProxy;

    beforeEach(function () {
        restCallProxy = new RestCallProxy();
    });
    it("should post a task", function (done) {

        var task = new TaskModel();
        task.id = 123;
        task.name = 'testTask';
        task.description = 'testDescription';
        task.createdAt = '2018-10-25 16:48:00 CET';
        task.lastEdit = '2018-10-25 16:49:00 CET';
        task.state = 'open';
        task.ownerId = 'Uwe';
        task.creatorId = 'Uwe';

        let promise = restCallProxy.post(task);

        promise.then(
            (result) => {
                expect(result.status).toEqual(200);
                done();
            }
        );

    });

    it("should update a task", function(done) {
        var task = new TaskModel();
        task.id = 124;
        task.name = 'testTask';
        task.description = 'testDescription';
        task.createdAt = '2018-10-25 16:48:00 CET';
        task.lastEdit = '2018-10-25 16:49:00 CET';
        task.state = 'open';
        task.ownerId = 'Uwe';
        task.creatorId = 'Uwe';

        let promise = restCallProxy.post(task);

        promise.then(
            (result) => {
                expect(result.status).toEqual(200);
                task.state = "awesome";
                restCallProxy.put(task).then( (result) => {
                    expect(result.status).toEqual(200);
                    done();
                });
            }
        );

    });

    it("should delete a task", function (done) {

        var task = new TaskModel();
        task.id = 123;
        task.name = 'testTask';
        task.description = 'testDescription';
        task.createdAt = '2018-10-25 16:48:00 CET';
        task.lastEdit = '2018-10-25 16:49:00 CET';
        task.state = 'open';
        task.ownerId = 'Uwe';
        task.creatorId = 'Uwe';

        let promise = restCallProxy.delete(task);
        promise.then(
            (result) => {
                expect(result.status).toEqual(204);
                done();
            }
        );
    });

    it("should get tasks", function (done) {

        let promise = restCallProxy.get();

        promise.then(
            (result) => {
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        );

    });


});