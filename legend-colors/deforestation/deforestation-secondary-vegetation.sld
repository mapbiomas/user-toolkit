<?xml version="1.0" encoding="UTF-8"?>
<sld:StyledLayerDescriptor version="1.0.0"
    xmlns:sld="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <sld:NamedLayer>
    <sld:Name>MapBiomas deforestation and secondary vegetation</sld:Name>
    <sld:UserStyle>
      <sld:Name>MapBiomas deforestation and secondary vegetation</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ColorMap type="values">
              <sld:ColorMapEntry color="#fffbc2" quantity="1" label="Anthropic" opacity="1"/>
              <sld:ColorMapEntry color="#09611f" quantity="2" label="Primary Vegetation" opacity="1"/>
              <sld:ColorMapEntry color="#4ea376" quantity="3" label="Secondary Vegetation" opacity="1"/>
              <sld:ColorMapEntry color="#e31a1c" quantity="4" label="Deforestation in  Primary Vegetation" opacity="1"/>
              <sld:ColorMapEntry color="#94fc03" quantity="5" label="Secondary Vegetation Regrowth" opacity="1"/>
              <sld:ColorMapEntry color="#ffa500" quantity="6" label="Deforestation in  Secondary Vegetation" opacity="1"/>
              <sld:ColorMapEntry color="#212121" quantity="7" label="Not applied" opacity="1"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
