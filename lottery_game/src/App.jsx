
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import Lottorey from './Lottery'
function App() {


  return (
    <>
<Lottorey n={3} winningSum={15}/>
     {/* <Ticket ticket={[0,3,2]}/> */}
     {/* <TicketNum num={2}/> */}
     {/* <TicketNum num={3}/> */}
    </>
  )
}

export default App
