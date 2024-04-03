const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, treasuryExports } = require("../helper/treasury");

const pieDaoTreasury = "0x3bCF3Db69897125Aa61496Fc8a8B55A5e3f245d5";
const DOUGH = "0xad32A8e6220741182940c5aBF610bDE99E737b2D";
const DOUGH_LP = "0xE8846B27988FF52c371D5BD27Bf8DBA4097C93D2"

const treasury = "0x267070804c46a47aa92a76d59d70c05d30de46e3"

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        '0x31429d1856aD1377A8A0079410B297e1a9e214c2',//ANGLE
        '0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26',//OGN
        ADDRESSES.ethereum.DAI,//DAI
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',//TRIBE
        '0x090185f2135308BaD17527004364eBcC2D37e5F6',//SPELL
        ADDRESSES.ethereum.SNX,//SNX
        '0xdB25f211AB05b1c97D595516F45794528a807ad8',//EURS
        '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',//STG
        '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68',//INV
        '0x6243d8CEA23066d098a15582d81a598b4e8391F4',//FLX
        '0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',//USDN
        '0xa693B19d2931d498c5B318dF961919BB4aee87a5',//UST
        '0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3',//JPEG
        '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',//MTA
        ADDRESSES.ethereum.GNO,//GNO
        '0x01BA67AAC7f75f647D94220Cc98FB30FCc5105Bf',//LYRA
        '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',//RAI
        '0x3472A5A71965499acd81997a54BBA8D852C6E53d',//BADGER
        '0x3Ec8798B81485A254928B70CDA1cf0A2BB0B74D7',//GRO
        ADDRESSES.ethereum.USDC,//USDC
        ADDRESSES.ethereum.STETH //stETH
     ],
    owners: [pieDaoTreasury, treasury],
    ownTokens: [DOUGH, DOUGH_LP],
  },
})