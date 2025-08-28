import React from 'react';
import { X, Shield, Eye, AlertTriangle, Users, Globe, FileText, Search, Lock, CheckCircle } from 'lucide-react';
import { ThemeClasses } from '../types';

interface AMLPolicyProps {
  darkMode: boolean;
  themeClasses: ThemeClasses;
  onClose: () => void;
}

const AMLPolicy: React.FC<AMLPolicyProps> = ({ darkMode, themeClasses, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className={`${themeClasses.cardBg} rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${darkMode ? 'from-blue-900/30 to-purple-900/30' : 'from-blue-50 to-purple-50'} p-6 border-b ${themeClasses.border} relative`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${themeClasses.hover} transition-colors`}
          >
            <X className={`w-5 h-5 ${themeClasses.textSecondary}`} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${themeClasses.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Anti-Money Laundering Policy</h2>
              <p className={`text-sm ${themeClasses.textSecondary}`}>Securep2p.pro AML Compliance Framework</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-8">
            {/* Policy Statement */}
            <section>
              <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'} rounded-xl p-6 mb-6`}>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className={`${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                    <h3 className="font-bold text-lg mb-3">Our Commitment to Financial Integrity</h3>
                    <p className="text-sm leading-relaxed">
                      Securep2p.pro is committed to preventing money laundering, terrorist financing, and other illicit financial activities. 
                      We maintain a comprehensive AML program that meets international standards while preserving user privacy through innovative compliance technologies.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AML Framework */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                1. AML Compliance Framework
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Our Anti-Money Laundering program is designed to detect, prevent, and report suspicious activities while maintaining user privacy:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Compliance Measures:</h4>
                  <ul className={`${darkMode ? 'text-green-400' : 'text-green-700'} space-y-2 text-sm`}>
                    <li>• Real-time transaction monitoring</li>
                    <li>• AI-powered risk assessment algorithms</li>
                    <li>• Blockchain analysis and tracing</li>
                    <li>• Sanctions screening and blacklist checks</li>
                    <li>• Suspicious Activity Report (SAR) filing</li>
                    <li>• Regular compliance audits and reviews</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Privacy-Preserving Approach:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• No traditional KYC document collection</li>
                    <li>• Behavioral analysis instead of identity verification</li>
                    <li>• Zero-knowledge compliance protocols</li>
                    <li>• Minimal data collection and retention</li>
                    <li>• Automated risk scoring systems</li>
                    <li>• Privacy-first compliance technology</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Transaction Monitoring */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Search className="w-5 h-5 mr-2 text-blue-600" />
                2. Transaction Monitoring System
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Securep2p.pro employs advanced monitoring systems to detect potentially suspicious activities:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-xl p-4 border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-3`}>Automated Monitoring:</h4>
                  <ul className={`${darkMode ? 'text-purple-400' : 'text-purple-700'} space-y-2 text-sm`}>
                    <li>• Real-time transaction analysis using machine learning</li>
                    <li>• Pattern recognition for unusual trading behavior</li>
                    <li>• Velocity checks and transaction frequency monitoring</li>
                    <li>• Cross-reference with known risk indicators</li>
                    <li>• Automated alerts for high-risk transactions</li>
                    <li>• Blockchain forensics and address clustering</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Risk Indicators:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• Transactions from high-risk jurisdictions</li>
                    <li>• Unusual transaction patterns or amounts</li>
                    <li>• Connections to known illicit addresses</li>
                    <li>• Rapid succession of large transactions</li>
                    <li>• Use of mixing or tumbling services</li>
                    <li>• Transactions involving sanctioned entities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                3. Prohibited Activities
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                The following activities are strictly prohibited on Securep2p.pro and will result in immediate account suspension and reporting to authorities:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} rounded-xl p-4 border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-3`}>Money Laundering Activities:</h4>
                  <ul className={`${darkMode ? 'text-red-400' : 'text-red-700'} space-y-2 text-sm`}>
                    <li>• Structuring transactions to avoid reporting thresholds</li>
                    <li>• Using multiple accounts to disguise transaction patterns</li>
                    <li>• Converting proceeds from illegal activities</li>
                    <li>• Facilitating transactions for third parties without disclosure</li>
                    <li>• Using the platform to obscure the source of funds</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Terrorist Financing:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• Funding terrorist organizations or activities</li>
                    <li>• Transactions involving sanctioned individuals or entities</li>
                    <li>• Supporting activities that threaten national security</li>
                    <li>• Facilitating transactions for designated terrorist groups</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} rounded-xl p-4 border ${darkMode ? 'border-yellow-800' : 'border-yellow-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-yellow-300' : 'text-yellow-800'} mb-3`}>Other Prohibited Uses:</h4>
                  <ul className={`${darkMode ? 'text-yellow-400' : 'text-yellow-700'} space-y-2 text-sm`}>
                    <li>• Drug trafficking and illegal substance trade</li>
                    <li>• Human trafficking and exploitation</li>
                    <li>• Fraud, theft, and financial crimes</li>
                    <li>• Tax evasion and unreported income</li>
                    <li>• Sanctions evasion and embargo violations</li>
                    <li>• Cybercrime and hacking activities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance Procedures */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                4. Compliance Procedures
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Securep2p.pro implements comprehensive compliance procedures to ensure AML effectiveness:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Risk Assessment Process:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Automated risk scoring for all transactions</li>
                    <li>• Enhanced due diligence for high-risk transactions</li>
                    <li>• Continuous monitoring of transaction patterns</li>
                    <li>• Regular review and updating of risk parameters</li>
                    <li>• Integration with global sanctions databases</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Reporting Procedures:</h4>
                  <ul className={`${darkMode ? 'text-green-400' : 'text-green-700'} space-y-2 text-sm`}>
                    <li>• Suspicious Activity Reports (SARs) filed within 30 days</li>
                    <li>• Currency Transaction Reports (CTRs) for large amounts</li>
                    <li>• Cooperation with law enforcement investigations</li>
                    <li>• Maintenance of comprehensive audit trails</li>
                    <li>• Regular reporting to financial intelligence units</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Customer Due Diligence */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                5. Customer Due Diligence (CDD)
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                While Securep2p.pro operates without traditional KYC, we implement alternative due diligence measures:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 border ${themeClasses.border}`}>
                  <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Behavioral Analysis:</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2 text-sm`}>
                    <li>• Transaction pattern analysis and profiling</li>
                    <li>• Wallet history and source of funds verification</li>
                    <li>• Cross-platform activity correlation</li>
                    <li>• Risk-based transaction limits and controls</li>
                    <li>• Enhanced monitoring for unusual activities</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-xl p-4 border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-3`}>Enhanced Due Diligence (EDD):</h4>
                  <ul className={`${darkMode ? 'text-purple-400' : 'text-purple-700'} space-y-2 text-sm`}>
                    <li>• Applied to high-value transactions (&gt;$10,000)</li>

                    <li>• Additional verification for high-risk jurisdictions</li>
                    <li>• Extended monitoring periods for suspicious patterns</li>
                    <li>• Manual review by compliance specialists</li>
                    <li>• Source of wealth verification when required</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Transaction Limits */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Lock className="w-5 h-5 mr-2 text-blue-600" />
                6. Transaction Limits and Controls
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                To prevent money laundering and ensure compliance, we implement the following transaction controls:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 text-center border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-2`}>$5,000</div>
                  <div className={`text-sm ${themeClasses.textSecondary} mb-2`}>Daily Limit</div>
                  <div className={`text-xs ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Standard Users</div>
                </div>
                
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 text-center border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-2`}>$25,000</div>
                  <div className={`text-sm ${themeClasses.textSecondary} mb-2`}>Monthly Limit</div>
                  <div className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Verified Users</div>
                </div>
                
                <div className={`${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-xl p-4 text-center border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-800'} mb-2`}>$100,000</div>
                  <div className={`text-sm ${themeClasses.textSecondary} mb-2`}>Enterprise Limit</div>
                  <div className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Business Accounts</div>
                </div>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 mb-4`}>
                <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Dynamic Limit Adjustments:</h4>
                <p className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}>
                  Transaction limits may be adjusted based on risk assessment, user behavior, market conditions, and regulatory requirements. 
                  Users engaging in suspicious activities may have their limits reduced or transactions blocked pending investigation.
                </p>
              </div>
            </section>

            {/* Sanctions Compliance */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                7. Sanctions Compliance
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Securep2p.pro maintains strict compliance with international sanctions programs:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} rounded-xl p-4 border ${darkMode ? 'border-red-800' : 'border-red-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-800'} mb-3`}>Sanctions Screening:</h4>
                  <ul className={`${darkMode ? 'text-red-400' : 'text-red-700'} space-y-2 text-sm`}>
                    <li>• Real-time screening against OFAC SDN list</li>
                    <li>• EU, UN, and other international sanctions lists</li>
                    <li>• Politically Exposed Persons (PEP) databases</li>
                    <li>• Ongoing monitoring for list updates</li>
                    <li>• Automatic blocking of sanctioned addresses</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Restricted Jurisdictions:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• Countries under comprehensive sanctions</li>
                    <li>• Regions with high money laundering risk</li>
                    <li>• Jurisdictions with inadequate AML frameworks</li>
                    <li>• Areas with active conflicts or instability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reporting Obligations */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                8. Reporting Obligations
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Securep2p.pro maintains comprehensive reporting procedures to comply with regulatory requirements:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-4 border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>Mandatory Reporting:</h4>
                  <ul className={`${darkMode ? 'text-blue-400' : 'text-blue-700'} space-y-2 text-sm`}>
                    <li>• Suspicious Activity Reports (SARs) for unusual patterns</li>
                    <li>• Currency Transaction Reports (CTRs) for large amounts</li>
                    <li>• Cross-border transaction reports</li>
                    <li>• Sanctions violations and blocked transactions</li>
                    <li>• Attempted prohibited activities</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} rounded-xl p-4 border ${darkMode ? 'border-green-800' : 'border-green-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} mb-3`}>Record Keeping:</h4>
                  <ul className={`${darkMode ? 'text-green-400' : 'text-green-700'} space-y-2 text-sm`}>
                    <li>• Transaction records maintained for 5 years</li>
                    <li>• Compliance documentation and audit trails</li>
                    <li>• Communication records with authorities</li>
                    <li>• Risk assessment and decision documentation</li>
                    <li>• Training records and policy updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Cooperation */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                <Eye className="w-5 h-5 mr-2 text-blue-600" />
                9. User Cooperation Requirements
              </h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Users must cooperate with our AML compliance efforts:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 border ${themeClasses.border}`}>
                  <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Required Cooperation:</h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2 text-sm`}>
                    <li>• Provide accurate information about transaction purposes</li>
                    <li>• Respond to compliance inquiries within 48 hours</li>
                    <li>• Provide additional documentation when requested</li>
                    <li>• Report suspicious activities or security breaches</li>
                    <li>• Maintain accurate contact information</li>
                    <li>• Comply with enhanced due diligence requests</li>
                  </ul>
                </div>
                
                <div className={`${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} rounded-xl p-4 border ${darkMode ? 'border-orange-800' : 'border-orange-200'}`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} mb-3`}>Consequences of Non-Cooperation:</h4>
                  <ul className={`${darkMode ? 'text-orange-400' : 'text-orange-700'} space-y-2 text-sm`}>
                    <li>• Transaction delays or suspension</li>
                    <li>• Account restrictions or closure</li>
                    <li>• Reporting to relevant authorities</li>
                    <li>• Legal action if warranted</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Training and Awareness */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>10. Staff Training and Awareness</h3>
              <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                Securep2p.pro maintains a comprehensive AML training program for all staff members:
              </p>
              <ul className={`${themeClasses.textSecondary} mb-4 space-y-2 ml-6`}>
                <li>• Regular AML training and certification programs</li>
                <li>• Updates on new regulations and compliance requirements</li>
                <li>• Suspicious activity recognition training</li>
                <li>• Customer interaction and escalation procedures</li>
                <li>• Annual compliance assessments and testing</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>11. AML Compliance Contact</h3>
              <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-6 border ${themeClasses.border}`}>
                <p className={`${themeClasses.text} font-medium mb-4`}>AML Compliance Officer</p>
                <div className="space-y-2 text-sm">
                  <p className={`${themeClasses.textSecondary}`}>Email: compliance@securep2p.pro</p>
                  <p className={`${themeClasses.textSecondary}`}>Suspicious Activity Reports: aml@securep2p.pro</p>
                  <p className={`${themeClasses.textSecondary}`}>Regulatory Inquiries: legal@securep2p.pro</p>
                  <p className={`${themeClasses.textSecondary}`}>Emergency Compliance Hotline: Available 24/7</p>
                </div>
                
                <div className={`mt-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'} rounded-lg p-3`}>
                  <p className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                    <strong>Policy Version:</strong> 3.2 • <strong>Last Updated:</strong> January 2025 • <strong>Next Review:</strong> July 2025
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AMLPolicy;