import React from 'react';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';
import { Carousel } from 'primereact/carousel';

const RoomCard = ({ room, photo }) => {
  console.log (room)
  const header = (
    <img alt="Room" src={photo} />
    // <div/>
  );

  const amenityItems = room.amenities.map((amenity, index) => (
    <li key={index}>{amenity}</li>
  ));

  const footer = (
    <div>
      <Rating value={room.rating} readOnly cancel={false} />
    </div>
  );

  return (
    <div className="p-col-12 p-md-6 p-lg-4">
      <Card title={room.type} subTitle={room.description} footer={footer}>
        {/* <Carousel value={photo} numVisible={1} numScroll={1} responsiveOptions={[]} circular style={{ maxWidth: '300px' }} /> */}
        {header}
        <div style={{ marginTop: '1em' }}>
          <h4>Amenities:</h4>
          <ul>
            {amenityItems}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default RoomCard;

