<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas Fire brazil C5 - potential severity (beta)</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas Fire brazil C5 - potential severity (beta)</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#003f1b" quantity="1" label="Very low" opacity="1"/>
              <sld:ColorMapEntry color="#8ee637" quantity="2" label="Low" opacity="1"/>
              <sld:ColorMapEntry color="#f2f222" quantity="3" label="Moderate" opacity="1"/>
              <sld:ColorMapEntry color="#ffa500" quantity="4" label="High" opacity="1"/>
              <sld:ColorMapEntry color="#ff0000" quantity="5" label="Very high" opacity="1"/>
              <sld:ColorMapEntry color="#8b0000" quantity="6" label="Extreme" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
