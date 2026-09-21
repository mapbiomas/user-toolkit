/**
 * @name
 *      core/v1/basemaps.js
 *
 * @description
 *      The Google Maps base map styles the toolkits switch between.
 *
 *      They used to come from `users/joaovsiqueira1/packages:Mapp.js`, a
 *      personal account. The toolkits only ever asked it for a style, so the
 *      styles live here now and the dependency is gone.
 *
 * @author
 *      João Siqueira
 *      contato@mapbiomas.org
 *
 * @see
 *      https://github.com/mapbiomas/user-toolkit
 */

var styles = {
  'Aubergine': [{
          "elementType": "geometry",
          "stylers": [{
              "color": "#1d2c4d"
          }]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#8ec3b9"
          }]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#1a3646"
          }]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#4b6878"
          }]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#64779e"
          }]
      },
      {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#4b6878"
          }]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#334e87"
          }]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
              "color": "#023e58"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#283d6a"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#6f9ba5"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#1d2c4d"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#023e58"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#3C7680"
          }]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
              "color": "#304a7d"
          }]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#98a5be"
          }]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#1d2c4d"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
              "color": "#2c6675"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#255763"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#b0d5ce"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#023e58"
          }]
      },
      {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#98a5be"
          }]
      },
      {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#1d2c4d"
          }]
      },
      {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#283d6a"
          }]
      },
      {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
              "color": "#3a4762"
          }]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#0e1626"
          }]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#4e6d70"
          }]
      }
  ],
  'Silver': [{
          "elementType": "geometry",
          "stylers": [{
              "color": "#f5f5f5"
          }]
      },
      {
          "elementType": "labels.icon",
          "stylers": [{
              "visibility": "off"
          }]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#616161"
          }]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#f5f5f5"
          }]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#bdbdbd"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
              "color": "#eeeeee"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
              "color": "#e5e5e5"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#9e9e9e"
          }]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
              "color": "#ffffff"
          }]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
              "color": "#dadada"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#616161"
          }]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#9e9e9e"
          }]
      },
      {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
              "color": "#e5e5e5"
          }]
      },
      {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
              "color": "#eeeeee"
          }]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#c9c9c9"
          }]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#9e9e9e"
          }]
      }
  ],
  'Night': [{
          "elementType": "geometry",
          "stylers": [{
              "color": "#242f3e"
          }]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#746855"
          }]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#242f3e"
          }]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#d59563"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#d59563"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
              "color": "#263c3f"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#6b9a76"
          }]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
              "color": "#38414e"
          }]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#212a37"
          }]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#9ca5b3"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
              "color": "#746855"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#1f2835"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#f3d19c"
          }]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
              "color": "#2f3948"
          }]
      },
      {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#d59563"
          }]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#17263c"
          }]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#515c6d"
          }]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#17263c"
          }]
      }
  ],
  'Dark': [{
          "elementType": "geometry",
          "stylers": [{
              "color": "#21242E"
          }]
      },
      {
          "elementType": "labels.icon",
          "stylers": [{
              "visibility": "off"
          }]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#212121"
          }]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#9e9e9e"
          }]
      },
      {
          "featureType": "administrative.land_parcel",
          "stylers": [{
              "visibility": "off"
          }]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#bdbdbd"
          }]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
              "color": "#181818"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#616161"
          }]
      },
      {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#1b1b1b"
          }]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#2c2c2c"
          }]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#8a8a8a"
          }]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
              "color": "#373737"
          }]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
              "color": "#3c3c3c"
          }]
      },
      {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
              "color": "#4e4e4e"
          }]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#616161"
          }]
      },
      {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#757575"
          }]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
              "color": "#000000"
          }]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#3d3d3d"
          }]
      }
  ],
  'Dark2': [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#808080"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "color": "#bdbdbd"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
};

/**
 * A base map style by name, e.g. 'Dark', 'Silver', 'Night'.
 *
 * @param {string} name
 * @returns {Array|undefined} what `Map.setOptions({styles: ...})` expects
 */
var getStyle = function (name) {
    return styles[name];
};

exports.styles = styles;
exports.getStyle = getStyle;
