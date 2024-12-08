import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BarChartComponent({data}) {
  
  return (
    <div style={{ width: '100%', height: 300 }}>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" stackId="a" fill="#8884d8" />
        <Bar dataKey="population" stackId="a" fill="#82ca9d" />
      </BarChart>

    </div>
  )
}

export default BarChartComponent;