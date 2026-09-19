<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas Fire brazil C5 - burned area by scar size</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas Fire brazil C5 - burned area by scar size</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#d0ae35" quantity="1" label="&lt; 10 ha" opacity="1"/>
              <sld:ColorMapEntry color="#d08d29" quantity="2" label="10 - 250 ha" opacity="1"/>
              <sld:ColorMapEntry color="#cc6c28" quantity="3" label="250 - 500 ha" opacity="1"/>
              <sld:ColorMapEntry color="#c2482e" quantity="4" label="500 - 5,000 ha" opacity="1"/>
              <sld:ColorMapEntry color="#b31e35" quantity="5" label="5,000 - 10,000 ha" opacity="1"/>
              <sld:ColorMapEntry color="#931f28" quantity="6" label="10,000 - 50,000 ha" opacity="1"/>
              <sld:ColorMapEntry color="#741e1d" quantity="7" label="50,000 - 100,000 ha" opacity="1"/>
              <sld:ColorMapEntry color="#571a14" quantity="8" label="&gt;= 100,000 ha" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
