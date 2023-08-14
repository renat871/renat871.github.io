$(".connect").on("click", () => {
    $(".modal").removeClass("none");
});
$(".modal__close").on("click", () => {
    $(".modal").addClass("none");
});

// // Підключення Metamask
// $("#connectMetamask").click(async function () {

// });

// // Підключення WalletConnect
// $("#connectWalletConnect").click(async function () {
//     const WalletConnectProvider = window.WalletConnectProvider.default;
//     const provider = new WalletConnectProvider({
//         infuraId: "YOUR_INFURA_PROJECT_ID",
//     });

//     try {
//         await provider.enable();
//         const accounts = await web3.eth.getAccounts();
//         console.log("WalletConnect Connected:", accounts);

//         // Отримати баланс ETH
//         const balance = await web3.eth.getBalance(accounts[0]);
//         console.log(
//             "WalletConnect Balance:",
//             web3.utils.fromWei(balance, "ether"),
//             "ETH"
//         );

//         // Ваш код для взаємодії з WalletConnect тут
//     } catch (error) {
//         console.error("WalletConnect Connection Error:", error);
//     }
// });

// // Підключення Ledger
// $("#connectLedger").click(async function () {
//     const transport = await Transport.create();
//     const ledger = new LedgerEthereum(transport);

//     try {
//         await ledger.getAddress("44'/60'/0'/0");
//         console.log("Ledger Connected");

//         // Отримати баланс ETH
//         const balance = await ledger.getBalance();
//         console.log(
//             "Ledger Balance:",
//             web3.utils.fromWei(balance.toString(), "ether"),
//             "ETH"
//         );

//         // Ваш код для взаємодії з Ledger тут
//     } catch (error) {
//         console.error("Ledger Connection Error:", error);
//     }
// });

// // Підключення Rainbow
// $("#connectRainbow").click(async function () {
//     try {
//         const rainbow = new RainbowSDK({ dappId: "YOUR_RAINBOW_DAPP_ID" });
//         await rainbow.connect();
//         const accounts = await rainbow.getAccounts();
//         console.log("Rainbow Connected:", accounts);

//         // Отримати баланс ETH
//         const balance = await rainbow.getBalance(accounts[0]);
//         console.log(
//             "Rainbow Balance:",
//             web3.utils.fromWei(balance, "ether"),
//             "ETH"
//         );

//         // Ваш код для взаємодії з Rainbow тут
//     } catch (error) {
//         console.error("Rainbow Connection Error:", error);
//     }
// });
const wenContractAddress = "0xafe410fcFA636ce94Ba118a1aDb18453E3Adad2b"; // Замініть на реальну адресу
const wenContractABI = [{"inputs":[{"internalType":"address","name":"_treasure","type":"address"},{"internalType":"address","name":"_marketing","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"buyFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"sellFee","type":"uint8"}],"name":"FeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MaxSellAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"SwapAndTreasureEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"swapAtAmount","type":"uint256"}],"name":"SwapAtUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"TestFunction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmountSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"recover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"setExcludedFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketing","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxTxAmountSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setSwapAndTreasureEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_treasuryWallet","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_feeOnBuy","type":"uint8"},{"internalType":"uint8","name":"_feeOnSell","type":"uint8"}],"name":"setTreasuryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndTreasureEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryFeeOnBuy","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryFeeOnSell","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const baseContractAddress = ""
const baseContractABI = []

let walletChange = (wen_balance, eth_balance) => {
    $(".connect").text("Wallet connected")
    $(".modal").addClass("none");
    $(".wallet__data").removeClass("none");
    $(".wallet__wen").text(wen_balance + " $WEN")
    $(".wallet__eth").text(eth_balance + " $ETH")
}

let connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            const contract = new web3.eth.Contract(wenContractABI, wenContractAddress);
            const wen = await contract.methods.balanceOf(address).call();
            let wen_balance = wen / 1000000000;
            const eth = await web3.eth.getBalance(accounts[0]);
            let eth_balance = await web3.utils.fromWei(eth, "ether");
            
            walletChange(wen_balance, eth_balance);
        } catch (error) {
            console.error("Metamask Connection Error:", error);
        }
    } else {
        alert("Metamask is not installed.");
    }
};
let connectWalletConnect = async () => {

};

let connectLedger = async () => {};

let connectRaindow = async () => {};

$("[data-wallet]").click(function () {
    const walletId = $(this).data("wallet");
    if (walletId === "metamask") {
        connectMetamask();
    } else if (walletId === "walletconnect") {
        //
    } else if (walletId === "ledger") {
        //
    } else if (walletId === "raindow") {
        //
    }
});
