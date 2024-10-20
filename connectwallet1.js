const web3 = new Web3(Web3.givenProvider || "http://localhost:7545"); // 連接到 Ganache 的預設 RPC 端點

const tokenAddress = "0xf66baA050ef74C16e4aa6d59E3C61d6B364cA831";
const tokenABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_companyAddress",
				"type": "address"
			}
		],
		"name": "approveCompany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			}
		],
		"name": "CompanyApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "companyAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "metamaskAccount",
				"type": "address"
			}
		],
		"name": "CompanyRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Paused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_companyname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_businessAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_businessPIN",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_taxid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_companyOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractphone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contactPersonName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			}
		],
		"name": "registerCompany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_companyAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_carbonCredits",
				"type": "uint256"
			}
		],
		"name": "setCarbonCredits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "approvedCompanyAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "companies",
		"outputs": [
			{
				"internalType": "string",
				"name": "companyname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "businessAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "taxid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "businessPIN",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "companyOwner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contractphone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contactPersonName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "idNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "carbonCredits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "companyAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApprovedCompanyAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_companyAddress",
				"type": "address"
			}
		],
		"name": "getCarbonCredits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCompanyAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPendingCompanyAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "login",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pendingCompanyAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(tokenABI, tokenAddress)
async function connectWallet() {
  try {
    // 請求使用者授權存取 Metamask 帳戶
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // 取得第一個帳戶地址
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];
    console.log("Wallet address:", walletAddress);
    // 在 HTML 中顯示錢包地址
    document.getElementById("walletAddress").textContent = walletAddress;

    // 查詢自訂義代幣的餘額
    await getCustomTokenBalance(walletAddress);
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
}

async function getCustomTokenBalance(walletAddress) {
	try {
	  const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
	  const tokenBalance = await tokenContract.methods.balanceOf(walletAddress).call();
   const formattedBalance = tokenBalance;
	  console.log("Custom token balance:", formattedBalance, "CBC");
	  document.getElementById("customTokenBalance").textContent = formattedBalance + " CBC";
	} catch (error) {
	  console.error("Error getting custom token balance:", error);
	}
  }

async function getCarbonCredits(walletAddress) {
    try {
        const credits = await contract.methods.getCarbonCredits(walletAddress).call();
        return credits;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

async function displayCarbonCredits() {
    const accounts = await web3.eth.requestAccounts();
    const walletAddress = accounts[0]; // 假設使用者已連接到 Metamask
    const credits = await getCarbonCredits(walletAddress);
    const carbonCreditsElement = document.getElementById("carbonBalance");
    if (carbonCreditsElement) {
        carbonCreditsElement.innerText = credits;
    } else {
        console.error("Element with id 'carbonBalance' not found.");
    }
}

window.onload = async () => {
    await displayCarbonCredits();
};
  



