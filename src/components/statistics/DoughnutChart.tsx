import {Doughnut} from 'react-chartjs-2';
import {useAppSelector} from 'store';
import {selectDoughnutChartData} from 'store/slices/console/selectors';

import {DOUGHNUT_CHART} from 'components/constants';

export default function DoughnutChart() {
  const data = useAppSelector(selectDoughnutChartData);

  const doughnutChartData = {labels: DOUGHNUT_CHART.labels, datasets: [{...DOUGHNUT_CHART.datasets[0], data}]};

  return (
    <div>
      <Doughnut data={doughnutChartData} width="100%" height="100%" options={{maintainAspectRatio: false}} />
    </div>
  );
}
