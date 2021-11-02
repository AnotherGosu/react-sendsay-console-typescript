import styled from 'styled-components';

import Header from 'components/console/header';
import HistoryTrack from 'components/console/history';
import ConsoleForm from 'components/console/form';

export default function ConsolePage() {
  return (
    <Page>
      <Header />
      <HistoryTrack />
      <ConsoleForm />
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  min-height: 100vh;
`;
