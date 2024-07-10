import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Bentley', description: 'Continental GT  ', price: 230000, imageUrl: 'https://www.motortrend.com/uploads/sites/11/2019/02/2019-Bentley-Continental-GT-Convertible-11.jpg' },
  { id: 2, name: 'Buggati', description: 'Chiron', price: 3900000, imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=900&width=1600&fit=bounds' },
  { id: 3, name: 'Ferrari', description: 'SF90 Stradale', price: 570000, imageUrl: 'https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1714734880903-blob&w=3840&q=100' },
  { id: 4, name: 'Mercedes', description: 'G-Class', price: 175000, imageUrl: 'https://www.motortrend.com/uploads/2022/02/2022-Mercedes-Benz-G-Class-AMG-G63-22.jpg' },
  { id: 5, name: 'Porsche', description: '911 GT3RS', price: 240000, imageUrl: 'https://1884403144.rsc.cdn77.org/foto/porsche-911-gt3-rs-porsche-911-gt3-rs-nurburgring/MHgwL3NtYXJ0L3RoYg/29-normal690-7971391.jpg?v=2&st=UcDWmsV-W1CBxksFGD-NqisW-AGEGNK-rw5hxrX-ePI&ts=1600812000&e=0' },
  { id: 6, name: 'Dodge', description: 'SRT Hellcat', price: 90000, imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2019-dodge-challenger-srt-hellcat-redeye-comparison-104-1581425446.jpg?crop=0.651xw:0.489xh;0.0928xw,0.333xh&resize=1200:*' }
];

const Catalogue = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="container mt-5">
      <h2 className="text-center mb-4">Catalogue</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-dark" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalogue;
