<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="tilemap" tilewidth="16" tileheight="16" spacing="1" tilecount="132" columns="12">
 <image source="../kenney_tiny-dungeon/Tilemap/tilemap.png" width="203" height="186"/>
 <tile id="40">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
   <object id="2" x="0" y="0" width="16" height="16"/>
   <object id="3" x="0" y="-0.0909091" width="16" height="16.0909"/>
   <object id="4" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="122">
  <properties>
   <property name="unity:IsTrigger" value="true"/>
   <property name="unity:layer" value="Hazard"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="15.875">
    <properties>
     <property name="unity:IsTrigger" value="tru"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
</tileset>
