'use strict';

angular.module('SpinningApp')
    .factory('Sessions', function ()
    {
        var sessions = [];

        return {
            loadSessions: function ()
            {
                sessions = [
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
            },
            getSessions: function ()
            {
                return sessions;
            },
            getSession: function (id)
            {
                for (var i = 0, l = sessions.length; i < l; i++)
                {
                    if (sessions[i].id == id)
                    {
                        return sessions[i];
                    }
                }

                console.log("session not found");
                return false;
            },
            createSession: function ()
            {
                var session = {};

                if (sessions.length === 0)
                {
                    session.id = 1;
                }
                else
                {
                    session.id = sessions[sessions.length - 1].id + 1;
                }

                session.title = '';
                session.length = 0;
                session.parts = [];
                session.creationDate = Date.now();
                session.updateDate = session.creationDate;
                session.favorite = true;

                sessions.push(session);

                return session;
            },
            deleteSession: function (id)
            {
                for (var i = sessions.length - 1; i >= 0; i--)
                {
                    if (sessions[i].id == id)
                    {
                        sessions.splice(i, 1);
                    }
                }
            },
            createPart: function(session)
            {
                var part = {
                    id: session.parts.length === 0 ? 1 : session.parts[session.parts.length - 1] + 1,
                    artist: '',
                    song: '',
                    spotifyId: null,
                    startTime: 0,
                    endTime: 0
                };

                session.parts.push(part);

                return part;
            },
            deletePart: function(session, partId)
            {
                for (var i = session.parts.length - 1; i >= 0; i--)
                {
                    if (session.parts[i].id === partId)
                    {
                        session.parts.splice(i, 1);
                    }
                }
            },
            getPart: function(session, partId)
            {

            }

        };
    });
