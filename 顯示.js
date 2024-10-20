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
];

const contractAddress = '0xf66baA050ef74C16e4aa6d59E3C61d6B364cA831';

let web3;
let contract;
let accounts;

async function getRegisteredCompanies() {
    if (!web3 || !contract) {
        alert("未連到智能合約");
        return;
    }

    try {
        const companyAddresses = await contract.methods.getCompanyAddresses().call();
        const companyList = [];

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

// 顯示公司列表
function displayCompanies(companies) {
    const tableBody = document.querySelector('.company-table tbody');
    
 tableBody.innerHTML='';

    companies.forEach(company => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.className = 'company-details';
        nameCell.textContent = company.companyname;

        const detailsCell = document.createElement('td');
        detailsCell.className = 'company-details';
        const detailsLink = document.createElement('a');
        detailsLink.href = `#`;
        detailsLink.textContent = '詳細資料';
        detailsLink.onclick = showCompanyDetails(company.walletAddress);
        detailsCell.appendChild(detailsLink);

        const reviewCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'review-box';
        reviewCell.appendChild(checkbox);

        row.appendChild(nameCell);
        row.appendChild(detailsCell);
        row.appendChild(reviewCell);

        tableBody.appendChild(row);
    });
}

function showCompanyDetails(company) {
    localStorage.setItem('selectedCompany', JSON.stringify(company));
    window.location.href = '公司資訊.html';
}

async function handleRegisterCompany() {
    const companyName = document.getElementById('company-name').value;
    const businessAddress = document.getElementById('business-address').value;
    const taxid = document.getElementById('taxid').value;
    const businessPin = document.getElementById('business-pin').value;
    const companyOwner = document.getElementById('company-owner').value;
    const contractPhone = document.getElementById('contract-phone').value;
    const contactPersonName = document.getElementById('contact-person-name').value;
    const position = document.getElementById('position').value;
    const idNumber = document.getElementById('id-number').value;
    const walletAddress = document.getElementById('wallet-address').value;

    if (!web3 || !contract) {
        alert("未連到智能合約");
        return;
    }

    try {
        await contract.methods.registerCompany(
            companyName,
            businessAddress,
            businessPin,
            taxid,
            companyOwner,
            contractPhone,
            contactPersonName,
            position,
            idNumber,
            walletAddress
        ).send({ from: accounts[0] });

        alert("公司註冊成功！");
  window.location.href = decodeURI('審核中.html'); 
        const companyInfo = {
            companyName,
            businessAddress,
            taxid,
            businessPin,
            companyOwner,
            contractPhone,
            contactPersonName,
            position,
            idNumber,
            walletAddress
        };
        localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
    } catch (error) {
        console.error("Error registering company:", error);
        alert("公司註冊失敗！");
    }
}

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // 請求使用者授權存取 MetaMask 帳戶
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('accounts', accounts);

            // 初始化 Web3 實例
            web3 = new Web3(window.ethereum);

            // 實例化智能合約
            contract = new web3.eth.Contract(contractABI, contractAddress);
   const owner=await contract.methods.owner().call();
   if(accounts[0].toLowerCase()===owner.toLowerCase()){
    window.location.href=decodeURI('管理員管理系統.html');
    return;
   }


            // 獲取並顯示已註冊的公司
            await getRegisteredCompanies();
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert('未安裝 MetaMask!');
    }

 if(window.location.pathname.endsWith('公司資訊.html')){
  await displaySelectedCompanyInfo();
 }
});


