import React from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import icoLocation from "./icoLocation.png";
import icoUser from "./user.png";
import informationIcon from "./information-icon.png";

const FloorView = () => {
  const locations = [
    {
      info: "Krishna Accottillam \n Seat: 12345 \n EID:M1020104",
      seats: [
        { x: 1, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 },
        { x: 0, y: 2, z: 0 },
        { x: -1, y: 1, z: 0 },
        { x: -1, y: 2, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 0 },
        { x: 1, y: 2, z: 0 }
      ]
    },
    {
      info: "Krishna Accottillam \n Seat: 12345 \n EID:M1020104",
      seats: [
        { x: 1, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 },
        { x: 0, y: 2, z: 0 },
        { x: -1, y: 1, z: 0 },
        { x: -1, y: 2, z: 0 },
        { x: -1, y: 0, z: 0 },
        { x: 1, y: 1, z: 0 },
        { x: 1, y: 2, z: 0 }
      ]
    },
    {
      info: "Krishna Accottillam \n Seat: 12345 \n EID:M1020104",
      seats: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 },
        { x: 0, y: 2, z: 0 },
        { x: -1, y: 1, z: 0 },
        { x: -1, y: 2, z: 0 },
        { x: -1, y: 0, z: 0 },
        { x: 1, y: 1, z: 0 },
        { x: 1, y: 2, z: 0 }
      ]
    }
  ];

  return (
    <AFrameRenderer
      arToolKit={{
        sourceType: "webcam",
        debugUIEnabled: false,
        detectionMode: "mono_and_matrix",
        matrixCodeType: "3x3"
      }}
    >
      {locations.map((l, index) => {
        return (
          <Marker parameters={{ type: "barcode", value: index.toString() }}>
            <a-assets-item img id="icoLocation" src={icoLocation} />
            <a-assets-item img id="icoUser" src={icoUser} />

            <a-assets-item img id="informationIcon" src={informationIcon} />

            <a-entity rotation="-90 0 0" position="-1 3 -1">
              <a-text
                value={l.info}
                align="center"
                side="double"
                position="0 0 0"
                size=".3"
                color="green"
              ></a-text>
            </a-entity>
            <a-image
              src="#icoUser"
              position={`${index - 1} 0 0`}
              scale="0.4 0.4 0.4"
              rotation="-90 0 0"
            ></a-image>
            {locations[index].seats.map(m => {
              return (
                <a-image
                  src="#icoLocation"
                  position={`${m.x} ${m.y} ${m.z}`}
                  scale="0.4 0.4 0.4"
                  rotation="-90 0 0"
                ></a-image>
              );
            })}
          </Marker>
        );
      })}
      {/* <Marker parameters={{ type: "barcode", value: "6" }}>
        <a-assets-item img id="icoLocation" src={icoLocation} />
        <a-assets-item img id="icoUser" src={icoUser} />

        <a-assets-item img id="informationIcon" src={informationIcon} />

        <a-entity rotation="-90 0 0" position="-1 3 -1">
          <a-text
            value="Krishna Accottillam \n Seat: 12345 \n EID:M1020104"
            align="center"
            side="double"
            position="0 0 0"
            size=".3"
            color="green"
          ></a-text>
        </a-entity>
        <a-image
          src="#icoUser"
          position="0 0 0"
          scale="0.4 0.4 0.4"
          rotation="-90 0 0"
        ></a-image>
        {locations[0].map(m => {
          return (
            <a-image
              src="#icoLocation"
              position={`${m.x} ${m.y} ${m.z}`}
              scale="0.4 0.4 0.4"
              rotation="-90 0 0"
            ></a-image>
          );
        })}
      </Marker>
      <Marker parameters={{ type: "barcode", value: "5" }}>
        <a-assets-item img id="icoUser" src={icoUser} />
        <a-image
          src="#icoUser"
          position="1 0 0"
          scale="0.4 0.4 0.4"
          rotation="-90 0 0"
        ></a-image>
        {locations[1].map(m => {
          return (
            <a-image
              src="#icoLocation"
              position={`${m.x} ${m.y} ${m.z}`}
              scale="0.4 0.4 0.4"
              rotation="-90 0 0"
            ></a-image>
          );
        })}
      </Marker>
      <Marker parameters={{ type: "barcode", value: "4" }}>
        <a-assets-item img id="icoUser" src={icoUser} />
        <a-image
          src="#icoUser"
          position="-1 0 0"
          scale="0.4 0.4 0.4"
          rotation="-90 0 0"
        ></a-image>
        {locations[2].map(m => {
          return (
            <a-image
              src="#icoLocation"
              position={`${m.x} ${m.y} ${m.z}`}
              scale="0.4 0.4 0.4"
              rotation="-90 0 0"
            ></a-image>
          );
        })}
      </Marker> */}
    </AFrameRenderer>
  );
};
export default FloorView;
