import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import nuke from "/maps/nuke.png"
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";
import Footer from "../components/Footer";

function Nuke() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={nuke}></img>

                    <Smoke left={500} top={422} name={"A Site"}/>
                    <Smoke left={485} top={575} name={"Outside CT"}/>
                    <Smoke left={530} top={565} name={"Outside 1"}/>
                    <Smoke left={560} top={590} name={"Outside 2"}/>
                    <Smoke left={460} top={600} name={"Outside T"}/>

                    <Origin left={290} top={510} parent={"A Site"} style={"jt"}
                    name={"asite"} url={"https://www.youtube.com/embed/5RnZWiW0iZ0?si=Th3nrZ5fesHVBEsn"}/>
                    <Origin left={590} top={515} parent={"Outside CT"} style={"tr"}
                    name={"ctoutside"} url={"https://www.youtube.com/embed/tUKxNCqMXfE?si=-qf50-PZgMQThTh2"} ct={true}/>
                    <Origin left={270} top={503} parent={"Outside 1"} style={"jt"}
                    name={"outside1_1"} url={"https://www.youtube.com/embed/L5U6X1OZjH0?si=0RbuKwqaTtfFNpDB"}/>
                    <Origin left={260} top={486} parent={"Outside 1"} style={"jt"}
                    name={"outside1_2"} url={"https://www.youtube.com/embed/Ah4rsclY0vM?si=hpytqWJxoHgOK8DR"}/>
                    <Origin left={270} top={503} parent={"Outside 2"} style={"jt"}
                    name={"outside2_1"} url={"https://www.youtube.com/embed/lxzSGRI5_Y4?si=lDfwpWb6EUrjPz3J"}/>
                    <Origin left={260} top={486} parent={"Outside 2"} style={"jt"}
                    name={"outside2_2"} url={"https://www.youtube.com/embed/R6pG8Z4JuOc?si=FLU7M2FX_ABFViid"}/>
                    <Origin left={370} top={550} parent={"Outside T"} style={"tr"}
                    name={"outside3"} url={"https://www.youtube.com/embed/ql72Z6ZEavY?si=rmwPmh55GlgRmEab"}/>

                    <Callout left={120} top={475} name={"T SPAWN"} size={30}/>
                    <Callout left={390} top={470} name={"LOBBY"} size={25}/>
                    <Callout left={425} top={560} name={"SILO"} size={20}/>
                    <Callout left={410} top={515} name={"SQUEAKY"}/>
                    <Callout left={425} top={415} name={"TROPHY"}/>
                    <Callout left={480} top={595} name={"OUTSIDE"} size={20}/>
                    <Callout left={500} top={635} name={"RED"}/>
                    <Callout left={580} top={660} name={"SECRET"} size={13}/>
                    <Callout left={610} top={595} name={"GARAGE"} size={20}/>
                    <Callout left={480} top={285} name={"RAMP"} size={25}/>
                    <Callout left={555} top={405} name={"HEAVEN"}/>
                    <Callout left={560} top={440} name={"LOCKER"}/>
                    <Callout left={470} top={485} name={"HUT"}/>
                    <Callout left={495} top={560} name={"MAIN"} size={20}/>
                    <Callout left={665} top={398} name={"CT-SPAWN"} size={30}/>
                    <Callout left={470} top={375} name={"BOOST"}/>

                    <Callout left={510} top={440} name={"A"}/>
                </TransformComponent>
            </TransformWrapper>
            <Footer />
        </div>
    )
}

export default Nuke