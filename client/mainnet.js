let contractAddress = '0x803fa7c4ab00bc0bf5a7db6f2414815220fcafde'
let infuraID = '3db513c1cac640b98dcb2a21926c8cab'
let presaleIMG = 'presale.jpg'
let whitelistIMG = 'whitelist.jpg'
let abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_baseURI',
                type: 'string',
            },
        ],
        name: 'ChangeBaseURI',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_isBurnEnabled',
                type: 'bool',
            },
        ],
        name: 'ChangeIsBurnEnabled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_MintPrice',
                type: 'uint256',
            },
        ],
        name: 'ChangeMintPrice',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_PreSaleStarted',
                type: 'bool',
            },
        ],
        name: 'ChangePreSaleStarted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_PublicSaleStarted',
                type: 'bool',
            },
        ],
        name: 'ChangePublicSaleStarted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_recipient',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'GiftMint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'Pause',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'shares',
                type: 'uint256',
            },
        ],
        name: 'PayeeAdded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'PaymentReceived',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'PaymentReleased',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_minter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_price',
                type: 'uint256',
            },
        ],
        name: 'PresaleMint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_minter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_price',
                type: 'uint256',
            },
        ],
        name: 'SaleMint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'Unpause',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'enum ImmortalApe.WorkflowStatus',
                name: 'previousStatus',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'enum ImmortalApe.WorkflowStatus',
                name: 'newStatus',
                type: 'uint8',
            },
        ],
        name: 'WorkflowStatusChange',
        type: 'event',
    },
    {
        inputs: [],
        name: 'MintPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'PreSaleStarted',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'PublicSaleStarted',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: '_giftClaimed',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: '_presaleClaimed',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: '_saleClaimed',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: '_totalClaimed',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: '_addresses',
                type: 'address[]',
            },
        ],
        name: 'addToPresaleList',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'baseURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getWorkflowStatus',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'giftCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: '_addresses',
                type: 'address[]',
            },
        ],
        name: 'giftMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isBurnEnabled',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address',
            },
        ],
        name: 'isOnPresaleList',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'mainMint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxGiftSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxTotalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'payee',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'presaleCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'release',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'released',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: '_addresses',
                type: 'address[]',
            },
        ],
        name: 'removeFromPresaleList',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_tokenBaseURI',
                type: 'string',
            },
        ],
        name: 'setBaseURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_isBurnEnabled',
                type: 'bool',
            },
        ],
        name: 'setIsBurnEnabled',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_PreSaleStarted',
                type: 'bool',
            },
        ],
        name: 'setPreSaleStarted',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
        ],
        name: 'setPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_PublicSaleStarted',
                type: 'bool',
            },
        ],
        name: 'setPublicSaleStarted',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_PublicSaleStarted',
                type: 'bool',
            },
        ],
        name: 'setUpSale',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'shares',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalNFT',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalReleased',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalShares',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'workflow',
        outputs: [
            {
                internalType: 'enum ImmortalApe.WorkflowStatus',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        stateMutability: 'payable',
        type: 'receive',
    },
]
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default
const EvmChains = window.EvmChains
const Fortmatic = window.Fortmatic
let web3Modal
let provider
let requiredNetwork = 'rinkeby'
let web3x = new Web3(
    new Web3.providers.HttpProvider(
        `https://${requiredNetwork}.infura.io/v3/${infuraID}`
    )
)
const contractFirst = new web3x.eth.Contract(abi, contractAddress)
let selectedAccount

let price = 0.0

let onlyPrelisted = false
let readytogo = true

async function isPausedPresale() {
    return await contractFirst.methods.PreSaleStarted().call()
}

async function isPaused() {
    return await contractFirst.methods.PreSaleStarted().call()
}

async function ifPaused() {
    if (await isPaused()) {
        document.getElementById('adoptStat').innerText = 'Adoptions are Closed!'
        let button = document.querySelector('#mintBox')
        button.disabled = true
        button.innerHTML = 'Minting<br>Paused!'
    }
}

async function isOwner() {
    let owner = await contractFirst.methods.owner().call()
    if (owner == selectedAccount) {
        return true
    }
    return true
}
// ifPaused();

function totalMinted() {
    /// Setup Total Minted
    // let mintCount = document.getElementById('totalMinted');
    const contractFirst = new web3x.eth.Contract(abi, contractAddress)

    contractFirst.methods
        .totalSupply()
        .call()
        .then(function (result) {
            mintCount.innerText = result
        })

    contractFirst.methods
        .getPrice()
        .call()
        .then(function (result) {
            if (!readytogo) {
                document.getElementById('mintPrice').innerText = '0.3'
                price = 0.3
            } else {
                document.getElementById('mintPrice').innerText =
                    result / 1000000000000000000
                price = result / 1000000000000000000
            }
        })
}

function init() {
    totalMinted()
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: infuraID,
            },
        },
    }

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        theme: {
            zIndex: -1,
            backDrop: 'static',
        },
    })
}

function isConnectedTomainnet() {
    try {
        if (provider.isMetaMask) {
            if (window.ethereum.networkVersion == 4) {
                return true
            }
            return false
        } else {
            if (provider.rpcUrl.includes(requiredNetwork)) {
                return true
            }
            return false
        }
    } catch {
        return false
    }
}

async function fetchAccountData() {
    let button = document.getElementById('mintBox')
    if (!isConnectedTomainnet()) {
        showModal(
            '❌ Unable to Connect',
            'Please Connect To ' + requiredNetwork.toUpperCase()
        )
        //✔️

        await onDisconnect()
        return 1
    }
    if (await !isPaused()) {
        if (!isPrelistedUser()) {
            button.disabled = true
            button.innerHTML = 'Not<br>Prelisted'
        } else {
            button.disabled = false
            button.innerHTML = 'Mint Your NFT'
        }
    }

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider)

    console.log('Web3 instance is', web3)

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts()

    // MetaMask does not give you all accounts, only the selected account
    console.log('Got accounts', accounts)
    selectedAccount = accounts[0]
    console.log(selectedAccount)

    document.getElementById('walletaddress').innerText = selectedAccount

    const rowResolvers = accounts.map(async (address) => {
        const balance = await web3.eth.getBalance(address)

        const ethBalance = web3.utils.fromWei(balance, 'ether')
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4)

        document.getElementById('walletaddress').innerText =
            shortWalletAddress(address)
        document.getElementById('walletbalance').innerText =
            humanFriendlyBalance + ' ETH'

        document.getElementById('openseaAddress').href =
            'https://opensea.io/' + address
        if (requiredNetwork == 'rinkeby') {
            document.getElementById('openseaAddress').href =
                'https://testnets.opensea.io/' + address
        }
        showModal(
            '✔️ Connection Successful',
            'Successfully Connected To ' + requiredNetwork.toUpperCase()
        )
        if (web3Modal.show) {
            web3Modal.toggleModal()
        }
        ifPrelisted()
        // ifWhitelisted();
        if (await isPrelistedUser()) {
            ifPrelisted()
        }
    })

    await Promise.all(rowResolvers)
    document.getElementById('userArea').style.display = ''
}

async function refreshAccountData() {
    await fetchAccountData(provider)
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
    console.log('Opening a dialog', web3Modal)
    try {
        provider = await web3Modal.connect()
    } catch (e) {
        console.log('Could not get a wallet connection', e)
        return
    }

    // Subscribe to accounts change
    provider.on('accountsChanged', (accounts) => {
        fetchAccountData()
    })

    // Subscribe to chainId change
    provider.on('chainChanged', (chainId) => {
        fetchAccountData()
    })

    // Subscribe to networkId change
    provider.on('networkChanged', (networkId) => {
        if (!isConnectedTomainnet()) {
            showModal(
                '❌ Unable to Connect',
                'Please Connect To ' + requiredNetwork.toUpperCase()
            )
            onDisconnect()
            init()
            return 4
        } else {
            fetchAccountData()
        }
    })

    await refreshAccountData()
}
async function onDisconnect() {
    console.log('Killing the wallet connection', provider)

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close()

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider()
        provider = null
    }

    selectedAccount = null
    document.getElementById('userArea').style.display = 'none'
}

window.addEventListener('load', async () => {
    init()

    onConnect()
})

async function isPrelistedUser() {
    const prelisted = await contractFirst.methods
        .isOnPresaleList(selectedAccount)
        .call()
    if (await prelisted) {
        return true
    }
    return false
}

async function ifPrelisted() {
    const prelisted = await isPrelistedUser()
    if (prelisted && onlyPrelisted) {
        //showImage(``);
        document.querySelector('#nftToBuy').setAttribute('max', 10)
        max = 10
    }
}

async function boughtnftpresale() {
    const prelistednum = await contractFirst.methods
        ._presaleClaimed(selectedAccount)
        .call()
    if ((await prelistednum) > 0) {
        return true
    }
    return false
}

async function connectwallet() {
    initnow()

    onConnect()
}

async function mintToken() {
    if (!(await isPausedPresale()) && onlyPrelisted) {
        showModal('❌ Minting', "Minting hasn't started yet.")
        return
    }
    if (!(await isPrelistedUser()) && onlyPrelisted) {
        showModal('❌ Whitelist', 'You are not on the whitelist')
        return 1
    }
    if (!isConnectedTomainnet()) {
        showModal(
            '❌ Unable to Connect',
            'Please Connect To ' + requiredNetwork.toUpperCase()
        )
        return 1
    }

    if (!readytogo) {
        showModal('Miniting', "Minting hasn't started yet.")
        return
    }

    const web3 = new Web3(provider)
    const balance = await web3.eth.getBalance(selectedAccount)
    const ethBalance = web3.utils.fromWei(balance, 'ether')
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4)
    console.log(humanFriendlyBalance)
    let value = document.getElementById('nftToBuy').value
    let valueString = (parseFloat(value) * price).toString()
    let amount = web3.utils.toWei(valueString, 'ether')
    if (valueString == 0) {
        amount = valueString
    } else {
        amount = web3.utils.toHex(amount)
    }

    if (humanFriendlyBalance < parseFloat(value) * price) {
        showModal('❌ Insufficient Balance', 'You do not have enough balance')
        return
    }
    window.contract = await new web3.eth.Contract(abi, contractAddress) //loadContract()
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: selectedAccount, // must match user's active address.
        value: amount,
        data: window.contract.methods.mainMint(value).encodeABI(), //make call to NFT smart contract
    }
    try {
        const txHash = await provider.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        })
        showModal(
            'Transaction Completed ',
            "You can check your transaction here: <a href='https://etherscan.io/tx/" +
            txHash +
            "'>TXT</a>"
        )
    } catch (error) {
        console.log(error)
        showModal(
            'Oops Transaction Failed',
            'Your Transaction Failed , Log : ' + error.message
        )
    }
}
