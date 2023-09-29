var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PositiusBarberCadastre_1 = new ol.format.GeoJSON();
var features_PositiusBarberCadastre_1 = format_PositiusBarberCadastre_1.readFeatures(json_PositiusBarberCadastre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusBarberCadastre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusBarberCadastre_1.addFeatures(features_PositiusBarberCadastre_1);
var lyr_PositiusBarberCadastre_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusBarberCadastre_1, 
                style: style_PositiusBarberCadastre_1,
                interactive: true,
                title: '<img src="styles/legend/PositiusBarberCadastre_1.png" /> Positius Barberà Cadastre'
            });
var format_PositiusCerdanyolaCadastre_2 = new ol.format.GeoJSON();
var features_PositiusCerdanyolaCadastre_2 = format_PositiusCerdanyolaCadastre_2.readFeatures(json_PositiusCerdanyolaCadastre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusCerdanyolaCadastre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusCerdanyolaCadastre_2.addFeatures(features_PositiusCerdanyolaCadastre_2);
var lyr_PositiusCerdanyolaCadastre_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusCerdanyolaCadastre_2, 
                style: style_PositiusCerdanyolaCadastre_2,
                interactive: true,
                title: '<img src="styles/legend/PositiusCerdanyolaCadastre_2.png" /> Positius Cerdanyola Cadastre'
            });
var format_PositiusSantCugat_3 = new ol.format.GeoJSON();
var features_PositiusSantCugat_3 = format_PositiusSantCugat_3.readFeatures(json_PositiusSantCugat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusSantCugat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusSantCugat_3.addFeatures(features_PositiusSantCugat_3);
var lyr_PositiusSantCugat_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusSantCugat_3, 
                style: style_PositiusSantCugat_3,
                interactive: true,
                title: '<img src="styles/legend/PositiusSantCugat_3.png" /> Positius Sant Cugat'
            });
var format_PositiusRipolles_Polinya_SantCugat_Barbera_4 = new ol.format.GeoJSON();
var features_PositiusRipolles_Polinya_SantCugat_Barbera_4 = format_PositiusRipolles_Polinya_SantCugat_Barbera_4.readFeatures(json_PositiusRipolles_Polinya_SantCugat_Barbera_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusRipolles_Polinya_SantCugat_Barbera_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusRipolles_Polinya_SantCugat_Barbera_4.addFeatures(features_PositiusRipolles_Polinya_SantCugat_Barbera_4);
var lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusRipolles_Polinya_SantCugat_Barbera_4, 
                style: style_PositiusRipolles_Polinya_SantCugat_Barbera_4,
                interactive: true,
                title: '<img src="styles/legend/PositiusRipolles_Polinya_SantCugat_Barbera_4.png" /> Positius Ripolles_Polinya_Sant Cugat_Barbera'
            });
var format_PositiusPoliny_5 = new ol.format.GeoJSON();
var features_PositiusPoliny_5 = format_PositiusPoliny_5.readFeatures(json_PositiusPoliny_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusPoliny_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusPoliny_5.addFeatures(features_PositiusPoliny_5);
var lyr_PositiusPoliny_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PositiusPoliny_5, 
                style: style_PositiusPoliny_5,
                interactive: true,
                title: '<img src="styles/legend/PositiusPoliny_5.png" /> Positius Polinyà'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PositiusBarberCadastre_1.setVisible(true);lyr_PositiusCerdanyolaCadastre_2.setVisible(true);lyr_PositiusSantCugat_3.setVisible(true);lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4.setVisible(true);lyr_PositiusPoliny_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PositiusBarberCadastre_1,lyr_PositiusCerdanyolaCadastre_2,lyr_PositiusSantCugat_3,lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4,lyr_PositiusPoliny_5];
lyr_PositiusBarberCadastre_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_PositiusCerdanyolaCadastre_2.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_PositiusSantCugat_3.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'layer': 'layer', 'path': 'path', });
lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_PositiusPoliny_5.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_PositiusBarberCadastre_1.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'DateTime', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_PositiusCerdanyolaCadastre_2.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_PositiusSantCugat_3.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', 'layer': '', 'path': '', });
lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': 'Range', });
lyr_PositiusPoliny_5.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_PositiusBarberCadastre_1.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_PositiusCerdanyolaCadastre_2.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_PositiusSantCugat_3.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PositiusRipolles_Polinya_SantCugat_Barbera_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_PositiusPoliny_5.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_PositiusPoliny_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});