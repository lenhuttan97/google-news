import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newsTopHeadlines, selectdata } from './HomeSlice';
import { NewsBusiness , selectDataBusiness} from './kindSlice'

export function Home() {
    const data = useSelector(selectDataBusiness);
    const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);

useEffect(() => {
    console.log(data);
})

  return (
    <div>
        <button
          onClick={() => dispatch(NewsBusiness({pageSize: 5 , pageNumber: 1}))}
        >
          Add Amount
        </button>
      
    </div>
  )
}
