ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([293038.050867, 4120553.121567, 298901.815382, 4123654.869540]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_0702NucleosUrbanospol1Recor1_1 = new ol.format.GeoJSON();
var features_0702NucleosUrbanospol1Recor1_1 = format_0702NucleosUrbanospol1Recor1_1.readFeatures(json_0702NucleosUrbanospol1Recor1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_0702NucleosUrbanospol1Recor1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0702NucleosUrbanospol1Recor1_1.addFeatures(features_0702NucleosUrbanospol1Recor1_1);
var lyr_0702NucleosUrbanospol1Recor1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_0702NucleosUrbanospol1Recor1_1, 
                style: style_0702NucleosUrbanospol1Recor1_1,
                popuplayertitle: "07 02NucleosUrbanos pol 1Recor1",
                interactive: true,
                title: '<img src="styles/legend/0702NucleosUrbanospol1Recor1_1.png" /> 07 02NucleosUrbanos pol 1Recor1'
            });
var format_1109RedNaturaRecor_2 = new ol.format.GeoJSON();
var features_1109RedNaturaRecor_2 = format_1109RedNaturaRecor_2.readFeatures(json_1109RedNaturaRecor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_1109RedNaturaRecor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1109RedNaturaRecor_2.addFeatures(features_1109RedNaturaRecor_2);
var lyr_1109RedNaturaRecor_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1109RedNaturaRecor_2, 
                style: style_1109RedNaturaRecor_2,
                popuplayertitle: "11 09 RedNaturaRecor",
                interactive: true,
                title: '<img src="styles/legend/1109RedNaturaRecor_2.png" /> 11 09 RedNaturaRecor'
            });
var format_03_09_Deposito_3 = new ol.format.GeoJSON();
var features_03_09_Deposito_3 = format_03_09_Deposito_3.readFeatures(json_03_09_Deposito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_03_09_Deposito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_09_Deposito_3.addFeatures(features_03_09_Deposito_3);
var lyr_03_09_Deposito_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_03_09_Deposito_3, 
                style: style_03_09_Deposito_3,
                popuplayertitle: "03_09_Deposito",
                interactive: true,
                title: '<img src="styles/legend/03_09_Deposito_3.png" /> 03_09_Deposito'
            });
var format_EJEOSUNAPUEBLAejeentities_4 = new ol.format.GeoJSON();
var features_EJEOSUNAPUEBLAejeentities_4 = format_EJEOSUNAPUEBLAejeentities_4.readFeatures(json_EJEOSUNAPUEBLAejeentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EJEOSUNAPUEBLAejeentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJEOSUNAPUEBLAejeentities_4.addFeatures(features_EJEOSUNAPUEBLAejeentities_4);
var lyr_EJEOSUNAPUEBLAejeentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJEOSUNAPUEBLAejeentities_4, 
                style: style_EJEOSUNAPUEBLAejeentities_4,
                popuplayertitle: "EJEOSUNAPUEBLAeje entities",
                interactive: true,
                title: '<img src="styles/legend/EJEOSUNAPUEBLAejeentities_4.png" /> EJEOSUNAPUEBLAeje entities'
            });
var format_AFECCIONES_PUEBLA_5 = new ol.format.GeoJSON();
var features_AFECCIONES_PUEBLA_5 = format_AFECCIONES_PUEBLA_5.readFeatures(json_AFECCIONES_PUEBLA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AFECCIONES_PUEBLA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFECCIONES_PUEBLA_5.addFeatures(features_AFECCIONES_PUEBLA_5);
var lyr_AFECCIONES_PUEBLA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFECCIONES_PUEBLA_5, 
                style: style_AFECCIONES_PUEBLA_5,
                popuplayertitle: "AFECCIONES_PUEBLA",
                interactive: true,
                title: '<img src="styles/legend/AFECCIONES_PUEBLA_5.png" /> AFECCIONES_PUEBLA'
            });
var format_SERVIDUMBREACUEDUCTOentities_6 = new ol.format.GeoJSON();
var features_SERVIDUMBREACUEDUCTOentities_6 = format_SERVIDUMBREACUEDUCTOentities_6.readFeatures(json_SERVIDUMBREACUEDUCTOentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_SERVIDUMBREACUEDUCTOentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDUMBREACUEDUCTOentities_6.addFeatures(features_SERVIDUMBREACUEDUCTOentities_6);
var lyr_SERVIDUMBREACUEDUCTOentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVIDUMBREACUEDUCTOentities_6, 
                style: style_SERVIDUMBREACUEDUCTOentities_6,
                popuplayertitle: "SERVIDUMBREACUEDUCTO entities",
                interactive: true,
                title: '<img src="styles/legend/SERVIDUMBREACUEDUCTOentities_6.png" /> SERVIDUMBREACUEDUCTO entities'
            });
var format_SERVIDUMBREACUEDUCTOentities_7 = new ol.format.GeoJSON();
var features_SERVIDUMBREACUEDUCTOentities_7 = format_SERVIDUMBREACUEDUCTOentities_7.readFeatures(json_SERVIDUMBREACUEDUCTOentities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_SERVIDUMBREACUEDUCTOentities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDUMBREACUEDUCTOentities_7.addFeatures(features_SERVIDUMBREACUEDUCTOentities_7);
var lyr_SERVIDUMBREACUEDUCTOentities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVIDUMBREACUEDUCTOentities_7, 
                style: style_SERVIDUMBREACUEDUCTOentities_7,
                popuplayertitle: "SERVIDUMBREACUEDUCTO entities",
                interactive: true,
                title: '<img src="styles/legend/SERVIDUMBREACUEDUCTOentities_7.png" /> SERVIDUMBREACUEDUCTO entities'
            });
var format_SERVIDUMBREACUEDUCTOentities_8 = new ol.format.GeoJSON();
var features_SERVIDUMBREACUEDUCTOentities_8 = format_SERVIDUMBREACUEDUCTOentities_8.readFeatures(json_SERVIDUMBREACUEDUCTOentities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_SERVIDUMBREACUEDUCTOentities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVIDUMBREACUEDUCTOentities_8.addFeatures(features_SERVIDUMBREACUEDUCTOentities_8);
var lyr_SERVIDUMBREACUEDUCTOentities_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVIDUMBREACUEDUCTOentities_8, 
                style: style_SERVIDUMBREACUEDUCTOentities_8,
                popuplayertitle: "SERVIDUMBREACUEDUCTO entities",
                interactive: true,
                title: '<img src="styles/legend/SERVIDUMBREACUEDUCTOentities_8.png" /> SERVIDUMBREACUEDUCTO entities'
            });
var format_ARQUETASentities_9 = new ol.format.GeoJSON();
var features_ARQUETASentities_9 = format_ARQUETASentities_9.readFeatures(json_ARQUETASentities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ARQUETASentities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARQUETASentities_9.addFeatures(features_ARQUETASentities_9);
var lyr_ARQUETASentities_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARQUETASentities_9, 
                style: style_ARQUETASentities_9,
                popuplayertitle: "ARQUETAS entities",
                interactive: true,
                title: '<img src="styles/legend/ARQUETASentities_9.png" /> ARQUETAS entities'
            });
var format_ARQUETASentities_10 = new ol.format.GeoJSON();
var features_ARQUETASentities_10 = format_ARQUETASentities_10.readFeatures(json_ARQUETASentities_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ARQUETASentities_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARQUETASentities_10.addFeatures(features_ARQUETASentities_10);
var lyr_ARQUETASentities_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARQUETASentities_10, 
                style: style_ARQUETASentities_10,
                popuplayertitle: "ARQUETAS entities",
                interactive: true,
                title: '<img src="styles/legend/ARQUETASentities_10.png" /> ARQUETAS entities'
            });
var format_ARQUETASentities_11 = new ol.format.GeoJSON();
var features_ARQUETASentities_11 = format_ARQUETASentities_11.readFeatures(json_ARQUETASentities_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ARQUETASentities_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARQUETASentities_11.addFeatures(features_ARQUETASentities_11);
var lyr_ARQUETASentities_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARQUETASentities_11, 
                style: style_ARQUETASentities_11,
                popuplayertitle: "ARQUETAS entities",
                interactive: true,
                title: '<img src="styles/legend/ARQUETASentities_11.png" /> ARQUETAS entities'
            });
var format_AcotacionEjeOsunaPueblaentities_12 = new ol.format.GeoJSON();
var features_AcotacionEjeOsunaPueblaentities_12 = format_AcotacionEjeOsunaPueblaentities_12.readFeatures(json_AcotacionEjeOsunaPueblaentities_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AcotacionEjeOsunaPueblaentities_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcotacionEjeOsunaPueblaentities_12.addFeatures(features_AcotacionEjeOsunaPueblaentities_12);
var lyr_AcotacionEjeOsunaPueblaentities_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcotacionEjeOsunaPueblaentities_12, 
                style: style_AcotacionEjeOsunaPueblaentities_12,
                popuplayertitle: "AcotacionEjeOsunaPuebla entities",
                interactive: true,
                title: '<img src="styles/legend/AcotacionEjeOsunaPueblaentities_12.png" /> AcotacionEjeOsunaPuebla entities'
            });
var format_AcotacionEjeOsunaPueblaentities_13 = new ol.format.GeoJSON();
var features_AcotacionEjeOsunaPueblaentities_13 = format_AcotacionEjeOsunaPueblaentities_13.readFeatures(json_AcotacionEjeOsunaPueblaentities_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AcotacionEjeOsunaPueblaentities_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcotacionEjeOsunaPueblaentities_13.addFeatures(features_AcotacionEjeOsunaPueblaentities_13);
var lyr_AcotacionEjeOsunaPueblaentities_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcotacionEjeOsunaPueblaentities_13, 
                style: style_AcotacionEjeOsunaPueblaentities_13,
                popuplayertitle: "AcotacionEjeOsunaPuebla entities",
                interactive: true,
                title: '<img src="styles/legend/AcotacionEjeOsunaPueblaentities_13.png" /> AcotacionEjeOsunaPuebla entities'
            });
var format_EJEOSUNAPUEBLAejeentities_14 = new ol.format.GeoJSON();
var features_EJEOSUNAPUEBLAejeentities_14 = format_EJEOSUNAPUEBLAejeentities_14.readFeatures(json_EJEOSUNAPUEBLAejeentities_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EJEOSUNAPUEBLAejeentities_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJEOSUNAPUEBLAejeentities_14.addFeatures(features_EJEOSUNAPUEBLAejeentities_14);
var lyr_EJEOSUNAPUEBLAejeentities_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJEOSUNAPUEBLAejeentities_14, 
                style: style_EJEOSUNAPUEBLAejeentities_14,
                popuplayertitle: "EJEOSUNAPUEBLAeje entities",
                interactive: true,
                title: '<img src="styles/legend/EJEOSUNAPUEBLAejeentities_14.png" /> EJEOSUNAPUEBLAeje entities'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_0702NucleosUrbanospol1Recor1_1.setVisible(true);lyr_1109RedNaturaRecor_2.setVisible(true);lyr_03_09_Deposito_3.setVisible(true);lyr_EJEOSUNAPUEBLAejeentities_4.setVisible(true);lyr_AFECCIONES_PUEBLA_5.setVisible(true);lyr_SERVIDUMBREACUEDUCTOentities_6.setVisible(true);lyr_SERVIDUMBREACUEDUCTOentities_7.setVisible(true);lyr_SERVIDUMBREACUEDUCTOentities_8.setVisible(true);lyr_ARQUETASentities_9.setVisible(true);lyr_ARQUETASentities_10.setVisible(true);lyr_ARQUETASentities_11.setVisible(true);lyr_AcotacionEjeOsunaPueblaentities_12.setVisible(true);lyr_AcotacionEjeOsunaPueblaentities_13.setVisible(true);lyr_EJEOSUNAPUEBLAejeentities_14.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_0702NucleosUrbanospol1Recor1_1,lyr_1109RedNaturaRecor_2,lyr_03_09_Deposito_3,lyr_EJEOSUNAPUEBLAejeentities_4,lyr_AFECCIONES_PUEBLA_5,lyr_SERVIDUMBREACUEDUCTOentities_6,lyr_SERVIDUMBREACUEDUCTOentities_7,lyr_SERVIDUMBREACUEDUCTOentities_8,lyr_ARQUETASentities_9,lyr_ARQUETASentities_10,lyr_ARQUETASentities_11,lyr_AcotacionEjeOsunaPueblaentities_12,lyr_AcotacionEjeOsunaPueblaentities_13,lyr_EJEOSUNAPUEBLAejeentities_14];
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldAliases', {'codigo_nd': 'codigo_nd', 'cod_pob': 'cod_pob', 'nombre_pob': 'nombre_pob', 'nivel': 'nivel', 'estado': 'estado', });
lyr_1109RedNaturaRecor_2.set('fieldAliases', {'id': 'id', 'codigoespa': 'codigoespa', 'nombre': 'nombre', 'figura': 'figura', 'superficie': 'superficie', });
lyr_03_09_Deposito_3.set('fieldAliases', {'id': 'id', 'codigo': 'codigo', 'red': 'red', 'nombre': 'nombre', 'org_comp': 'org_comp', 'cota': 'cota', 'altura': 'altura', 'estado': 'estado', 'capacidad': 'capacidad', });
lyr_EJEOSUNAPUEBLAejeentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AFECCIONES_PUEBLA_5.set('fieldAliases', {'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'HOJA': 'HOJA', 'PARCELA': 'PARCELA', 'SUBPARCE': 'SUBPARCE', 'TIPO': 'TIPO', 'COORX': 'COORX', 'COORY': 'COORY', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'AREA': 'AREA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'ALTITUD': 'ALTITUD', 'PENDIENTE': 'PENDIENTE', 'REFCAT': 'REFCAT', 'VIA': 'VIA', 'NUMERO': 'NUMERO', 'NUMERODUP': 'NUMERODUP', 'layer': 'layer', 'path': 'path', 'CONCA': 'CONCA', 'CodFinca': 'CodFinca', 'Dominio': 'Dominio', 'Temporal': 'Temporal', 'ServAcue': 'ServAcue', 'CAPA': 'CAPA', });
lyr_SERVIDUMBREACUEDUCTOentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SERVIDUMBREACUEDUCTOentities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SERVIDUMBREACUEDUCTOentities_8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ARQUETASentities_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ARQUETASentities_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ARQUETASentities_11.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AcotacionEjeOsunaPueblaentities_12.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AcotacionEjeOsunaPueblaentities_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EJEOSUNAPUEBLAejeentities_14.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldImages', {'codigo_nd': 'TextEdit', 'cod_pob': 'TextEdit', 'nombre_pob': 'TextEdit', 'nivel': 'TextEdit', 'estado': 'TextEdit', });
lyr_1109RedNaturaRecor_2.set('fieldImages', {'id': 'TextEdit', 'codigoespa': 'TextEdit', 'nombre': 'TextEdit', 'figura': 'TextEdit', 'superficie': 'TextEdit', });
lyr_03_09_Deposito_3.set('fieldImages', {'id': 'TextEdit', 'codigo': 'TextEdit', 'red': 'TextEdit', 'nombre': 'TextEdit', 'org_comp': 'TextEdit', 'cota': 'TextEdit', 'altura': 'TextEdit', 'estado': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_EJEOSUNAPUEBLAejeentities_4.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_AFECCIONES_PUEBLA_5.set('fieldImages', {'MAPA': 'Range', 'DELEGACIO': 'Range', 'MUNICIPIO': 'Range', 'MASA': 'TextEdit', 'HOJA': 'TextEdit', 'PARCELA': 'TextEdit', 'SUBPARCE': 'TextEdit', 'TIPO': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'AREA': 'TextEdit', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'Range', 'NUM_EXP': 'Range', 'CONTROL': 'Range', 'ALTITUD': 'Range', 'PENDIENTE': 'TextEdit', 'REFCAT': 'TextEdit', 'VIA': 'Range', 'NUMERO': 'Range', 'NUMERODUP': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'CONCA': 'TextEdit', 'CodFinca': 'TextEdit', 'Dominio': 'TextEdit', 'Temporal': 'TextEdit', 'ServAcue': 'TextEdit', 'CAPA': 'TextEdit', });
lyr_SERVIDUMBREACUEDUCTOentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_SERVIDUMBREACUEDUCTOentities_7.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_SERVIDUMBREACUEDUCTOentities_8.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ARQUETASentities_9.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ARQUETASentities_10.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_ARQUETASentities_11.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_AcotacionEjeOsunaPueblaentities_12.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_AcotacionEjeOsunaPueblaentities_13.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EJEOSUNAPUEBLAejeentities_14.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_0702NucleosUrbanospol1Recor1_1.set('fieldLabels', {'codigo_nd': 'no label', 'cod_pob': 'no label', 'nombre_pob': 'no label', 'nivel': 'no label', 'estado': 'no label', });
lyr_1109RedNaturaRecor_2.set('fieldLabels', {'id': 'no label', 'codigoespa': 'no label', 'nombre': 'no label', 'figura': 'no label', 'superficie': 'no label', });
lyr_03_09_Deposito_3.set('fieldLabels', {'id': 'no label', 'codigo': 'no label', 'red': 'no label', 'nombre': 'no label', 'org_comp': 'no label', 'cota': 'no label', 'altura': 'no label', 'estado': 'no label', 'capacidad': 'no label', });
lyr_EJEOSUNAPUEBLAejeentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AFECCIONES_PUEBLA_5.set('fieldLabels', {'MAPA': 'no label', 'DELEGACIO': 'no label', 'MUNICIPIO': 'no label', 'MASA': 'no label', 'HOJA': 'no label', 'PARCELA': 'no label', 'SUBPARCE': 'no label', 'TIPO': 'no label', 'COORX': 'no label', 'COORY': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'AREA': 'no label', 'NINTERNO': 'no label', 'PCAT1': 'no label', 'PCAT2': 'no label', 'EJERCICIO': 'no label', 'NUM_EXP': 'no label', 'CONTROL': 'no label', 'ALTITUD': 'no label', 'PENDIENTE': 'no label', 'REFCAT': 'no label', 'VIA': 'no label', 'NUMERO': 'no label', 'NUMERODUP': 'no label', 'layer': 'no label', 'path': 'no label', 'CONCA': 'no label', 'CodFinca': 'no label', 'Dominio': 'no label', 'Temporal': 'no label', 'ServAcue': 'no label', 'CAPA': 'no label', });
lyr_SERVIDUMBREACUEDUCTOentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_SERVIDUMBREACUEDUCTOentities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_SERVIDUMBREACUEDUCTOentities_8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ARQUETASentities_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ARQUETASentities_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ARQUETASentities_11.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AcotacionEjeOsunaPueblaentities_12.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AcotacionEjeOsunaPueblaentities_13.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EJEOSUNAPUEBLAejeentities_14.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EJEOSUNAPUEBLAejeentities_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});