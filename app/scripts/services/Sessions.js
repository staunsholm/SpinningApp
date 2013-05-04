'use strict';

angular.module('SpinningApp')
    .factory('Sessions', ['$rootScope', 'angularFire', function ($rootScope, angularFire)
    {
        var sessions = [];

        var firebaseUrl = 'https://spinningapp.firebaseio.com/sessions';
        angularFire(firebaseUrl, $rootScope, 'sessions')
            .then(function (_sessions)
            {
                $rootScope.sessions = sessions = _sessions;
            });

        function calculateSessionLength(session)
        {
            var length = 0;
            var parts = session.parts;
            for (var i = 0, l = parts.length; i < l; i++)
            {
                length += parts[i].endTime - parts[i].startTime;
            }

            session.length = length;
        }

        return {
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
                return null;
            },
            createSession: function ()
            {
                var session = {};

                session.title = '';
                session.length = 0;
                session.parts = [];
                session.creationDate = Date.now();
                session.updateDate = session.creationDate;
                session.favorite = true;

                return session;
            },
            saveSession: function (session)
            {
                if (!sessions)
                {
                    console.log("Sessions not ready");
                    return;
                }

                calculateSessionLength(session);

                if (!session.id)
                {
                    if (sessions.length === 0)
                    {
                        session.id = 1;
                    }
                    else
                    {
                        session.id = sessions[sessions.length - 1].id + 1;
                    }

                    console.log("first save");
                    sessions.push(session);
                }
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
            createPart: function (session)
            {
                var part = {
                    id: session.parts.length === 0 ? 1 : session.parts[session.parts.length - 1].id + 1,
                    artist: '',
                    song: '',
                    spotifyId: null,
                    startTime: 0,
                    endTime: 0,
                    duration: 0,
                    image: ''
                };

                session.parts.push(part);

                return part;
            },
            deletePart: function (session, partId)
            {
                for (var i = session.parts.length - 1; i >= 0; i--)
                {
                    if (session.parts[i].id === partId)
                    {
                        session.parts.splice(i, 1);
                    }
                }

                calculateSessionLength(session);
            }
        };
    }]);
