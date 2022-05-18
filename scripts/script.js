const Web3 = require('web3')
const rpcURL = 'https://bsc-dataseed.binance.org/'
const web3 = new Web3(rpcURL)
const fs = require('fs/promises');
var contract;

//execution function

async function run() {
    const abi = JSON.parse(await fs.readFile('/home/saumya/Documents/WEB3/Vesting/TokenVestingABI.json',{encoding: 'utf8'}))
    const address = '0xd9145CCE52D386f254917e481eB44e9943F39138'
    contract = await new web3.eth.Contract(abi, address)
    console.log("Contract instance : "+JSON.stringify(contract))
    console.log("Contract methods : "+JSON.stringify(contract.methods))
}

//smart contract functions
function getVestingSchedulesCountByBeneficiary(benificiary) {
    contract.methods.getVestingSchedulesCountByBeneficiary(benificiary).call((err, result) => { console.log(result) })
}

function getVestingIdAtIndex(index) {
    contract.methods.getVestingIdAtIndex(index).call((err, result) => { console.log(result) })
}

function getVestingScheduleByAddressAndIndex(holder, index) {
    contract.methods.getVestingScheduleByAddressAndIndex(holder, index).call((err, result) => { console.log(result) })
}

function getVestingSchedulesTotalAmount() {
    contract.methods.getVestingSchedulesTotalAmount().call((err, result) => { console.log(result) })
}

function getToken() {
    contract.methods.getToken().call((err, result) => { console.log(result) })
}

function createVestingSchedule(beneficiary, start, cliff, duration, slicePeriodSeconds, revocable, amount) {
    contract.methods.createVestingSchedule(beneficiary, start, cliff, duration, slicePeriodSeconds, revocable, amount).call((err, result) => { console.log(result) })
}

function revoke(vestingScheduleId) {
    contract.methods.revoke(vestingScheduleId).call((err, result) => { console.log(result) })
}

function withdraw(amount) {
    contract.methods.withdraw(amount).call((err, result) => { console.log(result) })
}

function release(vestingScheduleId, amount) {
    contract.methods.release(vestingScheduleId, amount).call((err, result) => { console.log(result) })
}

function getVestingSchedulesCount() {
    contract.methods.getVestingSchedulesCount().call((err, result) => { console.log(result) })
}

function computeReleasableAmount(vestingScheduleId) {
    contract.methods.computeReleasableAmount(vestingScheduleId).call((err, result) => { console.log(result) })
}

function getVestingSchedule(vestingScheduleId) {
    contract.methods.getVestingSchedule(vestingScheduleId).call((err, result) => { console.log(result) })
}

function getWithdrawableAmount() {
    contract.methods.getWithdrawableAmount().call((err, result) => { console.log(result) })
}

function computeNextVestingScheduleIdForHolder(holder) {
    contract.methods.computeNextVestingScheduleIdForHolder(holder).call((err, result) => { console.log(result) })
}

function getLastVestingScheduleForHolder(holder) {
    contract.methods.getLastVestingScheduleForHolder(holder).call((err, result) => { console.log(result) })
}

function computeVestingScheduleIdForAddressAndIndex(holder, index) {
    contract.methods.computeVestingScheduleIdForAddressAndIndex(holder, index).call((err, result) => { console.log(result) })
}

function _computeReleasableAmount() {
    contract.methods._computeReleasableAmount().call((err, result) => { console.log(result) })
}

function getCurrentTime() {
    contract.methods.getCurrentTime().call((err, result) => { console.log(result) })
}

//execute program
run();
