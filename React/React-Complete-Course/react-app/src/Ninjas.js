import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  // const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name} </div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt} </div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete ninja
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  // const ninjaList = ninjas.map((ninja) => {
  //   return ninja.age > 20 ? (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: {ninja.name} </div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt} </div>
  //     </div>
  //   ) : null;
  // });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
