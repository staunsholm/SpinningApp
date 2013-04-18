'use strict';

angular.module('SpinningApp')
    .factory('Sessions', function ()
    {
        var sessions = [
            {
                id: 1,
                title: 'Test Title',
                length: 100000,
                favorite: true
            },
            {
                id: 2,
                title: 'Spin \'till you die',
                length: 200000,
                favorite: true
            },
            {
                id: 3,
                title: 'Speed, climb and sprint',
                length: 300000
            }
        ];

        // Public API here
        return {
            getSessions: function ()
            {
                return sessions;
            },
            getSession: function(id)
            {
                for (var i in sessions)
                {
                    if (sessions[i].id == id)
                    {
                        return sessions[i];
                    }
                }

                console.log("session not found");
                return false;
            }
        };
    });
