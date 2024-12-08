import {PieChart,Pie,Tooltip } from 'recharts';


function PieChartComponent({dataKey,data}){
      
    return(
        <div>
         <PieChart width={300} height={300}>
          <Pie
            dataKey={dataKey}
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d0"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
    )
}

export default PieChartComponent