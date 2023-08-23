import { useState } from 'react';
import style from './DashboardScreen.module.css';

import DashboardColumn from './DashboardColumn';

import LeftArrow from '../../images/leftArrow.png';
import RightArrow from '../../images/rightArrow.png';

function DashboardScreen(props){

    var [currentScrren, setCurrentScreen] = useState(0);
    var screens = [
        {
            name: "Home",
            columns: [
                {
                    proporcion: 25,
                    components: [
                        {
                            componentType: 'Clock',
                            proporcion: 25,
                            order: 1
                        },
                        {
                            componentType: 'List',
                            proporcion: 3,
                            order: 2
                        }
                    ],
                    loadedCompoenents: [],
                    order: 1
                },
                {
                    proporcion: 2,
                    components: [
                        {
                            componentType: 'Calendar',
                            proporcion: 3,
                            order: 1
                        },
                        {
                            componentType: 'Weather',
                            proporcion: 25,
                            order: 2
                        }
                    ],
                    loadedCompoenents: [],
                    order: 2
                },
                {
                    proporcion: 25,
                    components: [
                        {
                            componentType: 'Temp',
                            proporcion: 4,
                            order: 1
                        }
                    ],
                    loadedCompoenents: [],
                    order: 3
                },
            ]
        },
        {
            name: "Teste",
            columns: [
                {
                    proporcion: 25,
                    components: [
                        {
                            componentType: 'Clock',
                            proporcion: 25,
                            order: 1
                        },
                        {
                            componentType: 'List',
                            proporcion: 3,
                            order: 2
                        }
                    ],
                    loadedCompoenents: [],
                    order: 1
                },
                {
                    proporcion: 2,
                    components: [
                        {
                            componentType: 'Calendar',
                            proporcion: 3,
                            order: 1
                        },
                        {
                            componentType: 'Clock',
                            proporcion: 25,
                            order: 2
                        }
                    ],
                    loadedCompoenents: [],
                    order: 2
                },
                {
                    proporcion: 25,
                    components: [
                        {
                            componentType: 'Temp',
                            proporcion: 4,
                            order: 1
                        }
                    ],
                    loadedCompoenents: [],
                    order: 3
                },
            ]
        }
    ];

    function moveScreenTo(screenNumber){
        var lastScreen = screens.length - 1;
        if(screenNumber < 0){
            screenNumber = 0;
        }else if(screenNumber > lastScreen){
            screenNumber = lastScreen;
        }

        setCurrentScreen(screenNumber);
    }

    return (
        <div className={style.dashboardScreen}>
            <header className={style.dashboardScreenHeader}>
                <h1>{screens[currentScrren].name}</h1>
            </header>
            <nav>
                { currentScrren > 0 && <div className={`${style.dashboardArrowBorders} ${style.dashboardArrowBordersLeft}`} onClick={() => moveScreenTo(currentScrren-1)}>
                    <img src={LeftArrow} className={`${style.dashboardLeftArrow} ${style.dashboardArrows}`} alt="LeftArrow"></img>
                </div>}
                { (screens.length-1) > currentScrren && <div className={`${style.dashboardArrowBorders} ${style.dashboardArrowBordersRight}`} onClick={() => moveScreenTo(currentScrren+1)}>
                    <img src={RightArrow} className={`${style.dashboardRightArrow} ${style.dashboardArrows}`} alt="RightArrow"></img>
                </div>}
            </nav>
            <div className={style.dashboardCustomArea}>
                {
                    screens[currentScrren].columns.map((column) => {
                        return (
                            <DashboardColumn key={"columns-"+column.order} columnData={column} />
                        )            
                    })
                }
            </div>
        </div>
    )
}

export default DashboardScreen;