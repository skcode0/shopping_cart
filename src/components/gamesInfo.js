// valheim
import valheimCoverImg from '../img/Valheim/valheim.jpg';
import valheim1 from '../img/Valheim/valheim1.jpg';
import valheim2 from '../img/Valheim/valheim2.jpg';
import valheim3 from '../img/Valheim/valheim3.jpg';
import valheim4 from '../img/Valheim/valheim4.jpg';
import valheim5 from '../img/Valheim/valheim5.jpg';
// halo infinite
import haloCoverImg from '../img/Halo_Infinite/halo.jpg';
import halo1 from '../img/Halo_Infinite/halo1.jpg';
import halo2 from '../img/Halo_Infinite/halo2.jpg';
import halo3 from '../img/Halo_Infinite/halo3.jpg';
import halo4 from '../img/Halo_Infinite/halo4.jpg';
import halo5 from '../img/Halo_Infinite/halo5.jpg';
// Resident Evil Village
import REVCoverImg from '../img/Resident_Evil_Village/resident_evil_village.jpg';
import REV1 from '../img/Resident_Evil_Village/RE_village1.jpg';
import REV2 from '../img/Resident_Evil_Village/RE_village2.jpg';
import REV3 from '../img/Resident_Evil_Village/RE_village3.jpg';
import REV4 from '../img/Resident_Evil_Village/RE_village4.jpg';
import REV5 from '../img/Resident_Evil_Village/RE_village5.jpg';
// Back 4 Blood
import b4bCoverImg from '../img/Back_For_Blood/b4b.jpg';
import b4b1 from '../img/Back_For_Blood/b4b1.jpg';
import b4b2 from '../img/Back_For_Blood/b4b2.jpg';
import b4b3 from '../img/Back_For_Blood/b4b3.jpg';
import b4b4 from '../img/Back_For_Blood/b4b4.jpg';
import b4b5 from '../img/Back_For_Blood/b4b5.jpg';
// Monster Huter World
import MHRCoverImg from '../img/Monster_Hunter_Rise/mhr.png';
import mhr1 from '../img/Monster_Hunter_Rise/mhr1.jpg';
import mhr2 from '../img/Monster_Hunter_Rise/mhr2.jpg';
import mhr3 from '../img/Monster_Hunter_Rise/mhr3.jpg';
import mhr4 from '../img/Monster_Hunter_Rise/mhr4.jpg';
import mhr5 from '../img/Monster_Hunter_Rise/mhr5.jpg';
// NieR Replicant™ ver.1.22474487139...
import nierRepCoverImg from '../img/Nier_Replicant/nierRep.jpg';
import nier1 from '../img/Nier_Replicant/nierRep1.jpg';
import nier2 from '../img/Nier_Replicant/nierRep2.jpg';
import nier3 from '../img/Nier_Replicant/nierRep3.jpg';
import nier4 from '../img/Nier_Replicant/nierRep4.jpg';
import nier5 from '../img/Nier_Replicant/nierRep5.jpg';
// Horizon Forbidden West
import HFWCoverImg from '../img/Horizon_Forbidden_West/hfw.jpg';
import HFW1 from '../img/Horizon_Forbidden_West/hfw1.png';
import HFW2 from '../img/Horizon_Forbidden_West/hfw2.png';
import HFW3 from '../img/Horizon_Forbidden_West/hfw3.png';
import HFW4 from '../img/Horizon_Forbidden_West/hfw4.png';
import HFW5 from '../img/Horizon_Forbidden_West/hfw5.png';
// Returnal
import returnalCoverImg from '../img/Returnal/returnal.webp';
import returnal1 from '../img/Returnal/returnal1.jpg';
import returnal2 from '../img/Returnal/returnal2.jpg';
import returnal3 from '../img/Returnal/returnal3.jpg';
import returnal4 from '../img/Returnal/returnal4.jpg';
import returnal5 from '../img/Returnal/returnal5.jpg';

let gamesInfo = [
    {
        name: "Back 4 Blood",
        platform: ["pc", "xbox", "playstation"],
        price: 59.99,
        coverImg: b4bCoverImg,
        snapshots: [b4b1, b4b2, b4b3, b4b4, b4b5],
        releaseDate: "June 18, 2021",
        overview: "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. Experience the intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.",
        developer: "Turtle Rock Studios"
    },
    {
        name: "Halo Infinite",
        platform: ["pc", "xbox"],
        price: "TBC",
        coverImg: haloCoverImg,
        snapshots: [halo1, halo2, halo3, halo3, halo4, halo5],
        releaseDate: "TBC",
        overview: "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. The legendary Halo series returns with the most expansive Master Chief story yet.",
        developer: "343 Industries"
    },
    {
        name: "Horizon Forbidden West",
        platform: ["playstation"],
        price: "TBC",
        coverImg: HFWCoverImg,
        snapshots: [HFW1, HFW2, HFW3, HFW4, HFW5],
        releaseDate: "TBC",
        overview: "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats.",
        developer: "Guerrilla Games"
    },
    {
        name: "Monster Hunter Rise",
        platform: ["pc", "nintendo"],
        price: 59.99,
        coverImg: MHRCoverImg,
        snapshots: [mhr1, mhr2, mhr3, mhr4, mhr5],
        releaseDate: "March 26, 2021",
        overview: "Set in the ninja-inspired land of Kamura Village, explore lush ecosystems and battle fearsome monsters to become the ultimate hunter. It's been half a century since the last calamity struck, but a terrifying new monster has reared its head and threatens to plunge the land into chaos once again.",
        developer: "Capcom"
    },
    {
        name: "NieR Replicant™ ver.1.22474487139...",
        platform: ["pc", "xbox", "playstation"],
        price: 59.99,
        coverImg: nierRepCoverImg,
        snapshots: [nier1, nier2, nier3, nier4, nier5],
        releaseDate: "April 23, 2021",
        overview: "The upgraded prequel of NieR:Automata. A kind young man sets out with Grimoire Weiss, a strange talking book, to search for the 'Sealed verses' in order to save his sister Yonah, who fell terminally ill to the Black Scrawl.",
        developer: "Square Enix, Toylogic Inc."
    },
    {
        name: "Resident Evil Village",
        platform: ["pc", "xbox", "playstation"],
        price: 59.99,
        coverImg: REVCoverImg,
        snapshots: [REV1, REV2, REV3, REV4, REV5],
        releaseDate: "May 7, 2021",
        overview: "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
        developer: "CAPCOM Co., Ltd."
    },
    {
        name: "Returnal",
        platform: ["playstation"],
        price: 69.99,
        coverImg: returnalCoverImg,
        snapshots: [returnal1, returnal2, returnal3, returnal4, returnal5],
        releaseDate: "April 30, 2021",
        overview: "Set in a futuristic science fiction setting, the player controls Selene, a space pilot, equipped with a suit and armed with high-tech weapons, who is stranded on the alien planet Atropos, and stuck in a time loop. After every death, Selene is resurrected, following a pattern of traversing across foreign environments and combating extraterrestrial entities with growing visions in an ever changing world.",
        developer: "Housemarque"
    },
    {
        name: "Valheim",
        platform: ["pc"],
        price: 19.99,
        coverImg: valheimCoverImg,
        snapshots: [valheim1, valheim2, valheim3, valheim4, valheim5],
        releaseDate: "February 2, 2021",
        overview: "A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin’s patronage!",
        developer: "Iron Gate AB"
    },
]

export { gamesInfo };
