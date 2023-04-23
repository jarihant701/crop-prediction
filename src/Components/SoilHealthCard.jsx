import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function SoilHealthCard() {
  const microNutrientsData = {
    OC: ['Organic Carbon (OC)', '%', 0.51, 0.71],
    N: ['Nitorgen (N)', '%', 280, 560],
    P: ['Phosphorous (P)', '%', 23, 57],
    K: ['Potassium (K)', '%', 143, 337],
  };

  const macroNutrientsData = {
    S: ['Sulphur (S)', 10],
    Zn: ['Zinc (Zn)', 0.6],
    B: ['Boron (B)', 0.5],
    Fe: ['Iron (Fe)', 4.5],
    Mn: ['Manganese (Mn)', 2.0],
    Cu: ['Copper (Cu)', 0.2],
  };

  const calculateRatingForMicroNutrientsData = (
    minValue,
    maxValue,
    testValue
  ) => {
    if (testValue === '') return '';
    if (minValue > testValue) return 'Low';
    if (maxValue < testValue) return 'High';
    return 'Normal';
  };

  const calculateRatingForMacroNutrients = (value, testValue) => {
    if (testValue === '') return '';
    if (value > testValue) return 'Deficient';
    return 'Sufficient';
  };

  const [microNutrients, setMicroNutrients] = useState(['', '', '', '']);
  const microNutrientsDataFieldOnChange = (index) => (event) => {
    let newArr = [...microNutrients];
    newArr[index] = event.target.value;
    setMicroNutrients(newArr);
  };

  const [macroNutrients, setmacroNutrients] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const macroNutrientsDataFieldOnChange = (index) => (event) => {
    let newArr = [...macroNutrients];
    newArr[index] = event.target.value;
    setmacroNutrients(newArr);
  };

  return (
    <div className='health-card-wrapper'>
      <div className='health-card-heading'>Soil Health Card</div>
      <div className='soil-test-result'>
        <table className='test-result'>
          <thead>
            <th className='table-heading' colSpan={5}>
              Soil Test Result
            </th>
            <tr className='bg-green'>
              <th>Parameter</th>
              <th>Test Value</th>
              <th>Unit</th>
              <th>Rating</th>
              <th>Normal Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(microNutrientsData).map((key, index) => {
              return (
                <tr>
                  <td>{microNutrientsData[key][0]}</td>
                  <td>
                    <Form.Control
                      type='number'
                      onChange={microNutrientsDataFieldOnChange(index)}
                      value={microNutrients[index]}
                    />
                  </td>
                  <td>{microNutrientsData[key][1]}</td>
                  <td
                    className={calculateRatingForMicroNutrientsData(
                      microNutrientsData[key][2],
                      microNutrientsData[key][3],
                      microNutrients[index]
                    )}
                  >
                    {calculateRatingForMicroNutrientsData(
                      microNutrientsData[key][2],
                      microNutrientsData[key][3],
                      microNutrients[index]
                    )}
                  </td>
                  <td>{`${microNutrientsData[key][2]} - ${microNutrientsData[key][3]} ${microNutrientsData[key][1]}`}</td>
                </tr>
              );
            })}
            {Object.keys(macroNutrientsData).map((key, index) => {
              return (
                <tr key={index}>
                  <td>{macroNutrientsData[key][0]}</td>
                  <td>
                    <Form.Control
                      type='number'
                      onChange={macroNutrientsDataFieldOnChange(index)}
                      value={macroNutrients[index]}
                    />
                  </td>
                  <td>%</td>
                  <td
                    className={calculateRatingForMacroNutrients(
                      macroNutrientsData[key][1],
                      macroNutrients[index]
                    )}
                  >
                    {calculateRatingForMacroNutrients(
                      macroNutrientsData[key][1],
                      macroNutrients[index]
                    )}
                  </td>
                  <td>{`> ${macroNutrientsData[key][1]} %`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SoilHealthCard;
