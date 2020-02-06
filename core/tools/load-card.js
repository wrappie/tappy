const Blockchains = require('../blockchains.js');

const CARD_ID = 'card-id';
const SECRET = 'secret';
const LOADER_ADDRESS = '0x9907a68e2cf1d29eb39b411a17e34738c5b9e6fa';

const blockchains = new Blockchains();

blockchains.load(CARD_ID, SECRET, '2.0', LOADER_ADDRESS);
