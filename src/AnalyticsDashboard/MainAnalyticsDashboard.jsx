import React from 'react';
import MainThirdCard from "../Components/CardsTableThirdRow/MainThirdCard";
import CardFirstRow from "../Components/CardsFirstRow/CardFirstRow";
import MainSecondRow from "../Components/SecondRowCard/MainSecondRow";

export const MainAnalyticsDashboard = () => {
    return (
        <div>
            <CardFirstRow />
            <MainSecondRow />
            <MainThirdCard />
        </div>
    )
}

export default MainAnalyticsDashboard;



