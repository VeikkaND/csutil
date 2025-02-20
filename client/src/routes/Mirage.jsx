import { TransformComponent, 
    TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import mirage from "../../../maps/mirage.png"
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";
import Tutorial from "../components/Tutorial";

function Mirage() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={mirage}></img>

                    <Smoke left={340} top={385} name={"Window"}/>
                    <Smoke left={550} top={350} name={"Mid Cross"}/>
                    <Smoke left={425} top={430} name={"Connector"}/>
                    <Smoke left={400} top={310} name={"Mid Short"}/>
                    <Smoke left={340} top={240} name={"B Short"}/>
                    <Smoke left={180} top={230} name={"B Site"}/>
                    <Smoke left={200} top={330} name={"Market Window"}/>
                    <Smoke left={130} top={330} name={"Market Door"}/>
                    <Smoke left={420} top={550} name={"Jungle"}/>
                    <Smoke left={455} top={545} name={"Stairs"}/>
                    <Smoke left={380} top={700} name={"CT"}/>
                    <Smoke left={535} top={635} name={"Palace Lurk"}/>

                    <Origin left={804} top={275} parent={"Window"} style={"jtr"}
                    name={"window"} url={"https://www.youtube.com/embed/JwiO0wMsloM?si=RhGWJC9BUmA7cryt"} info={"Hold D while throwing"}/>
                    <Origin left={810} top={280} parent={"Mid Cross"} style={"t"}
                    name={"midcross"} url={"https://www.youtube.com/embed/iIAbUcHi8yQ?si=XGCtJoB5O43iIjyZ"}/>
                    <Origin left={810} top={280} parent={"Connector"} style={"jt"}
                    name={"conn"} url={"https://www.youtube.com/embed/0KpgY2SWYd4?si=JHHb-IAv6lbW8rS5"}/>
                    <Origin left={810} top={280} parent={"Mid Short"} style={"jt"}
                    name={"shortmid"} url={"https://www.youtube.com/embed/bGqgI1bEHlI?si=qFbaKc8ItlmeUmZ9"}/>
                    <Origin left={575} top={135} parent={"B Short"} style={"t"}
                    name={"shortb"} url={"https://www.youtube.com/embed/5W0Lif1yrKs?si=KklMjLWoJzcPCyDs"}/>
                    <Origin left={475} top={180} parent={"B Site"} style={"t"}
                    name={"bsite"} url={"https://www.youtube.com/embed/N8qeJaVHdU4?si=bjoejQj6cQHcAJVm"}/>
                    <Origin left={575} top={135} parent={"Market Window"} style={"jt"}
                    name={"marketwindow"} url={"https://www.youtube.com/embed/biphvyW833w?si=xM33ACQzcuctYwNk"} info={"Aim above dark spot"}/>
                    <Origin left={575} top={135} parent={"Market Door"} style={"jt"}
                    name={"marketdoor"} url={"https://www.youtube.com/embed/hbdzN8JQHuU?si=l5LjET1Ly25qySfz"}/>
                    <Origin left={730} top={470} parent={"Jungle"} style={"jt"}
                    name={"jungle1"} url={"https://www.youtube.com/embed/r8XeVA-yM9o?si=TZghNL5AuJqOHBUB"}/>
                    <Origin left={705} top={510} parent={"Jungle"} style={"jt"}
                    name={"jungle2"} url={"https://www.youtube.com/embed/8B9C3r43wPg?si=A96PBtJaydXnoIIl"}/>
                    <Origin left={730} top={470} parent={"Stairs"} style={"jt"}
                    name={"stairs1"} url={"https://www.youtube.com/embed/hHWKpCQ-aZE?si=UoL8Ou2r3jg4Sq8I"}/>
                    <Origin left={705} top={510} parent={"Stairs"} style={"jt2"}
                    name={"stairs2"} url={"https://www.youtube.com/embed/uTZod9ulk6M?si=t-Py9IgG1C2lX0PB"}/>
                    <Origin left={750} top={470} parent={"CT"} style={"jt"}
                    name={"ct"} url={"https://www.youtube.com/embed/-ooqj6MtFGM?si=Hk8TC8GQQbLTtFGF"}/>
                    <Origin left={625} top={665} parent={"Palace Lurk"} style={"t"}
                    name={"palacelurk"} url={"https://www.youtube.com/embed/z_KAjOPC32o?si=f0ZVgv28LtHi5Ycs"} info={"Aim in between the two stains"}/>

                    <Callout left={735} top={315} name={"T SPAWN"} size={30}/>
                    <Callout left={590} top={360} name={"TOP MID"}/>
                    <Callout left={505} top={447} name={"CHAIR"} size={14}/>
                    <Callout left={470} top={365} name={"CATWALK"}/>
                    <Callout left={460} top={400} name={"MID"} size={30}/>

                    <Callout left={570} top={145} name={"T APPS"}/>
                    <Callout left={270} top={155} name={"B APPS"} size={25}/>
                    <Callout left={430} top={217} name={"STAIRS"}/>
                    <Callout left={380} top={255} name={"SHORT"} size={23}/>
                    <Callout left={353} top={365} name={"UNDERPASS"} rotate={90} size={14}/>

                    <Callout left={345} top={310} name={"LADDER"}/>
                    <Callout left={315} top={400} name={"WINDOW"}/>
                    <Callout left={315} top={525} name={"JUNGLE"} size={25}/>
                    <Callout left={400} top={480} name={"CONNECTOR"}/>

                    <Callout left={445} top={540} name={"STAIRS"}/>
                    <Callout left={540} top={555} name={"TETRIS"}/>
                    <Callout left={630} top={575} name={"RAMP"}/>
                    <Callout left={480} top={570} name={"SANDWICH"} size={11}/>
                    <Callout left={580} top={700} name={"PALACE"}/>
                    <Callout left={550} top={645} name={"SHADOW"}/>
                    <Callout left={500} top={715} name={"FIREBOX"} rotate={-30}/>
                    <Callout left={465} top={700} name={"NINJA"} rotate={-30}/>
                    <Callout left={440} top={640} name={"TRIPLE"}/>
                    <Callout left={385} top={755} name={"TICKET"}/>

                    <Callout left={335} top={705} name={"CT"} size={25}/>
                    <Callout left={190} top={620} name={"CT SPAWN"} size={30}/>
                    <Callout left={180} top={390} name={"MARKET"} size={20}/>
                    <Callout left={190} top={350} name={"B WINDOW"} size={14}/>
                    <Callout left={135} top={340} name={"DOOR"}/>
                    <Callout left={100} top={235} name={"BENCH"}/>
                    <Callout left={150} top={165} name={"VAN"}/>
                    <Callout left={275} top={215} name={"ARCHES"}/>
                    <Callout left={270} top={300} name={"E BOX"}/>

                    <Callout left={475} top={665} name={"A"}/>
                    <Callout left={195} top={240} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Mirage