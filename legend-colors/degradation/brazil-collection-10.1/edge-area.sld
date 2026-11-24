<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas Degradation brazil C10.1 - edge area</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas Degradation brazil C10.1 - edge area</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#bc4749" quantity="1" label="less than or equal to 30m" opacity="1"/>
              <sld:ColorMapEntry color="#d68c8d" quantity="2" label="less than or equal to 60m" opacity="1"/>
              <sld:ColorMapEntry color="#fff59d" quantity="3" label="less than or equal to 90m" opacity="1"/>
              <sld:ColorMapEntry color="#dce0af" quantity="4" label="less than or equal to 120m" opacity="1"/>
              <sld:ColorMapEntry color="#a7c957" quantity="5" label="less than or equal to 150m" opacity="1"/>
              <sld:ColorMapEntry color="#6a994e" quantity="6" label="less than or equal to 300m" opacity="1"/>
              <sld:ColorMapEntry color="#386641" quantity="7" label="less than or equal to 600m" opacity="1"/>
              <sld:ColorMapEntry color="#0d2207" quantity="8" label="less than or equal to 1000m" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
