var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AOI_GALELA_52N_1 = new ol.format.GeoJSON();
var features_AOI_GALELA_52N_1 = format_AOI_GALELA_52N_1.readFeatures(json_AOI_GALELA_52N_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_GALELA_52N_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_GALELA_52N_1.addFeatures(features_AOI_GALELA_52N_1);
var lyr_AOI_GALELA_52N_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_GALELA_52N_1, 
                style: style_AOI_GALELA_52N_1,
                popuplayertitle: "AOI_GALELA_52N",
                interactive: true,
                title: '<img src="styles/legend/AOI_GALELA_52N_1.png" /> AOI_GALELA_52N'
            });
var format_AOI_TOBSEL_2 = new ol.format.GeoJSON();
var features_AOI_TOBSEL_2 = format_AOI_TOBSEL_2.readFeatures(json_AOI_TOBSEL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_TOBSEL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_TOBSEL_2.addFeatures(features_AOI_TOBSEL_2);
var lyr_AOI_TOBSEL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_TOBSEL_2, 
                style: style_AOI_TOBSEL_2,
                popuplayertitle: "AOI_TOBSEL",
                interactive: true,
                title: '<img src="styles/legend/AOI_TOBSEL_2.png" /> AOI_TOBSEL'
            });
var format_Jalan_Kategori_1_3 = new ol.format.GeoJSON();
var features_Jalan_Kategori_1_3 = format_Jalan_Kategori_1_3.readFeatures(json_Jalan_Kategori_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kategori_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kategori_1_3.addFeatures(features_Jalan_Kategori_1_3);
var lyr_Jalan_Kategori_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kategori_1_3, 
                style: style_Jalan_Kategori_1_3,
                popuplayertitle: "Jalan_Kategori_1",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kategori_1_3.png" /> Jalan_Kategori_1'
            });
var format_Jalan_Kategori_2_4 = new ol.format.GeoJSON();
var features_Jalan_Kategori_2_4 = format_Jalan_Kategori_2_4.readFeatures(json_Jalan_Kategori_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kategori_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kategori_2_4.addFeatures(features_Jalan_Kategori_2_4);
var lyr_Jalan_Kategori_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kategori_2_4, 
                style: style_Jalan_Kategori_2_4,
                popuplayertitle: "Jalan_Kategori_2",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kategori_2_4.png" /> Jalan_Kategori_2'
            });
var format_Pemukiman_5 = new ol.format.GeoJSON();
var features_Pemukiman_5 = format_Pemukiman_5.readFeatures(json_Pemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_5.addFeatures(features_Pemukiman_5);
var lyr_Pemukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_5, 
                style: style_Pemukiman_5,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_5.png" /> Pemukiman'
            });
var format_Permukiman_6 = new ol.format.GeoJSON();
var features_Permukiman_6 = format_Permukiman_6.readFeatures(json_Permukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_6.addFeatures(features_Permukiman_6);
var lyr_Permukiman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_6, 
                style: style_Permukiman_6,
                popuplayertitle: "Permukiman",
                interactive: true,
                title: '<img src="styles/legend/Permukiman_6.png" /> Permukiman'
            });
var format_Jalan_Kategori_1_7 = new ol.format.GeoJSON();
var features_Jalan_Kategori_1_7 = format_Jalan_Kategori_1_7.readFeatures(json_Jalan_Kategori_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kategori_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kategori_1_7.addFeatures(features_Jalan_Kategori_1_7);
var lyr_Jalan_Kategori_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kategori_1_7, 
                style: style_Jalan_Kategori_1_7,
                popuplayertitle: "Jalan_Kategori_1",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kategori_1_7.png" /> Jalan_Kategori_1'
            });
var format_Jalan_Kategori_2_8 = new ol.format.GeoJSON();
var features_Jalan_Kategori_2_8 = format_Jalan_Kategori_2_8.readFeatures(json_Jalan_Kategori_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kategori_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kategori_2_8.addFeatures(features_Jalan_Kategori_2_8);
var lyr_Jalan_Kategori_2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kategori_2_8, 
                style: style_Jalan_Kategori_2_8,
                popuplayertitle: "Jalan_Kategori_2",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kategori_2_8.png" /> Jalan_Kategori_2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AOI_GALELA_52N_1.setVisible(true);lyr_AOI_TOBSEL_2.setVisible(true);lyr_Jalan_Kategori_1_3.setVisible(true);lyr_Jalan_Kategori_2_4.setVisible(true);lyr_Pemukiman_5.setVisible(true);lyr_Permukiman_6.setVisible(true);lyr_Jalan_Kategori_1_7.setVisible(true);lyr_Jalan_Kategori_2_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AOI_GALELA_52N_1,lyr_AOI_TOBSEL_2,lyr_Jalan_Kategori_1_3,lyr_Jalan_Kategori_2_4,lyr_Pemukiman_5,lyr_Permukiman_6,lyr_Jalan_Kategori_1_7,lyr_Jalan_Kategori_2_8];
lyr_AOI_GALELA_52N_1.set('fieldAliases', {'Name': 'Name', 'J_Pohon': 'J_Pohon', 'L_Desa_Ha': 'L_Desa_Ha', 'L_pmkmn_Ha': 'L_pmkmn_Ha', 'Jl_Kat1_Ha': 'Jl_Kat1_Ha', 'Jl_Kat2_Ha': 'Jl_Kat2_Ha', });
lyr_AOI_TOBSEL_2.set('fieldAliases', {'Name': 'Name', 'J_Pohon': 'J_Pohon', 'L_Desa_Ha': 'L_Desa_Ha', 'L_pmkmn_Ha': 'L_pmkmn_Ha', 'Jl_Kat1_Ha': 'Jl_Kat1_Ha', 'Jl_Kat2_Ha': 'Jl_Kat2_Ha', });
lyr_Jalan_Kategori_1_3.set('fieldAliases', {'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Luasan__ha': 'Luasan__ha', });
lyr_Jalan_Kategori_2_4.set('fieldAliases', {'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Luasan__Ha': 'Luasan__Ha', });
lyr_Pemukiman_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan': 'Luasan', });
lyr_Permukiman_6.set('fieldAliases', {'Id': 'Id', 'Luasan__Ha': 'Luasan__Ha', });
lyr_Jalan_Kategori_1_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan': 'Luasan', });
lyr_Jalan_Kategori_2_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan': 'Luasan', });
lyr_AOI_GALELA_52N_1.set('fieldImages', {'Name': 'TextEdit', 'J_Pohon': 'TextEdit', 'L_Desa_Ha': 'TextEdit', 'L_pmkmn_Ha': 'TextEdit', 'Jl_Kat1_Ha': 'TextEdit', 'Jl_Kat2_Ha': 'TextEdit', });
lyr_AOI_TOBSEL_2.set('fieldImages', {'Name': 'TextEdit', 'J_Pohon': 'TextEdit', 'L_Desa_Ha': 'TextEdit', 'L_pmkmn_Ha': 'TextEdit', 'Jl_Kat1_Ha': 'TextEdit', 'Jl_Kat2_Ha': 'TextEdit', });
lyr_Jalan_Kategori_1_3.set('fieldImages', {'Id': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Luasan__ha': 'TextEdit', });
lyr_Jalan_Kategori_2_4.set('fieldImages', {'Id': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Luasan__Ha': 'TextEdit', });
lyr_Pemukiman_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan': 'TextEdit', });
lyr_Permukiman_6.set('fieldImages', {'Id': 'Range', 'Luasan__Ha': 'TextEdit', });
lyr_Jalan_Kategori_1_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan': 'TextEdit', });
lyr_Jalan_Kategori_2_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan': 'TextEdit', });
lyr_AOI_GALELA_52N_1.set('fieldLabels', {'Name': 'inline label - always visible', 'J_Pohon': 'inline label - always visible', 'L_Desa_Ha': 'inline label - always visible', 'L_pmkmn_Ha': 'inline label - always visible', 'Jl_Kat1_Ha': 'inline label - always visible', 'Jl_Kat2_Ha': 'inline label - always visible', });
lyr_AOI_TOBSEL_2.set('fieldLabels', {'Name': 'inline label - always visible', 'J_Pohon': 'inline label - always visible', 'L_Desa_Ha': 'inline label - always visible', 'L_pmkmn_Ha': 'inline label - always visible', 'Jl_Kat1_Ha': 'inline label - always visible', 'Jl_Kat2_Ha': 'inline label - always visible', });
lyr_Jalan_Kategori_1_3.set('fieldLabels', {'Id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Luasan__ha': 'no label', });
lyr_Jalan_Kategori_2_4.set('fieldLabels', {'Id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Luasan__Ha': 'no label', });
lyr_Pemukiman_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan': 'no label', });
lyr_Permukiman_6.set('fieldLabels', {'Id': 'no label', 'Luasan__Ha': 'no label', });
lyr_Jalan_Kategori_1_7.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan': 'no label', });
lyr_Jalan_Kategori_2_8.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan': 'no label', });
lyr_Jalan_Kategori_2_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});