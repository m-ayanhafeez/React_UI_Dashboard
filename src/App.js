
import CardFirstRow from "./Components/CardsFirstRow/CardFirstRow";
import TableCard from "./Components/CardsTableThirdRow/TableCard";
import NavHeaderMain from "./Components/NavHeader/NavHeaderMain";
import MainSecondRow from "./Components/SecondRowCard/MainSecondRow";
// import CollapsibleExample from "./NavHeader/CollapsibleExample";
// import DonutChart from "./Components/DonutChart/DonutChart";

function App() {
  return (
   <div>
    <NavHeaderMain/>
   <CardFirstRow/>
   <MainSecondRow/>
   <TableCard/> 
   {/* <BarChart /> */}
  {/* <DonutChart/> */}
  {/* <AreaChart/> */}

    </div>
  );
}

export default App;
