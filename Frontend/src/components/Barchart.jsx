import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset } from '../dataset/weather';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <>
<div className=" items-center">
<h1>Volunteer Engagement </h1>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
          { dataKey: 'london', label: 'chennai', valueFormatter },
          { dataKey: 'paris', label: 'trichy', valueFormatter },
          { dataKey: 'newYork', label: 'kanchi', valueFormatter },
          { dataKey: 'seoul', label: 'madurai', valueFormatter },
        ]}
        {...chartSetting}
        />
        </div>
    </>
  );
}
