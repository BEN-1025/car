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

async function displayApprovedCompanies() {
    if (!web3 || !contract) {
        alert("未連到智能合約");
        return;
    }

    try {
        const companyAddresses = await contract.methods.getCompanyAddresses().call();
        const approvedCompanies = [];

        for (let i = 0; i < companyAddresses.length; i++) {
            const companyAddress = companyAddresses[i];
            const company = await contract.methods.companies(companyAddress).call();
            if (company.isApproved) {
                approvedCompanies.push(company);
            }
        }

        const tableBody = document.querySelector('.company-table tbody');
        tableBody.innerHTML = '';

        approvedCompanies.forEach(company => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.className = 'company-details';
            nameCell.textContent = company.companyname;

            const carbonAmountCell = document.createElement('td');
            const inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.className = 'carbon-amount-input';
            inputField.value = company.carbonCredits || 0; // 初始值可以根據需要設置

            carbonAmountCell.appendChild(inputField);

            row.appendChild(nameCell);
            row.appendChild(carbonAmountCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching approved companies:', error);
    }
}

async function handleConfirmSubmit() {
    const tableBody = document.querySelector('.company-table tbody');
    const rows = tableBody.querySelectorAll('tr');
    const updatedCompanies = [];

    rows.forEach(row => {
        const companyName = row.querySelector('.company-details').textContent;
        const carbonAmount = row.querySelector('.carbon-amount-input').value;
        updatedCompanies.push({ companyName, carbonAmount });
    });

    console.log('Updated Companies:', updatedCompanies);

    const storedData = JSON.parse(localStorage.getItem('carbonData')) || [];
    updatedCompanies.forEach(company => {
        const index = storedData.findIndex(item => item.companyName === company.companyName);
        if (index !== -1) {
            storedData[index].carbonAmount = company.carbonAmount;
        } else {
            storedData.push({ companyName: company.companyName, carbonAmount: company.carbonAmount });
        }
    });
    localStorage.setItem('carbonData', JSON.stringify(storedData));

    alert('碳權數量已更新');
}

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log("Requesting accounts...");
			accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('accounts', accounts);

            web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(contractABI, contractAddress);
			await displayApprovedCompanies();
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
