import style from './DashboardScreen.module.css';

import List from '../TodoList/List';
import Clock from '../Clock/Clock';
import Calendar from '../Calendar/Calendar';
import Weather from '../Weather/Weather';

function DashboardColumns({key, columnData}){
    return(
        <div key={"columns-"+columnData.order} className={`${
            columnData.proporcion === 25? style.dashboardColumn25: 
            columnData.proporcion === 50? style.dashboardColumn50: 
            columnData.proporcion === 75? style.dashboardColumn75: 
            style.dashboardColumn100}`}>
            {
                columnData.components.map((component) => {
                    var proporsion =  component.proporcion === 25? style.dashboardRow25: 
                    component.proporcion === 50? style.dashboardRow50: 
                    component.proporcion === 75? style.dashboardRow75: 
                    style.dashboardRow100;

                    switch(component.componentType){
                        case "Clock":
                            return <Clock key={key+"-row-"+component.order} className={proporsion} />;
                        case "List":
                            return <List key={key+"-row-"+component.order} className={proporsion} />;
                        case "Calendar":
                            return <Calendar key={key+"-row-"+component.order} className={proporsion} />;
                        // case "Weather":
                        //     return <Weather key={key+"-row-"+component.order} className={proporsion} />;
                        default:
                            return <div key={key+"-row-"+component.order} className={proporsion} > Componente Não Cadastrado </div>;
                    }
                })
            }
        </div>
    )
}

export default DashboardColumns;