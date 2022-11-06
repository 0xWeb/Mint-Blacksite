
// Unpkg imports
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default
const evmChains = window.evmChains
// import { abi } from './abi.js';
const ABI = [
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

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider

// Address of the selected account
let selectedAccount

/**
 * Setup the orchestra
 */
function init() {
    console.log('Initializing example')
    console.log('WalletConnectProvider is', WalletConnectProvider)
    console.log(
        'window.web3 is',
        window.web3,
        'window.ethereum is',
        window.ethereum
    )

    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    // if (location.protocol !== 'https:') {
    //     // https://ethereum.stackexchange.com/a/62217/620
    //     const alert = document.querySelector('#alert-error-https')
    //     alert.style.display = 'block'
    //     document
    //         .querySelector('#btn-connect')
    //         .setAttribute('disabled', 'disabled')
    //     return
    // }

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                // Mikko's test key - don't copy as your mileage may vary
                infuraId: '98d13a864eb149cdac7849756131edcc',
            },
        },
    }

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    })

    console.log('Web3Modal instance is', web3Modal)
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider)

    console.log('Web3 instance is', web3)
    console.log('ABI', ABI)

    // Get connected chain id from Ethereum node
    // const chainId = await web3.eth.getChainId()
    // // Load chain information over an HTTP API
    // const chainData = evmChains.getChain(chainId)
    // document.querySelector('#network-name').textContent = chainData.name

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts()

    // MetaMask does not give you all accounts, only the selected account
    console.log('Got accounts', accounts)
    selectedAccount = accounts[0]

    document.querySelector('#selected-account').textContent = selectedAccount

    // Get a handl
    const template = document.querySelector('#template-balance')
    const accountContainer = document.querySelector('#accounts')

    // Purge UI elements any previously loaded accounts
    accountContainer.innerHTML = ''

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
        // ethBalance is a BigNumber instance
        // https://github.com/indutny/bn.js/
        // Fill in the templated row and put in the document
        const clone = template.content.cloneNode(true)
        clone.querySelector('.address').textContent = address
        accountContainer.appendChild(clone)
    })

    // Because rendering account does its own RPC commucation
    // with Ethereum node, we do not want to display any results
    // until data for all accounts is loaded
    await Promise.all(rowResolvers)

    // Display fully loaded UI for wallet data
    document.querySelector('#prepare').style.display = 'none'
    document.querySelector('#connected').style.display = 'block'

    const Popila = new web3.eth.Contract(
        ABI,
        '0x803fa7c4ab00bc0bf5a7db6f2414815220fcafde'
    )
    const weiPrice = await Popila.methods
        .MintPrice()
        .call({ from: accounts[0] })
    const ethPrice = Web3.utils.fromWei(weiPrice, 'ether')

    // console.log('price', ethPrice)
    // console.log('price', weiPrice)
    localStorage.setItem('price', ethPrice)
    document.getElementById('demo').innerHTML = ethPrice

    // Get How many NFTs are already minted
    const mintedData = await Popila.methods
        .totalNFT()
        .call({ from: accounts[0] })
    document.getElementById('minted').innerHTML = mintedData

    // var output = await Popila.methods.mainMint(weiPrice).send({from: accounts[0]});
    // console.log(output)
}

async function mintToken() {
    var price = document.getElementById('minPrice').value
    // var minPrice = '0' + '.' + price
    var minPrice = localStorage.getItem('price')
    // var minPric = parseFloat(price * multiply)

    console.log(price)
    console.log(minPrice)
    var final = parseFloat(price * minPrice)
    console.log(final)

    var fmintprice = parseFloat(minPrice)

    const web3 = new Web3(provider)
    // 100000000000000000
    const accounts = await web3.eth.getAccounts()
    const weiValue = Web3.utils.toWei(String(final), 'ether')
    const weiValue1 = parseInt(Web3.utils.toWei(String(final), 'ether'))

    console.log(weiValue)
    const Popila = new web3.eth.Contract(
        ABI,
        '0x803fa7c4ab00bc0bf5a7db6f2414815220fcafde'
    )
    // web3.eth.handleRevert = true

    await Popila.methods
        .mainMint(price)
        .send({ from: accounts[0], value: weiValue, gas: 500000 })
        .on('receipt', function (receipt) {
            // receipt example
            // console.log('receipt', receipt)
        })
        .on('error', function (error, receipt) {
            Popila.methods
                .mainMint(price)
                .call({
                    from: accounts[0],
                    value: weiValue,
                    gas: 500000,
                })
                .catch((e) => {
                    var message = ''
                    if (e?.message && typeof e?.message == 'string') {
                        let error = JSON.parse(
                            e.message.slice(e.message.indexOf('{'))
                        )
                        message = error.originalError.message
                        localStorage.setItem('Message', message)
                        const x = localStorage.getItem('Message')
                        document.getElementById('error').innerHTML = x
                        const alert = document.querySelector('#error')
                        alert.style.display = 'block'
                    } else {
                        message = 'something went wrong'
                    }
                    // if (location.protocol !== 'https:') {
                    //     // https://ethereum.stackexchange.com/a/62217/620
                    //     const alert = document.querySelector('#alert-error-https')
                    //     alert.style.display = 'block'
                    //     document
                    //         .querySelector('#btn-connect')
                    //         .setAttribute('disabled', 'disabled')
                    //     return
                    // }
                })
            // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        })
}

async function getRevertedMsg() { }

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector('#connected').style.display = 'none'
    document.querySelector('#prepare').style.display = 'block'

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector('#btn-connect').setAttribute('disabled', 'disabled')
    await fetchAccountData(provider)
    document.querySelector('#btn-connect').removeAttribute('disabled')
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
        fetchAccountData()
    })

    await refreshAccountData()
}

/**
 * Disconnect wallet button pressed.
 */
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

    // Set the UI back to the initial state
    document.querySelector('#prepare').style.display = 'block'
    document.querySelector('#connected').style.display = 'none'
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    init()
    document.querySelector('#btn-connect').addEventListener('click', onConnect)
    document
        .querySelector('#btn-disconnect')
        .addEventListener('click', onDisconnect)
})
