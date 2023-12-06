import React, { useMemo } from 'react'

import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'

import data from '../data'
import { chartTemplate } from '../constants'

const chartSetting = {
  yAxis: [
    {
      label: 'Response %',
    },
  ],
  width: 900,
  height: 600,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
}

const valueFormatter = (value) => `${value}%`

export default function Chart() {
  const dataset = useMemo(() => Object.entries(data).reduce((accum, curr) => {
    const [_, { question, options }] = curr
    const [questionIdx, __] = question.split(':')
    const obj = {}

    options.forEach((item, idx) => {
      obj[`answer ${idx + 1}`] = parseInt(item.score.replace('%', ''), 10)
    })

    const data = { ...chartTemplate, ...obj, ...{ questionIdx: questionIdx }}

    return [...accum, data]
  }, []), [data])

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'questionIdx' }]}
      series={[
        { dataKey: 'answer 1', label: 'answer 1', valueFormatter },
        { dataKey: 'answer 2', label: 'answer 2', valueFormatter },
        { dataKey: 'answer 3', label: 'answer 3', valueFormatter },
        { dataKey: 'answer 4', label: 'answer 4', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
