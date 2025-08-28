import React from 'react';
import { X, AlertTriangle, TrendingDown, Shield, Clock, Globe, DollarSign, Zap, BarChart3, Lock } from 'lucide-react';
import { ThemeClasses } from '../types';

interface RiskDisclosureProps {
  darkMode: boolean;
  themeClasses: ThemeClasses;
  onClose: () => void;
}

const RiskDisclosure: React.FC<RiskDisclosureProps> = ({ darkMode, themeClasses, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className={`${themeClasses.cardBg} rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${darkMode ? 'from-red-900/30 to-orange-900/30' : 'from-red-50 to-orange-50'} p-6 border-b ${themeClasses.border} relative`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${themeClasses.hover} transition-colors`}
          >
            <X className={`w-5 h-5 ${themeClasses.textSecondary}`} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg`}>
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Risk Disclosure</h2>
              <p className={`text-sm ${themeClasses.textSecondary}`}>Securep2p.pro - Important Risk Information</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-8">
            {/* Critical Warning */}
            <section>
              <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} border ${darkMode ? 'border-red-800' : 'border-red-200'} rounded-xl p-6 mb-6`}>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-8 h-8 text-red-600 mt-0.5 flex-shrink-0" />
                  <div className={`${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                    <h3 className="font-bold text-xl mb-3">⚠️ IMPORTANT RISK WARNING</h3>
                    <p className="text-sm leading-relaxed mb-3">
                      <strong>Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors.</strong> 
                      The value of cryptocurrencies can fluctuate dramatically, and you may lose some or all of your investment.
                    </p>
                    <p className="text-sm leading-relaxed">
                      By using Securep2p.pro, you acknowledge that you understand these risks and accept full responsibility for your trading decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Market Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
                1. Market and Price Volatility Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Cryptocurrency markets are highly volatile and unpredictable. Prices can change rapidly due to various factors:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} rounded-xl p-4 border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-3`}>Price Volatility Factors:</h4>
                  <ul className={`${darkMode ? 'text-red-400' : 'text-red-700'} space-y-2 text-sm`}>
                    <li>• Market sentiment and speculation</li>
                    <li>• Regulatory announcements and changes</li>
                    <li>• Large institutional trades and movements</li>
                    <li>• Technical developments and upgrades</li>
                    <li>• Global economic events and crises</li>
                    <li>• Media coverage and public perception</li>
                    <li>• Whale movements and market manipulation</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Potential Consequences:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• Significant value loss within minutes</li>
                    <li>• Exchange rate changes during processing</li>
                    <li>• Slippage on large transactions</li>
                    <li>• Market gaps and liquidity issues</li>
                    <li>• Flash crashes and sudden recoveries</li>
                    <li>• Correlation with traditional markets</li>
                  </ul>
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 mb-4`}>
                <h4 className={`font-semibold ${themeClasses.text} mb-2`}>Exchange Rate Protection:</h4>
                <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  Securep2p.pro provides rate locks for up to 10 minutes during transaction processing to protect against minor price fluctuations. 
                  However, significant market movements may still affect your final payout amount.
                </p>
              </div>
            </section>

            {/* Technical Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                2. Technical and Platform Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Cryptocurrency exchanges and blockchain technology involve inherent technical risks:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Smart Contract Risks:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Smart contract bugs or vulnerabilities</li>
                    <li>• Unexpected contract behavior or failures</li>
                    <li>• Gas fee fluctuations and failed transactions</li>
                    <li>• Network congestion causing delays</li>
                    <li>• Blockchain reorganizations and forks</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-xl p-4 border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-3`}>Platform Risks:</h4>
                  <ul className={`${darkMode ? 'text-purple-400' : 'text-purple-700'} space-y-2 text-sm`}>
                    <li>• System downtime or maintenance</li>
                    <li>• API failures or third-party service issues</li>
                    <li>• Cybersecurity threats and attacks</li>
                    <li>• Data breaches or unauthorized access</li>
                    <li>• Software bugs or glitches</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 border ${themeClasses.border}`}>
                  <h4 className={`font-semibold ${themeClasses.text} mb-3`}>User Error Risks:</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2 text-sm`}>
                    <li>• Incorrect wallet addresses or payment details</li>
                    <li>• Loss of private keys or wallet access</li>
                    <li>• Accidental transactions or wrong amounts</li>
                    <li>• Phishing attacks and social engineering</li>
                    <li>• Malware or compromised devices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Regulatory Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                3. Regulatory and Legal Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Cryptocurrency regulations vary by jurisdiction and are constantly evolving:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Regulatory Changes:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• New laws may restrict or ban cryptocurrency trading</li>
                    <li>• Tax obligations may change without notice</li>
                    <li>• Compliance requirements may increase</li>
                    <li>• Service availability may be limited in certain jurisdictions</li>
                    <li>• Cross-border transactions may face new restrictions</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} rounded-xl p-4 border ${darkMode ? 'border-yellow-800' : 'border-yellow-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3`}>User Responsibilities:</h4>
                  <ul className={`${darkMode ? 'text-yellow-400' : 'text-yellow-700'} space-y-2 text-sm`}>
                    <li>• Comply with local laws and regulations</li>
                    <li>• Report cryptocurrency transactions for tax purposes</li>
                    <li>• Understand legal implications in your jurisdiction</li>
                    <li>• Seek professional legal and tax advice</li>
                    <li>• Monitor regulatory changes in your country</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Liquidity Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                4. Liquidity and Settlement Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Liquidity conditions can affect transaction processing and settlement times:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Liquidity Risks:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Low trading volumes may cause delays</li>
                    <li>• Large orders may experience slippage</li>
                    <li>• Market makers may withdraw during volatility</li>
                    <li>• Cross-chain bridge limitations</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-xl p-4 border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-3`}>Settlement Risks:</h4>
                  <ul className={`${darkMode ? 'text-purple-400' : 'text-purple-700'} space-y-2 text-sm`}>
                    <li>• Payment processor delays or failures</li>
                    <li>• Banking system downtime or maintenance</li>
                    <li>• Currency conversion delays</li>
                    <li>• International transfer complications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Lock className="w-5 h-5 mr-2 text-blue-600" />
                5. Security and Custody Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                While Securep2p.pro operates as a non-custodial platform, security risks still exist:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 border ${themeClasses.border}`}>
                  <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Wallet Security:</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2 text-sm`}>
                    <li>• Private key compromise or theft</li>
                    <li>• Malware or keylogger attacks</li>
                    <li>• Phishing attempts and fake websites</li>
                    <li>• Social engineering attacks</li>
                    <li>• Hardware wallet failures or loss</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} rounded-xl p-4 border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-3`}>Transaction Risks:</h4>
                  <ul className={`${darkMode ? 'text-red-400' : 'text-red-700'} space-y-2 text-sm`}>
                    <li>• Irreversible blockchain transactions</li>
                    <li>• Wrong address or network selection</li>
                    <li>• Failed transactions with lost gas fees</li>
                    <li>• Double-spending attempts</li>
                    <li>• Network attacks or 51% attacks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Financial Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                6. Financial and Operational Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Various financial risks are associated with cryptocurrency exchange services:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} rounded-xl p-4 border ${darkMode ? 'border-yellow-800' : 'border-yellow-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3`}>Exchange Rate Risks:</h4>
                  <ul className={`${darkMode ? 'text-yellow-400' : 'text-yellow-700'} space-y-2 text-sm`}>
                    <li>• Rates may change between quote and execution</li>
                    <li>• Market spreads may widen during volatility</li>
                    <li>• Currency conversion risks for international transfers</li>
                    <li>• Markup adjustments based on market conditions</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Operational Risks:</h4>
                  <ul className={`${darkMode ? 'text-green-400' : 'text-green-700'} space-y-2 text-sm`}>
                    <li>• Payment processor failures or delays</li>
                    <li>• Banking system issues or maintenance</li>
                    <li>• Third-party service provider problems</li>
                    <li>• Force majeure events and natural disasters</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Specific Platform Risks */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                7. Securep2p.pro Specific Risks
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                While we maintain high security standards, users should be aware of platform-specific risks:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 border ${themeClasses.border}`}>
                  <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Service Limitations:</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2 text-sm`}>
                    <li>• Service may be unavailable in certain jurisdictions</li>
                    <li>• Transaction limits may apply based on risk assessment</li>
                    <li>• Payment methods may be temporarily unavailable</li>
                    <li>• Processing times may vary during high demand</li>
                    <li>• Customer support response times during peak periods</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Non-Custodial Risks:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Users maintain full responsibility for their private keys</li>
                    <li>• No recovery options for lost wallet access</li>
                    <li>• No insurance coverage for user errors</li>
                    <li>• Limited recourse for irreversible transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risk Mitigation */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                8. Risk Mitigation Strategies
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                To minimize risks when using Securep2p.pro:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Before Trading:</h4>
                  <ul className={`${darkMode ? 'text-green-400' : 'text-green-700'} space-y-2 text-sm`}>
                    <li>• Only invest what you can afford to lose</li>
                    <li>• Understand current market conditions</li>
                    <li>• Verify all payment details carefully</li>
                    <li>• Test with small amounts first</li>
                    <li>• Ensure stable internet connection</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>During Transactions:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Double-check all transaction details</li>
                    <li>• Monitor transaction status closely</li>
                    <li>• Keep transaction records and receipts</li>
                    <li>• Contact support immediately if issues arise</li>
                    <li>• Don't refresh or close browser during processing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                9. Legal Disclaimer
              </h3>
              
              <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-6 border ${themeClasses.border}`}>
                <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed text-sm`}>
                  <strong>No Financial Advice:</strong> Securep2p.pro does not provide investment, financial, trading, or legal advice. 
                  All information provided is for informational purposes only and should not be construed as professional advice.
                </p>
                <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed text-sm`}>
                  <strong>No Guarantees:</strong> We make no representations or warranties about the accuracy, completeness, or timeliness of information provided. 
                  Past performance does not guarantee future results.
                </p>
                <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed text-sm`}>
                  <strong>User Responsibility:</strong> Users are solely responsible for their trading decisions and must conduct their own research and due diligence. 
                  You should consult with qualified professionals before making any financial decisions.
                </p>
                <p className={`${themeClasses.textSecondary} leading-relaxed text-sm`}>
                  <strong>Limitation of Liability:</strong> Securep2p.pro's liability is limited to the maximum extent permitted by law. 
                  We are not liable for any indirect, incidental, special, or consequential damages arising from the use of our platform.
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section>
              <div className={`bg-gradient-to-r ${darkMode ? 'from-red-900/20 to-orange-900/20' : 'from-red-50 to-orange-50'} rounded-xl p-6 border ${darkMode ? 'border-red-800' : 'border-red-200'} text-center`}>
                <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Risk Acknowledgment</h4>
                <p className={`text-sm ${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                  By using Securep2p.pro, you acknowledge that you have read, understood, and accepted all risks outlined in this disclosure. 
                  You confirm that you are trading at your own risk and that Securep2p.pro is not responsible for any losses you may incur.
                </p>
                <div className={`${darkMode ? 'bg-red-900/30' : 'bg-red-100'} rounded-lg p-3 text-xs ${darkMode ? 'text-red-300' : 'text-red-800'}`}>
                  <strong>Last Updated:</strong> January 2025 • <strong>Version:</strong> 2.1 • <strong>Contact:</strong> legal@securep2p.pro
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;