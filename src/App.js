import React, { useState } from 'react';
import AllData from './AllData'
import './style.css'
import { queryByTestId } from '@testing-library/react';
function App() {

  const [images, setImage] = useState(AllData)
  const [record, setRecord] = useState()

  const allItem = () => {
    const finalData = AllData.filter((value) => {
      return value;
    })
    setImage(finalData)
  }

  const breakfast = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem
    })

    setImage(finalData)
  }

  const lunch = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem
    })

    setImage(finalData)
  }

  const Dinner = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem
    })
    setImage(finalData)
  }

  return (
    <>
      <div className="container my-3" >
                          <h1 className='text-center'>Food Menu</h1>
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <button className='btn btn-primary' onClick={allItem}>All</button>
          </div>
          <div className="col-3">
            <h1 className="img-1" />
            <button className='btn btn-primary' onClick={() => breakfast('breakfast')}>Breakfast</button>
          </div>
          <div className="col-3">
            <h1 className="img-1 img-2" />
            <button className='btn btn-primary btn' onClick={() => lunch('lunch')}>LUNCH</button>
          </div>
          <div className="col-3">
            <h1 className="img-1" />
            <button className='btn btn-primary' onClick={() => Dinner('dinner')}>Dinner</button>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {
            images.map((value) => {
              const { name, qty, price, category, } = value;
              return (
                <>
                  <div className="col mt-1">
                    <img src={value.image} className='img-fluid' alt="image" />
                    <p>Category :-{category}</p>
                    <p>Name :-{name}</p>
                    <p>Price :-{price}</p>
                    <p>Qty :-{qty}</p>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>


    </>


  );
}

export default App;
