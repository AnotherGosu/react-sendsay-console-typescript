import styled from 'styled-components';

import Header from 'components/header';
import HistoryTable from 'components/statistics/table';
import DoughnutChart from 'components/statistics/DoughnutChart';

export default function StatisticsPage() {
  return (
    <Page>
      <Header />
      <Main>
        <HistoryTable />
        <DoughnutChart />
      </Main>
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 25px;
`;
