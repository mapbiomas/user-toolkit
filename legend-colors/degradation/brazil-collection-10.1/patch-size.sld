<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas Degradation brazil C10.1 - patch size</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas Degradation brazil C10.1 - patch size</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#8b2a2e" quantity="1" label="less than or equal to 5ha" opacity="1"/>
              <sld:ColorMapEntry color="#af4122" quantity="2" label="less than or equal to 10ha" opacity="1"/>
              <sld:ColorMapEntry color="#d35e0e" quantity="3" label="less than or equal to 25ha" opacity="1"/>
              <sld:ColorMapEntry color="#f0a900" quantity="4" label="less than or equal to 50ha" opacity="1"/>
              <sld:ColorMapEntry color="#f9d800" quantity="5" label="less than or equal to 100ha" opacity="1"/>
              <sld:ColorMapEntry color="#fff176" quantity="6" label="less than or equal to 250ha" opacity="1"/>
              <sld:ColorMapEntry color="#b0d900" quantity="7" label="less than or equal to 500ha" opacity="1"/>
              <sld:ColorMapEntry color="#86d017" quantity="8" label="less than or equal to 1000ha" opacity="1"/>
              <sld:ColorMapEntry color="#5dc734" quantity="9" label="less than or equal to 5000ha" opacity="1"/>
              <sld:ColorMapEntry color="#39bc68" quantity="10" label="less than or equal to 10000ha" opacity="1"/>
              <sld:ColorMapEntry color="#efefef" quantity="11" label="All other patches" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
