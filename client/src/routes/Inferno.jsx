import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import inferno from "../../../maps/inferno.png"
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";

function Inferno() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={inferno}></img>

                    <Smoke left={675} top={415} name={"Arch"}/>
                    <Smoke left={760} top={620} name={"A - Retake"}/>
                    <Smoke left={715} top={680} name={"Balcony Lurk"}/>
                    <Smoke left={440} top={95} name={"Coffin"}/>
                    <Smoke left={530} top={190} name={"CT - Boost"}/>
                    <Smoke left={600} top={480} name={"Long"}/>
                    <Smoke left={760} top={500} name={"Moto"}/>
                    <Smoke left={595} top={575} name={"Top Mid"}/>
                    <Smoke left={750} top={660} name={"Truck"}/>

                    <Origin left={480} top={725} parent={"Arch"} style={"jt"}
                    name={"arch"} url={""}/>
                    <Origin left={720} top={465} parent={"A - Retake"} style={"jt2"}
                    name={"aretake"} url={""}/>
                    <Origin left={660} top={730} parent={"Balcony Lurk"} style={"t"}
                    name={"balconylurk"} url={""}/>
                    <Origin left={435} top={370} parent={"Coffin"} style={"jt"}
                    name={"arch"} url={""}/>
                    <Origin left={415} top={400} parent={"CT - Boost"} style={"jt"}
                    name={"ctboost"} url={""}/>
                    <Origin left={495} top={650} parent={"Long"} style={"jt"}
                    name={"long"} url={""}/>
                    <Origin left={480} top={725} parent={"Moto"} style={"jt"}
                    name={"moto"} url={""}/>
                    <Origin left={200} top={585} parent={"Top Mid"} style={"jt"}
                    name={"topmid"} url={""}/>
                    <Origin left={480} top={725} parent={"Truck"} style={"t"}
                    name={"truck"} url={""} info={"Crouch while throwing"}/>
                    <Origin left={595} top={630} parent={"Truck"} style={"t"}
                    name={"truck2"} url={""}/>

                    <Callout left={30} top={590} name={"T SPAWN"} size={30}/>
                    <Callout left={320} top={535} name={"T RAMP"} size={20}/>
                    <Callout left={280} top={705} name={"BRIDGE"}/>
                    <Callout left={340} top={765} name={"T APPS"}/>
                    <Callout left={360} top={700} name={"SECOND MID"} size={25}/>
                    <Callout left={480} top={575} name={"MID"} size={30}/>
                    <Callout left={390} top={630} name={"UNDERPASS"} size={13} rotate={90}/>
                    <Callout left={450} top={800} name={"BACK ALLEY"}/>

                    <Callout left={380} top={370} name={"BANANA"} size={25} rotate={-50}/>
                    <Callout left={350} top={435} name={"LOGS"}/>
                    <Callout left={490} top={355} name={"SANDBAGS"}/>
                    <Callout left={450} top={315} name={"CAR"}/>
                    <Callout left={455} top={245} name={"1ST"}/>
                    <Callout left={415} top={245} name={"2ND"}/>
                    <Callout left={350} top={215} name={"NEW BOX"}/>
                    <Callout left={365} top={110} name={"DARK"}/>
                    <Callout left={400} top={195} name={"FOUNTAIN"}/>
                    <Callout left={445} top={125} name={"COFFIN"}/>
                    <Callout left={455} top={60} name={"GARDEN"}/>
                    <Callout left={520} top={115} name={"CHURCH"} size={20}/>
                    <Callout left={580} top={190} name={"CT"} size={25}/>

                    <Callout left={530} top={705} name={"WINDOW"}/>
                    <Callout left={560} top={620} name={"BOILER"} size={20}/>
                    <Callout left={600} top={735} name={"APPS"} size={25}/>
                    <Callout left={650} top={665} name={"SHORT"} size={25}/>
                    <Callout left={670} top={480} name={"LONG"} size={25}/>
                    <Callout left={615} top={695} name={"PATIO"} size={13}/>
                    <Callout left={710} top={720} name={"BALCONY"}/>
                    <Callout left={555} top={455} name={"LONG CORNER"}/>
                    <Callout left={790} top={740} name={"PIT"} size={25}/>
                    <Callout left={680} top={560} name={"BACKSITE"} size={12}/>
                    <Callout left={790} top={630} name={"GRAVEYARD"}/>

                    <Callout left={740} top={300} name={"CT SPAWN"} size={30}/>
                    <Callout left={680} top={430} name={"ARCH"}/>
                    <Callout left={790} top={480} name={"LIBRARY"}/>
                    <Callout left={620} top={300} name={"SPEEDWAY"} rotate={90} size={20}/>

                    <Callout left={720} top={590} name={"A"}/>
                    <Callout left={427} top={160} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Inferno