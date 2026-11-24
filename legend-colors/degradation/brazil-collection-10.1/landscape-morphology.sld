<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas Degradation brazil C10.1 - landscape morphology</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas Degradation brazil C10.1 - landscape morphology</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#1a9650" quantity="1" label="Core" opacity="1"/>
              <sld:ColorMapEntry color="#99d3b4" quantity="2" label="Edge" opacity="1"/>
              <sld:ColorMapEntry color="#44aab1" quantity="3" label="Corridor" opacity="1"/>
              <sld:ColorMapEntry color="#ffc941" quantity="4" label="Branch" opacity="1"/>
              <sld:ColorMapEntry color="#ffadce" quantity="5" label="Stepping Stone" opacity="1"/>
              <sld:ColorMapEntry color="#a9dae6" quantity="6" label="Perforation" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
