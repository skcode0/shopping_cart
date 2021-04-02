import React from 'react';
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

// Horizon Forbidden West
import HFWCoverImg from '../img/Horizon_Forbidden_West/hfw.jpg';

// Returnal
import returnalCoverImg from '../img/Returnal/returnal.webp';

let gamesInfo = [
    {
        name: "Back 4 Blood",
        platform: ["pc", "xbox", "playstation"],
        price: "$59.99",
        coverImg: b4bCoverImg,
        snapshots: [b4b1, b4b2, b4b3, b4b4, b4b5],
        releaseDate: "June 18, 2021"
    },
    {
        name: "Halo Infinite",
        platform: ["pc", "xbox"],
        price: "TBC",
        coverImg: haloCoverImg,
        snapshots: [halo1, halo2, halo3, halo3, halo4, halo5],
        releaseDate: "TBC"
    },
    {
        name: "Horizon Forbidden West",
        platform: ["playstation"],
        price: "TBC",
        coverImg: HFWCoverImg,
        snapshots: [],
        releaseDate: "TBC"
    },
    {
        name: "Monster Hunter Rise",
        platform: ["pc", "nintendo"],
        price: "$59.99",
        coverImg: MHRCoverImg,
        snapshots: [mhr1, mhr2, mhr3, mhr4, mhr5],
        releaseDate: "March 26, 2021"
    },
    {
        name: "NieR Replicant™ ver.1.22474487139...",
        platform: ["pc", "xbox", "playstation"],
        price: "$59.99",
        coverImg: nierRepCoverImg,
        snapshots: [],
        releaseDate: "April 23, 2021"
    },
    {
        name: "Resident Evil Village",
        platform: ["pc", "xbox", "playstation"],
        price: "$59.99",
        coverImg: REVCoverImg,
        snapshots: [REV1, REV2, REV3, REV4, REV5],
        releaseDate: "May 7, 2021"
    },
    {
        name: "Returnal",
        platform: ["playstation"],
        price: "$69.99",
        coverImg: returnalCoverImg,
        snapshots: [],
        releaseDate: "April 30, 2021"
    },
    {
        name: "Valheim",
        platform: ["pc"],
        price: "$19.99",
        coverImg: valheimCoverImg,
        snapshots: [valheim1, valheim2, valheim3, valheim4, valheim5],
        releaseDate: "February 2, 2021"
    },
]

export { gamesInfo };
