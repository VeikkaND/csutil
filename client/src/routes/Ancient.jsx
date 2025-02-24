import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import NavBar from "../components/NavBar";
import ToolBar from "../components/Toolbar";
import Tutorial from "../components/Tutorial";
import ancient from "/maps/ancient.png"
import Callout from "../components/Callout";
import Smoke from "../components/Smoke";
import Origin from "../components/Origin";

function Ancient() {

    return(
        <div>
            <NavBar />
            <ToolBar />
            <Tutorial />
            <TransformWrapper doubleClick={{disabled: true}}>
                <TransformComponent wrapperStyle={{margin: "auto"}}>
                    <img src={ancient}></img>

                    <Smoke left={220} top={270} name={"Donut - A"}/>
                    <Smoke left={650} top={315} name={"Cave"}/>
                    <Smoke left={570} top={480} name={"Cheetah"}/>
                    <Smoke left={280} top={145} name={"CT"}/>
                    <Smoke left={330} top={385} name={"Donut - Mid"}/>
                    <Smoke left={805} top={275} name={"Long"}/>
                    <Smoke left={675} top={260} name={"Short"}/>
                    <Smoke left={160} top={130} name={"Temple"}/>
                    <Smoke left={410} top={305} name={"Top Mid"}/>

                    <Origin left={115} top={525} parent={"Donut - A"} style={"jt"}
                    name={"adonut"} url={"https://www.youtube.com/embed/BK0Yt1bYPJk?si=L4Dev_bRRFdCA5fp"}/>
                    <Origin left={815} top={660} parent={"Cave"} style={"jt"}
                    name={"cave"} url={"https://www.youtube.com/embed/hnJUmsdmvuA?si=gehRV7M0d3QBdeQQ"}/>
                    <Origin left={385} top={835} parent={"Cheetah"} style={"jt"}
                    name={"cave_entrance"} url={"https://www.youtube.com/embed/6cTQMoLrny4?si=QblCF8PpphG6XS-5"}/>
                    <Origin left={265} top={630} parent={"CT"} style={"jt"}
                    name={"ct1"} url={"https://www.youtube.com/embed/8tr50C27WKU?si=OZ_yu3EdrGC-oOxp"}/>
                    <Origin left={290} top={650} parent={"CT"} style={"jt"}
                    name={"ct2"} url={"https://www.youtube.com/embed/ULtEF3FMBAE?si=PzVIkPGBv1vXdpPn"}/>
                    <Origin left={115} top={525} parent={"CT"} style={"jt"}
                    name={"ct3"} url={"https://www.youtube.com/embed/-l3G4j0KdMQ?si=MmslX8co4cdiNBR_"}/>
                    <Origin left={385} top={795} parent={"Donut - Mid"} style={"jt"}
                    name={"donut"} url={"https://www.youtube.com/embed/VYINTMlTA6Y?si=I1f9DZAPQk6yDjLv"}/>
                    <Origin left={815} top={660} parent={"Long"} style={"jt"}
                    name={"long"} url={"https://www.youtube.com/embed/2RT0kZN_jog?si=xLXxcL9wJv0su_SZ"}/>
                    <Origin left={777} top={560} parent={"Short"} style={"t"}
                    name={"short1"} url={"https://www.youtube.com/embed/xw0C_SO_kdE?si=-H3Fvs-iurUnhNtt"}/>
                    <Origin left={815} top={660} parent={"Short"} style={"jt"}
                    name={"short2"} url={"https://www.youtube.com/embed/VMHwMpA5hpE?si=kxqe0WZwvydlhD-J"}/>
                    <Origin left={115} top={525} parent={"Temple"} style={"jt"}
                    name={"temple"} url={"https://www.youtube.com/embed/qFe-N_Q0krM?si=_6vYojP4_eKbqCDe"}/>
                    <Origin left={400} top={780} parent={"Top Mid"} style={"jt"}
                    name={"topmid"} url={"https://www.youtube.com/embed/ZUhlJL4_Zu4?si=jMqJcxtH3d3ACysu"}/>

                    <Callout left={70} top={135} name={"PLAT"}/>
                    <Callout left={90} top={160} name={"SINGLE"} size={13}/>
                    <Callout left={130} top={195} name={"BIG BOX"} size={13}/>
                    <Callout left={250} top={94} name={"TEMPLE"} size={25}/>
                    <Callout left={70} top={340} name={"A MAIN"} size={25}/>
                    <Callout left={130} top={280} name={"BOOST"}/>
                    <Callout left={210} top={365} name={"DONUT"} size={25}/>
                    <Callout left={330} top={155} name={"CT"} size={20}/>
                    <Callout left={402} top={60} name={"CT SPAWN"} size={30}/>

                    <Callout left={390} top={810} name={"T SPAWN"} size={30}/>
                    <Callout left={125} top={495} name={"STAIRS"}/>
                    <Callout left={230} top={650} name={"SPLIT"} size={20}/>
                    <Callout left={400} top={350} name={"TOP MID"} size={20}/>
                    <Callout left={425} top={450} name={"MID"} size={25}/>
                    <Callout left={500} top={410} name={"PIT"}/>
                    <Callout left={300} top={520} name={"ELBOW"} size={20}/>
                    <Callout left={424} top={290} name={"RED"}/>
                    <Callout left={570} top={200} name={"ALLEY"} size={20}/>

                    <Callout left={680} top={250} name={"SHORT"} size={20}/>
                    <Callout left={820} top={250} name={"LONG"} size={20}/>
                    <Callout left={710} top={355} name={"PILLAR"}/>
                    <Callout left={680} top={435} name={"WOOD"}/>
                    <Callout left={623} top={355} name={"CAVE"} size={25}/>
                    <Callout left={810} top={460} name={"RAMP"} size={25}/>
                    <Callout left={770} top={560} name={"DOORS"}/>
                    <Callout left={570} top={470} name={"CHEETAH"}/>
                    <Callout left={500} top={520} name={"HEAVEN"}/>
                    <Callout left={770} top={620} name={"RUINS"} rotate={-30}/>
                    <Callout left={550} top={730} name={"TUNNEL"}/>
                    <Callout left={665} top={700} name={"WATER"}/>

                    <Callout left={230} top={200} name={"A"}/>
                    <Callout left={770} top={350} name={"B"}/>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Ancient