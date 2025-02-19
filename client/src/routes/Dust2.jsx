import { useSelector } from "react-redux"
import { TransformWrapper, 
    TransformComponent } from "react-zoom-pan-pinch"
import ToolBar from "../components/Toolbar"
import Smoke from "../components/Smoke"
import dust2 from "../../../maps/dust2.png"
import NavBar from "../components/NavBar"
import Origin from "../components/Origin"
import Callout from "../components/Callout"
import Tutorial from "../components/Tutorial"

function Dust2() {


    return(
    <div>
        <NavBar />
        <ToolBar /> 
        <Tutorial />
        <TransformWrapper doubleClick={{disabled: true}}>
            <TransformComponent wrapperStyle={{margin: "auto"}}>
                <img src={dust2}></img>
                <Smoke left={200} top={180} name={"B Doors"}/>
                <Smoke left={200} top={90} name={"Window"}/>
                <Smoke left={73} top={245} name={"B Lurk"}/>
                <Smoke left={410} top={335} name={"Xbox"} />
                <Smoke left={390} top={300} name={"Mid Doors"}/>
                <Smoke left={700} top={190} name={"Cross"}/>
                <Smoke left={590} top={190} name={"CT A"}/>
                <Smoke left={420} top={190} name={"CT Mid"}/>
                <Smoke left={565} top={190} name={"A Setup"}/>
                <Smoke left={715} top={395} name={"Long Corner"}/>
                <Smoke left={600} top={470} name={"Long Doors"}/>
                
                <Origin left={380} top={765} 
                parent={"Xbox"} name={"xbox"} url={"https://www.youtube.com/embed/5SkRyZYHRp0?si=daaSUc_qwGkpP-Zv"} style={"jt"}/>
                <Origin left={131} top={435} 
                parent={"B Doors"} name={"bdoor2"} url={"https://www.youtube.com/embed/7T9pNRW6qTg?si=tfU8W7wFUm7Bdwcc"} style={"t"}/>
                <Origin left={220} top={540} 
                parent={"B Doors"} name={"bdoor1"} url={"https://www.youtube.com/embed/Rn8fFvPyJ28?si=Eqe1fsIILe5xWY0g"} style={"jt"}/>
                <Origin left={220} top={540} 
                parent={"Window"} name={"window"} url={"https://www.youtube.com/embed/beMKOOHC0YQ?si=dCW4_ydhsCbPmcEi"} style={"jt"}/>
                <Origin left={125} top={435}
                parent={"B Lurk"} name={"blurk"} url={"https://www.youtube.com/embed/kX_eQCgjJhk?si=jzQGWS7WbFhPv-80"} style={"t"}/>
                <Origin left={400} top={770} 
                parent={"Mid Doors"} name={"middoor"} url={"https://www.youtube.com/embed/5pd3rOSht28?si=06yzzGN8oCFoc8LB"} style={"jt"}/>
                <Origin left={665} top={425} 
                parent={"Cross"} name={"cross"} url={"https://www.youtube.com/embed/SboH_azCoe0?si=mVzkpVlBv0XqJNmE"} style={"t"}/>
                <Origin left={588} top={435} 
                parent={"CT A"} name={"cta"} url={"https://www.youtube.com/embed/NbTuMrYLe1M?si=C-zM-jAXCTQe735Q"} style={"t"}/>
                <Origin left={530} top={365}
                parent={"CT A"} name={"ctshort"} url={"https://www.youtube.com/embed/aTYjWMbj9pQ?si=6J_ePsb3zsQqB4UR"} style={"t"}/>
                <Origin left={425} top={365} info={"Jump while crouched"} 
                parent={"CT Mid"} name={"ctmid"} url={"https://www.youtube.com/embed/EcJMQRoWawM?si=M5-dBeTKIujeE_Ez"} style={"jt"}/>
                <Origin left={580} top={310} 
                parent={"A Setup"} name={"asetup"} url={"https://www.youtube.com/embed/wRjpc7hGlvQ?si=u9KQRPnhII1ECZh7"} style={"t"}/>
                <Origin left={450} top={770} 
                parent={"Long Corner"} name={"acorner"} url={"https://www.youtube.com/embed/P7UutENcV9E?si=44bOLEfJJEKpLGtv"} style={"jt"}/>
                <Origin left={635} top={165} 
                parent={"Long Doors"} name={"longdoors"} url={"https://www.youtube.com/embed/jun--xYtOWw?si=X-LhWUbRhHPBGXNh"} style={"jt"} ct={true}/>

                <Callout left={195} top={180} name={"B DOORS"}/>
                <Callout left={175} top={275} name={"CAR"}/>
                <Callout left={210} top={105} name={"WINDOW"}/>
                <Callout left={80} top={100} name={"B PLAT"}/>
                <Callout left={50} top={50} name={"BACK PLAT"}/>
                <Callout left={105} top={165} name={"BIG BOX"}/>
                <Callout left={135} top={310} name={"CLOSET"}/>
                <Callout left={35} top={200} name={"FENCE"}/>
                <Callout left={30} top={270} name={"CLOSE"}/>

                <Callout left={350} top={180} name={"CT MID"}/>
                <Callout left={365} top={300} name={"MID DOORS"}/>
                <Callout left={510} top={170} name={"CT SPAWN"}/>
                <Callout left={410} top={370} name={"XBOX"}/>
                <Callout left={480} top={340} name={"SHORT"} size={30}/>
                <Callout left={260} top={355} name={"LOWER TUNNELS"}/>
                <Callout left={545} top={300} name={"STAIRS"}/>

                <Callout left={570} top={75} name={"NINJA"}/>
                <Callout left={610} top={120} name={"A PLAT"}/>
                <Callout left={680} top={35} name={"GOOSE"}/>
                <Callout left={730} top={58} name={"BARRELS"}/>
                <Callout left={760} top={140} name={"RAMP"}/>
                <Callout left={835} top={210} name={"CAR"}/>
                <Callout left={740} top={330} name={"LONG"} size={30}/>
                <Callout left={710} top={210} name={"CROSS"}/>
                <Callout left={610} top={170} name={"BOOST"}/>
                <Callout left={765} top={550} name={"PIT"}/>
                <Callout left={680} top={530} name={"SIDE PIT"}/>
                <Callout left={810} top={520} name={"PIT PLAT"}/>
                <Callout left={630} top={410} name={"BLUE"}/>
                <Callout left={575} top={535} name={"LONG DOORS"}/>

                <Callout left={75} top={405} name={"UPPER TUNNELS"} size={23}/>
                <Callout left={90} top={600} name={"OUTSIDE TUNNELS"}/>
                <Callout left={160} top={700} name={"T PLAT"}/>

                <Callout left={525} top={680} name={"OUTSIDE LONG"}/>
                <Callout left={440} top={560} name={"TOP MID"}/>
                <Callout left={350} top={560} name={"GREEN"}/>
                <Callout left={450} top={450} name={"CAT"}/>
                <Callout left={385} top={430} name={"MID"} size={30}/>
                <Callout left={375} top={700} name={"SUICIDE"}/>
                <Callout left={290} top={795} name={"T SPAWN"} size={30}/>
            </TransformComponent>
        </TransformWrapper>
    </div>
    )
}

export default Dust2