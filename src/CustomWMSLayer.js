import React, { Component } from 'react';
import axios from 'axios'
import L from 'leaflet'
import { withLeaflet, useLeaflet } from "react-leaflet";
import * as WMS from "leaflet.wms";
import $ from "jquery";

function MySource() {
    return WMS.Source.extend({
        'ajax': function (url, callback) {
            $.ajax(url, {
                'context': this,
                'success': function(result) {
                    callback.call(this, result);
                 }
            });
        }
    })
}

// var MySource = WMS.source.extend({});

function CustomWMSLayer(props) {
    const { url, options, layers } = props;
    const ctx = useLeaflet()
    const map = ctx.map;


    // Add WMS source/layers
    const source = MySource(
        url,
        options
    );
    console.log(source)

    // console.log(layers)
    for (let name of layers) {
        source.getLayer(name).addTo(map)
    }


    return null;
}

export default CustomWMSLayer;