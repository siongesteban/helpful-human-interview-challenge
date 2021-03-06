import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`;

const Content = styled.section`
  padding: 80px 40px;
  width: 100%;
  overflow-y: auto;
`;

export const S = {
  Page,
  Content,
};
