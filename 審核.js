const contractABI = [
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

const contractAddress = '0xf66baA050ef74C16e4aa6d59E3C61d6B364cA831';

let web3;
let contract;
let accounts;
let companyList = []; // 全局變數儲存公司信息

async function getRegisteredCompanies() {
    if (!web3 || !contract) {
        alert("未連到智能合約");
        return;
    }

    try {
        const companyAddresses = await contract.methods.getCompanyAddresses().call();
        companyList = [];

        for (let i = 0; i < companyAddresses.length; i++) {
            const companyAddress = companyAddresses[i];
            const company = await contract.methods.companies(companyAddress).call();
            companyList.push(company);
        }

        displayCompanies(companyList);
    } catch (error) {
        console.error("Error fetching registered companies:", error);
    }
}

function displayCompanies(companies) {
    const tableBody = document.querySelector('.company-table tbody');
    tableBody.innerHTML = '';

    companies.forEach(company => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.className = 'company-details';
        nameCell.textContent = company.companyname;

        const detailsCell = document.createElement('td');
        detailsCell.className = 'company-details';
        const detailsLink = document.createElement('a');
        detailsLink.href = `公司資訊.html?walletAddress=${company.walletAddress}`;
        detailsLink.textContent = '詳細資料';
        detailsCell.appendChild(detailsLink);

        const reviewCell = document.createElement('td');
        if (company.isApproved) {
            reviewCell.textContent = '已審核';
        } else {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'review-box';
            reviewCell.appendChild(checkbox);
        }

        row.appendChild(nameCell);
        row.appendChild(detailsCell);
        row.appendChild(reviewCell);

        tableBody.appendChild(row);
    });
}

async function handleConfirmSubmit() {
    const tableBody = document.querySelector('.company-table tbody');
    const rows = tableBody.querySelectorAll('tr');
    const approvedCompanies = [];

    rows.forEach(row => {
        const checkbox = row.querySelector('.review-box');
        if (checkbox && checkbox.checked) {
            const companyName = row.querySelector('.company-details').textContent;
            approvedCompanies.push(companyName);
        }
    });

 console.log('Approved companies:', approvedCompanies);

    try {
        for (const companyName of approvedCompanies) {
            const companyAddress = getCompanyAddressByName(companyName);
   console.log(`Approving company: ${companyName}, Address: ${companyAddress}`);
            if (companyAddress) {
                await contract.methods.approveCompany(companyAddress).send({ from: accounts[0] });
    console.log(`Company approved: ${companyName}, Address: ${companyAddress}`);
            } else {
                console.error(`Company address not found for: ${companyName}`);
            }
        }

        // 更新頁面上的公司列表
        await getRegisteredCompanies();
    } catch (error) {
        console.error('Error approving companies:', error);
    }
}


function getCompanyAddressByName(companyName) {
    // 從全局變數 companyList 中找到對應的公司地址
    const company = companyList.find(c => c.companyname === companyName);
    return company ? company.walletAddress : null;
}

function addApprovedCompanyToCarbonRightsTable(company) {
    const tableBody = document.querySelector('.carbon-rights-table tbody');

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = company.companyname;

    const walletCell = document.createElement('td');
    walletCell.textContent = company.walletAddress;

    const carbonRightsCell = document.createElement('td');
    carbonRightsCell.textContent = '0'; // 初始碳權數量為 0，可以根據需要進行修改

    row.appendChild(nameCell);
    row.appendChild(walletCell);
    row.appendChild(carbonRightsCell);

    tableBody.appendChild(row);
}

async function transferTokens(toAddress, amount) {
    try {
        await contract.methods.transferTokens(toAddress, amount).send({ from: accounts[0] });
    } catch (error) {
        console.error('Error transferring tokens:', error);
    }
}

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('accounts', accounts);

            web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(contractABI, contractAddress);

            await getRegisteredCompanies();
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert('未安裝 MetaMask!');
    }

    const confirmButton = document.querySelector('.confirm-submit-btn');
    if (confirmButton) {
        confirmButton.addEventListener('click', handleConfirmSubmit);
    }
});



