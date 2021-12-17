var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.38931505983589965,
        "pitch": -0.25565521220901744,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 0.06420738767408096,
          "pitch": -0.3085060828662858,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7832954107834169,
          "pitch": 0.06161051860734368,
          "title": "Faculty of Engineering",
          "text": "Welcome to the home of NUS engineers."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.941717258416876,
        "pitch": -0.1847325083301321,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.0372880438603147,
          "pitch": -0.008745548249212476,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5400559952257726,
          "pitch": 0.0820099372528631,
          "title": "Auditorium Atrium",
          "text": "Welcome to the Atrium"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.0049299382858852,
        "pitch": -0.3269999420611036,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.5823422268054372,
          "pitch": -0.1593312900461541,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0049299382858852,
          "pitch": -0.3269999420611036,
          "title": "NUS Engineering",
          "text": "Welcome to Faculty of Engineering"
        }
      ]
    }
  ],
  "name": "School of Design and Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
