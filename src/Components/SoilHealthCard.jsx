import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function SoilHealthCard() {
  const nutrients = [
    'AS%',
    'SrAc%',
    'HAc%',
    'MAc%',
    'SlAc%',
    'N%',
    'MlAl%',
    'SlAl%',
    'Zn%',
    'Fe%',
    'Cu%',
    'Mn%',
    'B%',
    'S%',
    'N',
    'OC',
    'P',
    'K',
  ];
  const [nutrientValue, setNutrientValue] = useState(Array(18).fill(0));
  const navigate = useNavigate();

  const handleInputChange = (index, event) => {
    const newNutrientValue = [...nutrientValue];
    newNutrientValue[index] = Number(event.target.value);
    setNutrientValue(newNutrientValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await fetch('http://127.0.0.1:5000/predict', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nutrientValue }),
    // });

    // const data = await response.json();

    // const data = {
    //   Cotton_KNR: 1.2700626777500001,
    //   Cotton_SVR: 1.3525133055223062,
    //   Rapeseed_KNR: 1.5533333334,
    //   Rapeseed_SVR: 1.4305792494298675,
    //   Rice_KNR: 3.7758696287999998,
    //   Rice_SVR: 4.053365839959076,
    //   Urad_KNR: 0.6278183912520002,
    //   Urad_SVR: 0.6007634676788972,
    //   arhar_KNR: 1.0174418389879993,
    //   arhar_SVR: 1.0174418389879993,
    //   barley_KNR: 3.844436464570001,
    //   barley_SVR: 3.921193379316254,
    //   gram_KNR: 1.1762917679660003,
    //   gram_SVR: 1.2119816891310224,
    //   guarseed_KNR: 0.8831135298920003,
    //   guarseed_SVR: 0.7902142015827979,
    //   maize_KNR: 3.69896224545,
    //   maize_SVR: 3.8771146494201902,
    //   moong_KNR: 0.698524863698,
    //   moong_SVR: 0.6951878423874562,
    //   peasandbeans_KNR: 1.6731873196400002,
    //   peasandbeans_SVR: 1.5478378638969028,
    //   sesamum_KNR: 0.34557607722000006,
    //   sesamum_SVR: 0.3426854143807491,
    //   sugarcane_KNR: 77.06797718088,
    //   sugarcane_SVR: 76.70158399842452,
    //   wheat_KNR: 4.554,
    //   wheat_SVR: 4.575600810785631,
    // };
    const data = {
      cotton: [1.2700626777500001, 1.3525133055223062],
      rapeseed: [1.5533333334, 1.4305792494298675],
      rice: [3.7758696287999998, 4.2342423423465],
      urad: [0.6278183912520002, 0.5324242424246],
      barley: [3.844436464570001, 3.921193379316254],
      gram: [1.1762917679660003, 1.2119816891310224],
      guarseed: [0.8831135298920003, 0.7902142015827979],
      maize: [3.69896224545, 3.8771146494201902],
      moong: [0.698524863698, 0.6951878423874562],
      peasandbeans: [1.6731873196400002, 1.5478378638969028],
      sesamum: [0.34557607722000006, 0.3426854143807491],
      sugarcane: [7.06797718088, 6.70158399842452],
      arhar: [1.0174418389879993, 1.0174418389879993],
      wheat: [4.554, 4.575600810785631],
    };
    navigate('/result', { state: { data } });
  };

  return (
    <div className='health-card-wrapper width-60'>
      <div className='health-card-heading'>Soil Health Card</div>
      <div className='soil-test-result'>
        <form onSubmit={handleSubmit}>
          <table className='test-result'>
            <thead>
              <th className='table-heading' colSpan={5}>
                Soil Test Result
              </th>
              <tr className='bg-green'>
                <th>Parameter</th>
                <th>Test Value</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {nutrientValue.map((nutrient, index) => {
                return (
                  <tr>
                    <td>{nutrients[index]}</td>
                    <td>
                      <Form.Control
                        type='number'
                        onChange={(event) => handleInputChange(index, event)}
                        value={nutrient}
                      />
                    </td>
                    <td>%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type='submit' className='btn btn-primary'>
            Predict Yield
          </button>
        </form>
      </div>
    </div>
  );
}

export default SoilHealthCard;
