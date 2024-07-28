// src/components/Login.js

// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3';

// const Login = () => {
//   const [account, setAccount] = useState(null);
//   const [web3, setWeb3] = useState(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       const web3Instance = new Web3(window.ethereum);
//       setWeb3(web3Instance);
//     } else {
//       alert('Please install Metamask');
//     }
//   }, []);

//   const switchToPolygon = async () => {
//     if (window.ethereum) {
//       try {
//         await window.ethereum.request({
//           method: 'wallet_addEthereumChain',
//           params: [{
//             chainId: '0x89',
//             chainName: 'Polygon Mainnet',
//             rpcUrls: ['https://polygon-rpc.com/'],
//             nativeCurrency: {
//               name: 'MATIC',
//               symbol: 'MATIC',
//               decimals: 18
//             },
//             blockExplorerUrls: ['https://polygonscan.com/']
//           }]
//         });
//       } catch (error) {
//         console.error("Failed to switch network", error);
//       }
//     }
//   };

//   const authenticateUser = async () => {
//     if (web3 && account) {
//       const message = `Login request at ${new Date().toISOString()}`;
//       try {
//         const signature = await web3.eth.personal.sign(message, account);
//         console.log("User authenticated with signature:", signature);
//         // You can now send this signature to your backend to verify
//       } catch (error) {
//         console.error("Error signing message", error);
//       }
//     }
//   };

//   const connectWallet = async () => {
//     if (web3) {
//       try {
//         await switchToPolygon();
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         authenticateUser();
//       } catch (error) {
//         console.error("Error connecting to wallet", error);
//       }
//     }
//   };

//   return (
//     <div>
//       {account ? (
//         <h2>Welcome, {account}</h2>
//       ) : (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const Login = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      alert('Please install Metamask');
    }
  }, []);

  const switchToPolygon = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x89',
            chainName: 'Polygon Mainnet',
            rpcUrls: ['https://polygon-rpc.com/'],
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            blockExplorerUrls: ['https://polygonscan.com/']
          }]
        });
      } catch (error) {
        console.error("Failed to switch network", error);
      }
    }
  };

  const authenticateUser = async () => {
    if (web3 && account) {
      const message = `Login request at ${new Date().toISOString()}`;
      try {
        const signature = await web3.eth.personal.sign(message, account);
        console.log("User authenticated with signature:", signature);
        // Redirection logic after successful authentication
        window.location.href = 'http://localhost:3001/admin/typography';
      } catch (error) {
        console.error("Error signing message", error);
      }
    }
  };

  

  const connectWallet = async () => {
    if (web3) {
      try {
        await switchToPolygon();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        await authenticateUser();
        window.location.href = 'http://localhost:3001'; // Add this line
      } catch (error) {
        console.error("Error connecting to wallet", error);
      }
    }
  };
  

  return (
    <div>
      {account ? (
        <h2>Welcome, {account}</h2>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Login;

