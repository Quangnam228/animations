import Header from "./Components/Header";
import {OuterLayout}  from './styles/Layouts';
import CardSection from './Components/CardSection';
import styled from 'styled-components';
import ChartSection from './Components/ChartSection';
import MessagingSection from "./Components/MessagingSection";
import PaymentSection from './Components/PaymentSection';
import FAQSection from './Components/FAQSection';
import Footer from'./Components/Footer';

import { Fade }  from 'react-reveal';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout >
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade left>
            <MessagingSection />
          </Fade>
          <Fade right>
            <PaymentSection />
          </Fade>
          <Fade left>
            <FAQSection />
          </Fade>
        </MainStyled>
      </OuterLayout>
      <Footer />
      {/* <Fade bottom>
      </Fade> */}
    </div>
  );
}

const MainStyled = styled.main`

`;
export default App;
